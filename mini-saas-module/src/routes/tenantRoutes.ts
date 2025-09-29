import { Router } from 'express';
import { createTenant, getTenantBySubdomain, listTenants } from '../controllers/tenantController';

const router = Router();

router.post('/', createTenant);
router.get('/:subdomain', getTenantBySubdomain);
router.get('/', listTenants);

export default router;
