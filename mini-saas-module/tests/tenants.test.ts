import { TenantManager } from '../src/tenants';
import { Tenant } from '../src/types';

describe('TenantManager', () => {
    let tenantManager: TenantManager;

    beforeEach(() => {
        tenantManager = new TenantManager();
    });

    test('should create a new tenant', () => {
        const tenantData: Tenant = {
            id: 'tenant-1',
            name: 'Tenant One',
            createdAt: new Date(),
        };

        tenantManager.createTenant(tenantData);
        const retrievedTenant = tenantManager.getTenant('tenant-1');

        expect(retrievedTenant).toEqual(tenantData);
    });

    test('should return undefined for a non-existent tenant', () => {
        const retrievedTenant = tenantManager.getTenant('non-existent-tenant');
        expect(retrievedTenant).toBeUndefined();
    });

    test('should list all tenants', () => {
        const tenantData1: Tenant = {
            id: 'tenant-1',
            name: 'Tenant One',
            createdAt: new Date(),
        };
        const tenantData2: Tenant = {
            id: 'tenant-2',
            name: 'Tenant Two',
            createdAt: new Date(),
        };

        tenantManager.createTenant(tenantData1);
        tenantManager.createTenant(tenantData2);

        const tenants = tenantManager.listTenants();
        expect(tenants).toEqual([tenantData1, tenantData2]);
    });

    test('should handle edge case for duplicate tenant creation', () => {
        const tenantData: Tenant = {
            id: 'tenant-1',
            name: 'Tenant One',
            createdAt: new Date(),
        };

        tenantManager.createTenant(tenantData);
        expect(() => tenantManager.createTenant(tenantData)).toThrow('Tenant already exists');
    });
});