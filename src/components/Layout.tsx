// src/components/Layout.tsx: Responsive layout with navbar and main content
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import AuthGuard from './AuthGuard';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <Box minH="100vh">
        <Navbar />
        <Box p={4}>{children}</Box>
      </Box>
    </AuthGuard>
  );
}
