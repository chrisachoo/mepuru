import { A, useMatch } from "@solidjs/router"
import { createMemo } from "solid-js"

export function SidebarNavLink(
	props: Readonly<{ href: string, label: string }>
) {
	const match = useMatch(() => props.href)
	const isActive = createMemo(() => Boolean(match()))

	return (
		<li>
			<A
				end
				href={props.href}
				class="flex items-center rounded-r-lg px-3 py-2.5 text-sm font-medium transition-colors"
				classList={{
					"border-l-primary bg-primary/10 text-primary border-l-2": isActive(),
					"border-transparent hover:bg-base-300/60 text-base-content/90 border-l-2":
						!isActive()
				}}
			>
				{props.label}
			</A>
		</li>
	)
}
