# CircleCred API Specification

Base URL: `http://localhost:5000/api`

---

## Health Check

### `GET /api/health`

Returns the operational status of the server.

**Response:** `200 OK`
```json
{
  "status": "ok",
  "message": "CircleCred Backend API is healthy",
  "timestamp": "2026-09-30T11:20:00.000Z"
}
```

---

## Planned API Modules (Future Iterations)
- `/api/auth` - Authentication & User profiles
- `/api/circles` - Savings Circle management (Create, Join, Cycle details)
- `/api/contributions` - UPI contributions & payment tracking
- `/api/payouts` - Turn-based payout scheduling & distribution
- `/api/reliability` - Savings Reliability Profile scoring engine
