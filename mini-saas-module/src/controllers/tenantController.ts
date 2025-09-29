import Tenant from '../models/tenant';
import { Request, Response } from 'express';
import { tenantSchema } from '../validation/tenant';
import { ZodError } from 'zod';

export const createTenant = async (req: Request, res: Response) => {
  try {
    const validated = tenantSchema.parse(req.body);
    const tenant = new Tenant(validated);
    await tenant.save();
    res.status(201).json(tenant);
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({ error: 'Validation error', details: err.issues });
    }
    res.status(400).json({ error: (err as Error).message });
  }
};

export const getTenantBySubdomain = async (req: Request, res: Response) => {
  try {
    const subdomain = req.params.subdomain;
    const tenant = await Tenant.findOne({ subdomain });
    if (!tenant) {
      return res.status(404).json({ error: 'Tenant not found' });
    }
    res.json(tenant);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const listTenants = async (_req: Request, res: Response) => {
  try {
    const tenants = await Tenant.find();
    res.json(tenants);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};
