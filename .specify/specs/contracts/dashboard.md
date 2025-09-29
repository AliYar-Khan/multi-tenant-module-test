# API Contract: Dashboard

## GET /api/dashboard/metrics
- Request: `{ tenantId }`
- Response: `{ callsToday, activeUsers }`
- Auth: Admin or user

## GET /api/dashboard/role
- Request: `{ userId }`
- Response: `{ role }`
