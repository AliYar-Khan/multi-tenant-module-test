export class ModuleManager {
    private modules: Map<string, any>;

    constructor() {
        this.modules = new Map();
    }

    registerModule(name: string, module: any): void {
        if (this.modules.has(name)) {
            throw new Error(`Module ${name} is already registered.`);
        }
        this.modules.set(name, module);
    }

    getModule(name: string): any {
        const module = this.modules.get(name);
        if (!module) {
            throw new Error(`Module ${name} not found.`);
        }
        return module;
    }

    listModules(): string[] {
        return Array.from(this.modules.keys());
    }
}