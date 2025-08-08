// src/pages/api/import.ts: Next.js API route for uploading and parsing CSV transactions
import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../utils/supabaseClient';
import { parseCSV } from '../../utils/csv';
import multer from 'multer'; // For file upload handling
import nextConnect from 'next-connect';

const upload = multer({ dest: '/tmp' });

const handler = nextConnect()
  .use(upload.single('file'))
  .post(async (req: NextApiRequest & { file: any }, res: NextApiResponse) => {
    try {
      const csvData = await parseCSV(req.file.buffer.toString()); // Parse uploaded CSV
      // Insert parsed data into transactions table
      const { error } = await supabase.from('transactions').insert(csvData.map((row: any) => ({
        // Map fields: date, amount, etc.
        date: row.date,
        amount: row.amount,
        // ... family_id from auth
      })));
      if (error) throw error;
      res.status(200).json({ message: 'Imported successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Import failed' });
    }
  });

export default handler;

export const config = {
  api: {
    bodyParser: false, // For multer
  },
};
