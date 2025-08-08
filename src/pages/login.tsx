// src/pages/login.tsx: Handles email/password auth with Supabase
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import supabase from '../utils/supabaseClient';
import { useRouter } from 'next/router';
import { useStore } from '../store/useStore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const { setUser } = useStore();

  const handleAuth = async () => {
    try {
      let result;
      if (isRegister) {
        result = await supabase.auth.signUp({ email, password });
      } else {
        result = await supabase.auth.signInWithPassword({ email, password });
      }
      if (result.error) throw result.error;
      setUser({ id: result.data.user!.id, email, family_id: '' }); // Update family_id post-signup
      toast({ title: 'Success', status: 'success' });
      router.push('/');
    } catch (error: any) {
      toast({ title: error.message, status: 'error' });
    }
  };

  return (
    <VStack spacing={4} p={8} maxW="md" mx="auto">
      <Text fontSize="2xl">{isRegister ? 'Register' : 'Login'}</Text>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="primary" onClick={handleAuth}>
        {isRegister ? 'Register' : 'Login'}
      </Button>
      <Button variant="link" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Switch to Login' : 'Switch to Register'}
      </Button>
    </VStack>
  );
}
