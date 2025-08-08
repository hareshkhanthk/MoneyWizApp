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
        const { data: accounts, error: accountsError } = await supabase
          .from('accounts')
          .select('balance')
          .eq('family_id', user.family_id);

        if (accountsError) throw accountsError;
        const total = accounts?.reduce((sum, acc) => sum + (acc.balance || 0), 0) || 0;
        setBalance(total);

        const { data: txs, error: txError } = await supabase
          .from('transactions')
          .select('*')
          .eq('family_id', user.family_id)
          .order('date', { ascending: false })
          .limit(5);

        if (txError) throw txError;
        setRecentTx(txs || []);
      } catch (err) {
        console.error('Error fetching ', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (!user) return <Text fontSize="xl">Please log in to view the dashboard.</Text>;

  return (
    <VStack spacing={6} p={4} align="stretch">
      <Heading>Dashboard</Heading>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Box p={4} bg="gray.50" rounded="md" shadow="sm">
            <Text fontSize="lg" fontWeight="bold">Total Balance:</Text>
            <Text fontSize="2xl" color="teal.500">{formatCurrency(balance, 'USD')}</Text>
          </Box>

          <Button colorScheme="blue">Add Transaction</Button>

          <TransactionTable transactions={recentTx} />
        </>
      )}
    </VStack>
  );
}
