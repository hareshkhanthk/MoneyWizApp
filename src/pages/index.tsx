// src/pages/index.tsx: Main dashboard with balance summary, recent transactions, and quick add
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { useStore } from '../store/useStore';
import supabase from '../utils/supabaseClient';
import { useEffect, useState } from 'react';
import { formatCurrency } from '../utils/format';
import TransactionTable from '../components/TransactionTable'; // Assuming we have this component

export default function Dashboard() {
  const { user } = useStore();
  const [balance, setBalance] = useState(0);
  const [recentTx, setRecentTx] = useState<any[]>([]);

  useEffect(() => {
  if (user) {
    const fetchData = async () => {
      // Fetch accounts
      const { data: accounts, error: accountsError } = await supabase
        .from('accounts')
        .select('balance')
        .eq('family_id', user.family_id);

      const total = accounts?.reduce((sum, acc) => sum + acc.balance, 0) || 0;
      setBalance(total);

      // Fetch recent transactions
      const { data: tx, error: txError } = await supabase
        .from('transactions')
        .select('*')
        .eq('family_id', user.family_id)
        .order('date', { ascending: false })
        .limit(5);

      setRecentTx(tx || []);
    };
    fetchData();
  }
}, [user]);
  if (!user) return <Text>Please log in.</Text>;

  return (
    <VStack spacing={6} p={4}>
      <Heading>Dashboard</Heading>
      <Box>
        <Text fontSize="2xl">Total Balance: {formatCurrency(balance, 'USD')}</Text>
      </Box>
      <Button colorScheme="primary">Add Transaction</Button> {/* Link to TransactionForm */}
      <TransactionTable transactions={recentTx} /> {/* Recent transactions table */}
    </VStack>
  );
}
