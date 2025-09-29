# API Contract: Tenant Management

## POST /api/tenant/branding
- Request: `{ logoUrl, name, color }`
- Response: `{ success }`
- Auth: Admin only

## GET /api/tenant/info
- Request: `{ tenantSubdomain }`
- Response: `{ name, logoUrl, color }`
