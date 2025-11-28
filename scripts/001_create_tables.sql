-- Create news table
create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  icon text,
  image_url text,
  published_date timestamp with time zone default now(),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create services table
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  name text not null,
  price numeric not null,
  unit text,
  sort_order integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create doctors table
create table if not exists public.doctors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  specialty text not null,
  description text,
  image_url text,
  sort_order integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create site_content table for managing various content sections
create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  section text not null unique,
  content jsonb not null,
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.news enable row level security;
alter table public.services enable row level security;
alter table public.doctors enable row level security;
alter table public.site_content enable row level security;

-- Create policies for public read access
create policy "Allow public read access to news"
  on public.news for select
  using (true);

create policy "Allow public read access to services"
  on public.services for select
  using (true);

create policy "Allow public read access to doctors"
  on public.doctors for select
  using (true);

create policy "Allow public read access to site_content"
  on public.site_content for select
  using (true);

-- Create policies for authenticated users (admins) to manage content
create policy "Allow authenticated users to insert news"
  on public.news for insert
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated users to update news"
  on public.news for update
  using (auth.role() = 'authenticated');

create policy "Allow authenticated users to delete news"
  on public.news for delete
  using (auth.role() = 'authenticated');

create policy "Allow authenticated users to insert services"
  on public.services for insert
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated users to update services"
  on public.services for update
  using (auth.role() = 'authenticated');

create policy "Allow authenticated users to delete services"
  on public.services for delete
  using (auth.role() = 'authenticated');

create policy "Allow authenticated users to insert doctors"
  on public.doctors for insert
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated users to update doctors"
  on public.doctors for update
  using (auth.role() = 'authenticated');

create policy "Allow authenticated users to delete doctors"
  on public.doctors for delete
  using (auth.role() = 'authenticated');

create policy "Allow authenticated users to insert site_content"
  on public.site_content for insert
  with check (auth.role() = 'authenticated');

create policy "Allow authenticated users to update site_content"
  on public.site_content for update
  using (auth.role() = 'authenticated');

-- Create indexes for better performance
create index if not exists news_published_date_idx on public.news(published_date desc);
create index if not exists services_category_idx on public.services(category);
create index if not exists doctors_sort_order_idx on public.doctors(sort_order);
