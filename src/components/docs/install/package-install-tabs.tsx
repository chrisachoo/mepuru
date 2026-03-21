import type { LiftTabItem } from "~/components/docs/code/lift-tabs"
import { createMemo } from "solid-js"
import { LiftTabGroup } from "~/components/docs/code/lift-tabs"
import { SnippetCodeBlock } from "~/components/docs/code/snippet-code-block"
import { usePackageManager } from "~/context/pm"
import { getInstallCommand } from "~/lib/commands"
import {
	PACKAGE_MANAGER_ORDER,
	parsePackageManager
} from "~/lib/package-manager"

type PackageInstallTabsProps = Readonly<{
	pkg: string
	dev?: boolean
	name: string
}>

export function PackageInstallTabs(props: PackageInstallTabsProps) {
	const { packageManager, setPackageManager } = usePackageManager()

	const tabs = createMemo((): LiftTabItem[] =>
		PACKAGE_MANAGER_ORDER.map(manager => ({
			content: (
				<SnippetCodeBlock
					code={getInstallCommand(props.pkg, manager, props.dev)}
					copyButtonClass="-top-1 right-0"
					language="bash"
					proseSize="sm"
				/>
			),
			label: manager,
			value: manager
		}))
	)

	return (
		<LiftTabGroup
			name={props.name}
			tabs={tabs()}
			value={packageManager()}
			onChange={(value) => {
				const next = parsePackageManager(value)
				if (next)
					setPackageManager(next)
			}}
		/>
	)
}
