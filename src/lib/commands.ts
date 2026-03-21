import type { PackageManager } from "~/lib/package-manager"

export function getInstallCommand(
	pkg: string,
	manager: PackageManager,
	dev?: boolean
) {
	switch (manager) {
		case "npm":
			return dev ? `npm install -D ${pkg}` : `npm install ${pkg}`
		case "pnpm":
			return dev ? `pnpm add -D ${pkg}` : `pnpm add ${pkg}`
		case "bun":
			return dev ? `bun add -d ${pkg}` : `bun add ${pkg}`
	}
}
