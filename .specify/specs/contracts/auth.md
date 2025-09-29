# API Contract: Authentication

## POST /api/auth/signup
- Request: `{ email, password, tenantSubdomain }`
- Response: `{ success, userId, token }`
- Validation: Zod schema (email, password strength, subdomain exists)

## POST /api/auth/login
- Request: `{ email, password, tenantSubdomain }`
- Response: `{ success, userId, token }`
- Validation: Zod schema

## POST /api/auth/logout
- Request: `{ token }`
- Response: `{ success }`
