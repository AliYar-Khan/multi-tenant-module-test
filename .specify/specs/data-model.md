# Data Model: Mini Multi-Tenant SaaS Module

## Entities

### Tenant
- `_id`: ObjectId
- `name`: string
- `subdomain`: string (unique)
- `logoUrl`: string
- `color`: string
- `createdAt`: Date

### User
- `_id`: ObjectId
- `tenantId`: ObjectId (ref Tenant)
- `email`: string (unique per tenant)
- `passwordHash`: string
- `role`: enum (`admin`, `user`)
- `createdAt`: Date

### AuditLog
- `_id`: ObjectId
- `tenantId`: ObjectId
- `userId`: ObjectId
- `event`: string
- `timestamp`: Date

### CallMetric
- `_id`: ObjectId
- `tenantId`: ObjectId
- `userId`: ObjectId
- `callType`: string
- `status`: string
- `createdAt`: Date

## Relationships
- Each user belongs to one tenant.
- Audit logs and metrics are scoped by tenant.

## Notes
- All tenant data is strictly isolated.
- Subdomain is used for tenant routing.
