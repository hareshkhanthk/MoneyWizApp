// src/pages/transactions.tsx: Core transaction management with form, table, filters, CSV import
import { Box, Button, VStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import supabase from '../utils/supabaseClient';
import { useStore } from '../store/useStore';
import TransactionTable from '../components/TransactionTable';
import TransactionForm from '../components/TransactionForm';
import FileUpload from '../components/FileUpload'; // For receipts

export default function Transactions() {
  const { user } = useStore();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (user) {
      const fetchTx = async () => {
        const { data } = await supabase.from('transactions').select('*').eq('family_id', user.family_id);
        setTransactions(data || []);
      };
      fetchTx();

      // Real-time subscription
      const sub = supabase.channel('transactions').on('postgres_changes', { event: '*', schema: 'public', table: 'transactions' }, (payload) => {
        fetchTx(); // Refetch on change
      }).subscribe();

      return () => { supabase.removeChannel(sub); };
    }
  }, [user]);

  return (
    <VStack spacing={6} p={4}>
      <Text fontSize="xl">Transactions</Text>
      <Button onClick={() => setShowForm(true)}>Add Transaction</Button>
      {showForm && <TransactionForm onClose={() => setShowForm(false)} />}
      <TransactionTable transactions={transactions} />
      {/* Import button linking to /api/import */}
      <FileUpload /> {/* For receipt attachments */}
    </VStack>
  );
}
