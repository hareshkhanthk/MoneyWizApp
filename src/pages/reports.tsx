// src/pages/reports.tsx: Generate reports with Recharts (category spend, monthly trends)
import { Box, Heading, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import supabase from '../utils/supabaseClient';
import { useStore } from '../store/useStore';
import Charts from '../components/Charts';

export default function Reports() {
  const { user } = useStore();
  const [reportData, setReportData] = useState<any>({});

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        // Aggregate queries for spending per category, monthly trends, etc.
        const {  monthly } = await supabase.from('transactions').select('date, amount').eq('family_id', user.family_id);
        // Process data for charts
        setReportData({ monthly }); // Simplified
      };
      fetchData();
    }
  }, [user]);

  return (
    <VStack spacing={6} p={4}>
      <Heading>Reports</Heading>
      <Charts data={reportData} /> {/* Pass data to Recharts components */}
    </VStack>
  );
}
