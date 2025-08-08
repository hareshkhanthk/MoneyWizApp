// src/pages/index.tsx: Main dashboard page
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useStore } from '../store/useStore';
import supabase from '../utils/supabaseClient';
import { formatCurrency } from '../utils/format';
import TransactionTable from '../components/TransactionTable';

export default function Dashboard() {
  const { user } = useStore();
  const [balance, setBalance] = useState<number>(0);
  const [recentTx, setRecentTx] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      setLoading(true);

      try {
        // Fetch account balances
        const {  accounts, error: accountError } = await supabase
          .from('accounts')
          .select('balance')
          .eq('family_id', user.family_id);

        if (accountError) throw accountError;
        const total = accounts?.reduce((sum, acc) => sum + (acc.balance || 0), 0) || 0;
        setBalance(total);

        // Fetch recent transactions
        const {  txs, error: txError } = await supabase
          .from('transactions')
          .select('*')
          .eq('family_id', user.family_id)
          .order('date', { ascending: false })
          .limit(5);

        if (txError) throw txError;

        setRecentTx(txs || []);
      } catch (err) {
        console.error('Error loading dashboard:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (!user) {
    return <Text fontSize="xl">Please log in to access the dashboard.</Text>;
  }

  return (
    <VStack spacing={6} p={4} align="stretch">
      <Heading>Dashboard</Heading>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Box p={4} bg="gray.50" rounded="md" shadow="sm">
            <Text fontSize="lg" fontWeight="bold">
              Total Balance:
            </Text>
            <Text fontSize="2xl" color="green.500">
              {formatCurrency(balance, 'USD')}
            </Text>
          </Box>

          <Button colorScheme="blue" alignSelf="flex-start">
            Add Transaction
          </Button>

          {/* Recent Transactions Table */}
          <TransactionTable transactions={recentTx} />
        </>
      )}
    </VStack>
  );
}
