// src/components/CategoryTagSelect.tsx: Dropdown for categories and tags
import { Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import supabase from '../utils/supabaseClient';
import { useStore } from '../store/useStore';

export default function CategoryTagSelect({ onSelect }: { onSelect: (id: string) => void }) {
  const { user } = useStore();
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      const fetch = async () => {
        const { data } = await supabase.from('categories').select('*').eq('family_id', user.family_id);
        setCategories(data || []);
      };
      fetch();
    }
  }, [user]);

  return (
    <Select onChange={(e) => onSelect(e.target.value)}>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.id}>{cat.name}</option>
      ))}
    </Select>
  );
}
