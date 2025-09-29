# Quickstart Guide

## Prerequisites
- Node.js >= 16
- MongoDB running locally or remotely
- Vite CLI installed

## Setup

```bash
git clone <repo-url>
cd mini-saas-module
npm install
```

## Environment

Create `.env` with:
```
MONGODB_URI=<your-mongodb-uri>
ULTRAVOX_API_KEY=<your-api-key>
JWT_SECRET=<your-jwt-secret>
```

## Run Backend

```bash
npm run start
```

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Test

```bash
npm test
```
