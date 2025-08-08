// src/pages/family-invite.tsx: Invite family members via email, manage sharing
import { Box, Button, Input, VStack, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import supabase from '../utils/supabaseClient';
import { useStore } from '../store/useStore';

export default function FamilyInvite() {
  const { user } = useStore();
  const [inviteEmail, setInviteEmail] = useState('');
  const toast = useToast();

  const sendInvite = async () => {
    if (!user?.family_id) return toast({ title: 'No family ID', status: 'error' });

    // Logic: Insert invite into a invites table or send email via Supabase edge function (simplified here)
    const { error } = await supabase.from('family_invites').insert({
      family_id: user.family_id,
      invited_email: inviteEmail,
      invited_by: user.id
    });

    if (error) {
      toast({ title: 'Invite failed', status: 'error' });
    } else {
      toast({ title: 'Invite sent!', status: 'success' });
      setInviteEmail('');
    }
  };

  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="xl">Invite Family Member</Text>
      <Input placeholder="Email to invite" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} />
      <Button colorScheme="primary" onClick={sendInvite}>Send Invite</Button>
    </VStack>
  );
}
