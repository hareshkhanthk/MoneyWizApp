// src/components/BudgetGoal.tsx: Display budget progress
import { Box, Progress, Text } from '@chakra-ui/react';

interface Budget {
  limit_amount: number;
  // Add spent_amount from query
}

export default function BudgetGoal({ budget }: { budget: Budget & { spent: number } }) {
  const progress = (budget.spent / budget.limit_amount) * 100;

  return (
    <Box>
      <Text>Budget: {budget.limit_amount}</Text>
      <Progress value={progress} colorScheme={progress > 80 ? 'red' : 'green'} />
    </Box>
  );
}
