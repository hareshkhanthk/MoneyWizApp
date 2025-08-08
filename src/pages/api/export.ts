// src/pages/api/export.ts: Generate and download CSV from Supabase data
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../utils/supabaseClient';
import { stringifyCSV } from '../../utils/csv';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await supabase.from('transactions').select('*'); // Filter by family_id
    const csv = stringifyCSV(data || [], ['date', 'amount', 'category', /* etc */]);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=transactions.csv');
    res.status(200).send(csv);
  } catch (error) {
    res.status(500).json({ error: 'Export failed' });
  }
}
