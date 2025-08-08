import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export default function TransactionTable({ transactions }: { transactions: any[] }) {
  return (
    <Table variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Description</Th>
          <Th>Amount</Th>
          <Th>Category</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((tx) => (
          <Tr key={tx.id}>
            <Td>{tx.date}</Td>
            <Td>{tx.description}</Td>
            <Td>{tx.amount}</Td>
            <Td>{tx.category}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
