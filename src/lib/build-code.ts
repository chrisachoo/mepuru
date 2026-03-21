import { getInstallCommand } from "~/lib/commands"
import { PACKAGE_MANAGER_ORDER } from "~/lib/package-manager"
import { highlight } from "~/lib/shiki"

export async function buildInstallBlock(pkg: string, dev?: boolean) {
	const result = await Promise.all(
		PACKAGE_MANAGER_ORDER.map(async (manager) => {
			const cmd = `$ ${getInstallCommand(pkg, manager, dev)}`
			return {
				html: await highlight(cmd, "bash"),
				label: manager,
				raw: cmd,
				value: manager
			}
		})
	)

	return result
}
