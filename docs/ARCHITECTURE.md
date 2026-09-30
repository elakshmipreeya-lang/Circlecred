# CircleCred System Architecture

---

## 🏗️ High-Level System Overview

```text
  [ React + Vite Client ]
             │
             │ HTTP REST API
             ▼
    [ Node.js Express API ]
             │
      ┌──────┴──────┐
      ▼             ▼
[ Supabase/PG ] [ UPI SDK / Gateway ]
```

---

## Key Modules
1. **Savings Circle Engine**: Manages pool rotation, eligibility, and cycle progression.
2. **UPI Payment Gateway Adapter**: Simulates or processes UPI intent transactions for contributions and payouts.
3. **Savings Reliability Profile Engine**: Computes dynamic reliability scores based on contribution timeliness and consistency.
