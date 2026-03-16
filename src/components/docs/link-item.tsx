import { A } from "@solidjs/router"

export function LinkItem(
	props: Readonly<{ href: string; label: string; pathname: string }>
) {
	const isActive = () => props.pathname === props.href

	return (
		<li>
			<A
				href={props.href}
				classList={{
					"border-l-primary bg-primary/10 text-primary border-l-2":
						props.pathname === props.href,
					"hover:bg-base-300/60 text-base-content/90 border-l-2 border-transparent":
						!isActive()
				}}
				class="flex items-center rounded-r-lg px-3 py-2.5 text-sm font-medium transition-colors"
			>
				{props.label}
			</A>
		</li>
	)
}
