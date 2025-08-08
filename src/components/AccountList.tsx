// src/components/AccountList.tsx: Simple list of accounts
import { Box, Text, VStack } from '@chakra-ui/react';
import { formatCurrency } from '../utils/format';

interface Account {
  id: string;
  name: string;
  balance: number;
  currency: string;
}

export default function AccountList({ accounts }: { accounts: Account[] }) {
  return (
    <VStack spacing={2}>
      {accounts.map((acc) => (
        <Box key={acc.id} p={2} borderWidth={1} w="full">
          <Text>{acc.name}: {formatCurrency(acc.balance, acc.currency)}</Text>
        </Box>
      ))}
    </VStack>
  );
}
