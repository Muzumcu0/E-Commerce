-- =============================================
-- LUXE CLOTHING — Supabase Database Schema
-- =============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- -------------------------
-- CATEGORIES
-- -------------------------
create table if not exists categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  created_at timestamptz default now()
);

-- Seed categories
insert into categories (name, slug) values
  ('Men', 'men'),
  ('Sweatshirts', 'sweats'),
  ('Outerwear', 'outerwear'),
  ('Accessories', 'accessories'),
  ('Collections', 'collections')
on conflict (slug) do nothing;

-- -------------------------
-- PRODUCTS
-- -------------------------
create table if not exists products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  price numeric(10, 2) not null,
  images text[] default '{}',
  category_id uuid references categories(id) on delete set null,
  sizes text[] default '{}',
  colors text[] default '{}',
  stock integer not null default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- -------------------------
-- ORDERS
-- -------------------------
create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid,  -- references auth.users(id) when auth is enabled
  total numeric(10, 2) not null,
  status text not null default 'pending'
    check (status in ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
  shipping_address jsonb not null default '{}',
  created_at timestamptz default now()
);

-- -------------------------
-- ORDER ITEMS
-- -------------------------
create table if not exists order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  quantity integer not null default 1,
  size text,
  color text,
  price numeric(10, 2) not null,
  created_at timestamptz default now()
);

-- =============================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================

-- Products: anyone can read, only service role can write
alter table products enable row level security;
create policy "Products are viewable by everyone"
  on products for select using (is_active = true);

-- Categories: public read
alter table categories enable row level security;
create policy "Categories are viewable by everyone"
  on categories for select using (true);

-- Orders: users see only their own orders
alter table orders enable row level security;
create policy "Users can view their own orders"
  on orders for select using (auth.uid() = user_id);
create policy "Users can create orders"
  on orders for insert with check (true);

-- Order items: visible with order
alter table order_items enable row level security;
create policy "Order items visible with order"
  on order_items for select using (
    order_id in (
      select id from orders where user_id = auth.uid()
    )
  );
create policy "Order items can be created"
  on order_items for insert with check (true);

-- =============================================
-- STORAGE BUCKET (product images)
-- =============================================

-- Run this in Supabase Dashboard > Storage > New Bucket
-- Name: product-images
-- Public: true
