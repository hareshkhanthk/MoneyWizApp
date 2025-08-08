// src/components/Navbar.tsx: Mobile-friendly nav with Chakra UI
import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useStore } from '../store/useStore';
import supabase from '../utils/supabaseClient';

export default function Navbar() {
  const { user } = useStore();

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Flex p={4} bg="primary.500" color="white" justify="space-between">
      <Text fontSize="xl">MoneyWiz</Text>
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" />
        <MenuList color="black">
          <Link href="/"><MenuItem>Dashboard</MenuItem></Link>
          <Link href="/transactions"><MenuItem>Transactions</MenuItem></Link>
          <Link href="/budget"><MenuItem>Budgets</MenuItem></Link>
          <Link href="/reports"><MenuItem>Reports</MenuItem></Link>
          <Link href="/accounts"><MenuItem>Accounts</MenuItem></Link>
          <Link href="/family-invite"><MenuItem>Invite Family</MenuItem></Link>
          <Link href="/settings"><MenuItem>Settings</MenuItem></Link>
          {user && <MenuItem onClick={logout}>Logout</MenuItem>}
        </MenuList>
      </Menu>
    </Flex>
  );
}
