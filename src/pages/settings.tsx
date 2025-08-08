// src/pages/settings.tsx: Manage categories, export data, app settings
import { Box, Button, VStack, Text } from '@chakra-ui/react';
import { useStore } from '../store/useStore';
import CategoryTagSelect from '../components/CategoryTagSelect'; // Assuming

export default function Settings() {
  const { user } = useStore();

  const exportCSV = async () => {
    // Call /api/export or use csv.ts to generate
    // Download logic here
  };

  return (
    <VStack spacing={6} p={4}>
      <Text fontSize="xl">Settings</Text>
      <CategoryTagSelect /> {/* Edit categories */}
      <Button onClick={exportCSV}>Export to CSV</Button>
    </VStack>
  );
}
