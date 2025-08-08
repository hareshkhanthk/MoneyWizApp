// src/components/TransactionTable.tsx: Filterable table with search
import { Box, Input, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useState } from 'react';
import { formatCurrency, formatDate } from '../utils/format';

export default function TransactionTable({ transactions }: { transactions: any[] }) {
  const [search, setSearch] = useState('');

  const filtered = transactions.filter((tx) => tx.description?.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box>
      <Input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filtered.map((tx) => (
            <Tr key={tx.id}>
              <Td>{formatDate(tx.date)}</Td>
              <Td>{formatCurrency(tx.amount, tx.currency)}</Td>
              <Td>{tx.description}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
