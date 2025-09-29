# API Contract: Ultravox Integration

## POST /api/ultravox/test-call
- Request: `{ userId, tenantId }`
- Response: `{ success, callId, status }`
- External: Calls Ultravox API, returns result
