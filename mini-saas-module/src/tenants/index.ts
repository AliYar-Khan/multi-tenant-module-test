class TenantManager {
    private tenants: Map<string, any>;

    constructor() {
        this.tenants = new Map();
    }

    createTenant(tenantId: string, tenantData: any): void {
        if (this.tenants.has(tenantId)) {
            throw new Error(`Tenant with ID ${tenantId} already exists.`);
        }
        this.tenants.set(tenantId, tenantData);
    }

    getTenant(tenantId: string): any {
        if (!this.tenants.has(tenantId)) {
            throw new Error(`Tenant with ID ${tenantId} not found.`);
        }
        return this.tenants.get(tenantId);
    }

    listTenants(): Array<any> {
        return Array.from(this.tenants.values());
    }
}

export default TenantManager;