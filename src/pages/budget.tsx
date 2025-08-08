// src/pages/budget.tsx: Manage budgets, goals, recurring bills/subscriptions with reminders
import { Box, Button, Input, Select, VStack, Text, Progress } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import supabase from '../utils/supabaseClient';
import { useStore } from '../store/useStore';
import BudgetGoal from '../components/BudgetGoal'; // Assuming component

export default function Budget() {
  const { user } = useStore();
  const [budgets, setBudgets] = useState<any[]>([]);
  const [newBudget, setNewBudget] = useState({ category_id: '', limit_amount: 0, period: 'monthly' });

  useEffect(() => {
    if (user) {
      const fetchBudgets = async () => {
        const { data } = await supabase.from('budgets').select('*').eq('family_id', user.family_id);
        setBudgets(data || []);
      };
      fetchBudgets();
    }
  }, [user]);

  const addBudget = async () => {
    await supabase.from('budgets').insert({ ...newBudget, family_id: user?.family_id, start_date: new Date() });
    // Refetch
  };

  return (
    <VStack spacing={6} p={4}>
      <Text fontSize="xl">Budgets & Goals</Text>
      {budgets.map((b) => (
        <BudgetGoal key={b.id} budget={b} /> // Progress bar, etc.
      ))}
      <Box>
        <Text>Add Budget</Text>
        {/* Form fields similar to above */}
        <Button onClick={addBudget}>Add</Button>
      </Box>
      {/* Similar section for recurring bills */}
    </VStack>
  );
}
