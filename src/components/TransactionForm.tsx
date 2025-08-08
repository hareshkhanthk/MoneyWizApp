// src/components/TransactionForm.tsx: Modal form for transaction details
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import supabase from '../utils/supabaseClient';
import CategoryTagSelect from './CategoryTagSelect';
import FileUpload from './FileUpload';

export default function TransactionForm({ onClose }: { onClose: () => void }) {
  const { isOpen } = useDisclosure({ defaultIsOpen: true });
  const [form, setForm] = useState({ amount: 0, date: '', category_id: '', /* etc */ });

  const save = async () => {
    await supabase.from('transactions').insert(form);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Amount</FormLabel>
            <Input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })} />
          </FormControl>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          </FormControl>
          <CategoryTagSelect onSelect={(id) => setForm({ ...form, category_id: id })} />
          <FileUpload onUpload={(url) => setForm({ ...form, receipt_url: url })} />
          <Button onClick={save}>Save</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
