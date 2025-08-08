-- Create Family table
CREATE TABLE families (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- User <-> Family membership + roles
CREATE TABLE family_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id uuid REFERENCES families(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL DEFAULT 'member'
);

-- Currencies table (static)
CREATE TABLE currencies (
  code text PRIMARY KEY,
  symbol text,
  name text
);

-- Accounts
CREATE TABLE accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id uuid REFERENCES families(id) ON DELETE CASCADE,
  name text NOT NULL,
  currency text REFERENCES currencies(code),
  balance numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  archived boolean DEFAULT false
);

-- Categories
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id uuid REFERENCES families(id) ON DELETE CASCADE,
  name text NOT NULL,
  type text NOT NULL, -- expense/income/transfer
  icon text
);

-- Transactions
CREATE TABLE transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES accounts(id) ON DELETE CASCADE,
  family_id uuid REFERENCES families(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id),
  amount numeric NOT NULL,
  currency text REFERENCES currencies(code),
  description text,
  date timestamptz NOT NULL,
  type text, -- expense/income/transfer
  tags text[],
  user_id uuid REFERENCES auth.users(id),
  receipt_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Budgets
CREATE TABLE budgets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id uuid REFERENCES families(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id),
  period text NOT NULL, -- monthly/weekly/etc.
  limit_amount numeric NOT NULL,
  start_date timestamptz NOT NULL,
  end_date timestamptz
);

-- Recurring Bills (subscriptions too)
CREATE TABLE recurring_bills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id uuid REFERENCES families(id),
  name text NOT NULL,
  amount numeric NOT NULL,
  category_id uuid REFERENCES categories(id),
  cycle text NOT NULL, -- monthly/weekly/etc.
  next_due_date timestamptz NOT NULL,
  reminder boolean DEFAULT true
);

-- Policies (RLS)
-- Enable row-level security
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE budgets ENABLE ROW LEVEL SECURITY;
ALTER TABLE recurring_bills ENABLE ROW LEVEL SECURITY;

-- Only allow users in family to access
CREATE POLICY "Family members only" ON accounts
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM family_members WHERE family_id = accounts.family_id AND user_id = auth.uid()
  ));

CREATE POLICY "Family members only" ON transactions
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM family_members WHERE family_id = transactions.family_id AND user_id = auth.uid()
  ));

-- (repeat for other tables, as above)
