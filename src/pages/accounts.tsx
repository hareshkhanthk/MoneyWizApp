// src/pages/accounts.tsx: List, add, edit accounts with multi-currency support
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import supabase from '../utils/supabaseClient';
import { useStore } from '../store/useStore';
import AccountList from '../components/AccountList'; // Assuming component

export default function Accounts() {
  const { user } = useStore();
  const [accounts, setAccounts] = useState<any[]>([]);
  const [newAccount, setNewAccount] = useState({ name: '', currency: 'USD', balance: 0 });

  useEffect(() => {
    if (user) {
      const fetchAccounts = async () => {
        const { data } = await supabase.from('accounts').select('*').eq('family_id', user.family_id);
        setAccounts(data || []);
      };
      fetchAccounts();
    }
  }, [user]);

  const addAccount = async () => {
    await supabase.from('accounts').insert({ ...newAccount, family_id: user?.family_id });
    setNewAccount({ name: '', currency: 'USD', balance: 0 });
    // Refetch accounts
  };

  return (
    <VStack spacing={6} p={4}>
      <Text fontSize="xl">Your Accounts</Text>
      <AccountList accounts={accounts} />
      <Box>
        <Text>Add New Account</Text>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={newAccount.name} onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })} />
        </FormControl>
        <FormControl>
          <FormLabel>Currency</FormLabel>
          <Select value={newAccount.currency} onChange={(e) => setNewAccount({ ...newAccount, currency: e.target.value })}>
            <option>USD</option>
            <option>EUR</option>
            {/* Add more from currencies table */}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Initial Balance</FormLabel>
          <Input type="number" value={newAccount.balance} onChange={(e) => setNewAccount({ ...newAccount, balance: Number(e.target.value) })} />
        </FormControl>
        <Button onClick={addAccount}>Add</Button>
      </Box>
    </VStack>
  );
}
