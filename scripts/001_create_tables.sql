-- 1. admin_users table
CREATE TABLE IF NOT EXISTS admin_users (...);
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY ...;

-- 2. news table
CREATE TABLE IF NOT EXISTS news (...);
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
CREATE POLICY ...;

-- 3. services table
CREATE TABLE IF NOT EXISTS services (...);
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
CREATE POLICY ...;

-- 4. doctors table
CREATE TABLE IF NOT EXISTS doctors (...);
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
CREATE POLICY ...;

-- 5. handle_new_admin_user trigger
CREATE FUNCTION ...;
CREATE TRIGGER ...;

-- 6. seed data (optional)
INSERT INTO news (...) VALUES (...);
INSERT INTO services (...) VALUES (...);
INSERT INTO doctors (...) VALUES (...);

-- 7. storage policies
CREATE POLICY ...;
INSERT INTO storage.buckets (...);
