// src/components/FileUpload.tsx: Upload images to Supabase Storage
import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import supabase from '../utils/supabaseClient';

export default function FileUpload({ onUpload }: { onUpload?: (url: string) => void }) {
  const [file, setFile] = useState<File | null>(null);

  const upload = async () => {
    if (!file) return;
    const { data, error } = await supabase.storage.from('receipts').upload(`receipts/${file.name}`, file);
    if (error) console.error(error);
    else onUpload?.(data?.path || '');
  };

  return (
    <>
      <Input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <Button onClick={upload}>Upload Receipt</Button>
    </>
  );
}
