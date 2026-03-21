import type { TabItem } from "~/components/docs/showcase/tabs"
import { createMemo } from "solid-js"
import { CodeBlock } from "~/components/docs/showcase/code-block"
import { Tabs } from "~/components/docs/showcase/tabs"
import { usePackageManager } from "~/context/pm"
import { getInstallCommand } from "~/lib/commands"
import {
	PACKAGE_MANAGER_ORDER,
	parsePackageManager
} from "~/lib/package-manager"

type BashInstallProps = Readonly<{
	pkg: string
	dev?: boolean
	name: string
}>

export function BashInstall(props: BashInstallProps) {
	const { packageManager, setPackageManager } = usePackageManager()

	const tabs = createMemo((): TabItem[] =>
		PACKAGE_MANAGER_ORDER.map(manager => ({
			content: (
				<CodeBlock
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
		<Tabs
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
