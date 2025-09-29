import request from 'supertest';
import { app } from '../src/app'; // Assuming app is exported from app.ts

describe('App Initialization and Routing', () => {
  
  it('should initialize the server and respond with 200 on root', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should respond with 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.status).toBe(404);
  });

  // Add more tests to verify tenant management routes and module handling
});