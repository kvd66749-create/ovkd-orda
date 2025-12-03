-- ====================================================================
-- 001_create_tables.sql
-- Full database setup: admin_users, news, services, doctors, storage
-- ====================================================================

-----------------------------
-- 1. admin_users TABLE
-----------------------------
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view their own profile"
  ON admin_users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Admins can update their own profile"
  ON admin_users FOR UPDATE
  USING (auth.uid() = id);


-----------------------------
-- 2. news TABLE
-----------------------------
CREATE TABLE IF NOT EXISTS news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subtitle TEXT,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  published_date DATE NOT NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Full access for all authenticated users
CREATE POLICY "Users can select news"
  ON news FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can insert news"
  ON news FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Users can update news"
  ON news FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Users can delete news"
  ON news FOR DELETE TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_news_status ON news(status);
CREATE INDEX IF NOT EXISTS idx_news_published_date ON news(published_date DESC);


-----------------------------
-- 3. services TABLE
-----------------------------
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  category TEXT NOT NULL,
  features TEXT[],
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can select services"
  ON services FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can insert services"
  ON services FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Users can update services"
  ON services FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Users can delete services"
  ON services FOR DELETE TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_services_status ON services(status);


-----------------------------
-- 4. doctors TABLE
-----------------------------
CREATE TABLE IF NOT EXISTS doctors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  specialization TEXT NOT NULL,
  qualifications TEXT NOT NULL,
  experience_years INTEGER NOT NULL,
  email TEXT,
  phone TEXT,
  bio TEXT,
  image_url TEXT,
  availability_schedule JSONB,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'on_leave')),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can select doctors"
  ON doctors FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can insert doctors"
  ON doctors FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Users can update doctors"
  ON doctors FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Users can delete doctors"
  ON doctors FOR DELETE TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_doctors_status ON doctors(status);
CREATE INDEX IF NOT EXISTS idx_doctors_specialization ON doctors(specialization);


-----------------------------
-- 5. Trigger: handle_new_admin_user
-----------------------------
CREATE OR REPLACE FUNCTION public.handle_new_admin_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.admin_users (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NULL)
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_admin_user_created ON auth.users;

CREATE TRIGGER on_admin_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_admin_user();


-----------------------------
-- 6. STORAGE BUCKET + POLICIES
-----------------------------
INSERT INTO storage.buckets (id, name, public)
VALUES ('news-images', 'news-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow authenticated users to manage images
CREATE POLICY "Users can upload images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'news-images');

CREATE POLICY "Users can view images"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'news-images');

CREATE POLICY "Users can update images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'news-images');

CREATE POLICY "Users can delete images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'news-images');

