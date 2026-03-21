export type PackageManager = "bun" | "npm" | "pnpm"

export const PACKAGE_MANAGER_ORDER: PackageManager[] = ["npm", "pnpm", "bun"]

const MANAGERS = new Set<PackageManager>(PACKAGE_MANAGER_ORDER)

export function isPackageManager(value: string): value is PackageManager {
	return MANAGERS.has(value as PackageManager)
}

export function parsePackageManager(value: string): PackageManager | undefined {
	return isPackageManager(value) ? value : undefined
}

export const PACKAGE_MANAGER_STORAGE_KEY = "pm" as const
