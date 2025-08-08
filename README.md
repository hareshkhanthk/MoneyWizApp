# MoneyWiz-Style Personal Finance App (Next.js + Supabase)

A complete open-source, mobile-friendly budgeting, tracking & reporting app for personal/family finance.

---

## 🌱 Features

- **Multi-user/multi-family:** Invite family, share securely
- **Multiple currencies:** Track global accounts, auto-formatting
- **Manual add/edit/delete/import (CSV), image receipts:** Drag-drop, receipts to Supabase Storage
- **Budgets, recurring bills/goals:** Alerts & charts for healthy spending
- **Categories/tags:** Filter/search by category, income/expense/source
- **Reports:** Interactive charts—spend by month, by category, trends
- **Data privacy:** Users only see within their family/household
- **Export/Import CSV:** Excel/Google Sheets compatible
- **Responsive, modern UI:** Chakra UI, mobile-first


---

## 🚀 1. Getting Started

1. **Clone or download this repo**
2. Install **Node.js 18+**, **npm**, and (optionally) `ts-node` if you want to run scripts.
3. Copy `.env.sample` to `.env` and fill out using your Supabase credentials.

### One-click setup:

git clone 
cd 
npm install
cp .env.sample .env

Fill .env with your Supabase project values


---

## ⚙️ 2. Supabase Setup (Database, Auth, Storage)

1. **[Create a free Supabase project](https://app.supabase.com/)**  
   - Get `SUPABASE_URL` and `SUPABASE_ANON_KEY` from Project > Settings > API.

2. **Create Database Tables & Policies**

   - Go to Project > SQL Editor > New Query  
   - Paste and run the SQL from `supabase/init.sql`.

   *(This creates Users, Families, Accounts, Transactions, Categories, Budgets, RecurringBills, Subscriptions, etc)*

3. **Add Storage Bucket for Receipts**

   - Go to Project > Storage > New bucket  
     Name: `receipts`  
     Public: No (for privacy)
   
   - Instructions in `supabase/buckets.md`

4. **Update `.env` with your values!**

--- 

## 🖥️ 3. Run the App Locally

npm run dev

- Visit http://localhost:3000

---

## 📦 4. Test with CSVs

- `data/sample_transactions.csv` and `data/categories.csv`  
  Use these for import/export features.

---

## 🛡️ 5. Deploy for Free

- **Vercel:**  
  - Push code to GitHub > import into Vercel [vercel.com/import](https://vercel.com/import)
  - Set your `.env` secrets in Vercel dashboard as ENV variables.
- No server to manage! All auth/storage/db via Supabase.

---

## 🔑 `.env` — Required Variables

SUPABASE_URL=
SUPABASE_ANON_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
(Yes, both SUPABASE_ and NEXT_PUBLIC_ variants for server/client)

---

## 🏗️ Folders and Customization

- **`src/pages/`** — Each main page (dashboard, transactions, budgets, login, reports).
- **`src/components/`** — Re-usable widgets and UI elements (forms, charts, etc).
- **`src/utils/`** — Utility functions (CSV parsing, formatting, Supabase client).
- **`src/store/`** — App-wide state logic using Zustand.
- **`src/theme/`** — Chakra UI theme customization (colors, fonts, breakpoints).

### **Customizing accounts/categories:**

- **Accounts:** Managed in `src/pages/accounts.tsx`. Add your banking/credit/cash accounts.  
- **Categories:** Edit/add (`src/pages/settings.tsx`), or import via `data/categories.csv`.
- **Users/Families:** Invite users via the "Family Invite" UI (`src/pages/family-invite.tsx`); family-based permissions via table relationships and RLS (Row Level Security) in Supabase.
- **Sharing:** Each household/family gets its own data silo!

---

## 💬 Need Help?

- See inline comments in each file!
- Troubles? Ask at [Supabase Discord](https://discord.com/invite/supabase) or [Next.js Discord](https://discord.com/invite/nextjs).

---
