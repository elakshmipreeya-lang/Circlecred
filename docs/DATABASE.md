# CircleCred Database Design (PostgreSQL / Supabase)

---

## Planned Tables

### 1. `users`
- `id` (UUID, Primary Key)
- `phone_number` (Text, Unique)
- `full_name` (Text)
- `upi_id` (Text)
- `created_at` (Timestamp)

### 2. `circles`
- `id` (UUID, Primary Key)
- `name` (Text)
- `contribution_amount` (Numeric)
- `frequency` (Text: `WEEKLY`, `MONTHLY`)
- `total_members` (Integer)
- `status` (Text: `PENDING`, `ACTIVE`, `COMPLETED`)
- `created_at` (Timestamp)

### 3. `circle_members`
- `circle_id` (UUID, Foreign Key)
- `user_id` (UUID, Foreign Key)
- `payout_order` (Integer)
- `joined_at` (Timestamp)

### 4. `contributions`
- `id` (UUID, Primary Key)
- `circle_id` (UUID, Foreign Key)
- `user_id` (UUID, Foreign Key)
- `cycle_number` (Integer)
- `amount` (Numeric)
- `status` (Text: `PENDING`, `COMPLETED`, `LATE`)
- `transaction_ref` (Text)
- `timestamp` (Timestamp)

### 5. `reliability_profiles`
- `user_id` (UUID, Primary Key, Foreign Key)
- `reliability_score` (Integer: 300 - 850)
- `on_time_contributions` (Integer)
- `total_contributions` (Integer)
- `last_updated` (Timestamp)
