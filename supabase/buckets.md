# Supabase Storage Buckets

1. In Supabase dashboard → Storage → Create bucket
   - **Bucket name:** receipts
   - **Public:** NO (for privacy)
2. In policies for 'receipts', add:
   - Only allow authenticated users to `SELECT` receipt files (match `auth.uid()`).
