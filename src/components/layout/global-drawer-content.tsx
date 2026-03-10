import type { LucideIcon } from "lucide-solid"

import { A, useLocation } from "@solidjs/router"
import { BookOpen, Component } from "lucide-solid"
import { For } from "solid-js"

import { MapleLeaf } from "~/components/ui/maple-leaf"
import { componentDocLinks, docSections } from "~/lib/docs/registry"

const navSections = [
	...docSections.map(section => ({
		icon: BookOpen as LucideIcon,
		label: section.label,
		links: section.links
	})),
	{
		icon: Component as LucideIcon,
		label: "Components",
		links: componentDocLinks
	}
]

const linkBaseClass
	= "flex items-center rounded-r-lg px-3 py-2.5 text-sm font-medium transition-colors"

function NavLink(props: Readonly<{ href: string, label: string }>) {
	const location = useLocation()
	const isActive = () => location.pathname === props.href
	return (
		<A
			href={props.href}
			classList={{
				"border-l-primary bg-primary/10 text-primary border-l-2": isActive(),
				"hover:bg-base-300/60 text-base-content/90 border-l-2 border-transparent":
					!isActive()
			}}
			class={linkBaseClass}
		>
			{props.label}
		</A>
	)
}

function SectionHeader(props: Readonly<{ icon: LucideIcon, label: string }>) {
	return (
		<div class="mb-2 flex items-center gap-2 px-2">
			<div class="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
				<props.icon class="size-4" />
			</div>
			<span class="text-sm font-semibold tracking-tight text-base-content">
				{props.label}
			</span>
		</div>
	)
}

/**
 * Shared drawer sidebar: logo + all doc routes (Documentation + Components).
 * Used in the single global app drawer.
 */
export function GlobalDrawerContent() {
	return (
		<aside
			class="flex min-h-full w-64 shrink-0 flex-col border-r border-base-300 bg-base-200 lg:w-72"
			aria-label="Site navigation"
		>
			<A
				href="/"
				class="flex shrink-0 items-center gap-2 px-4 pt-5 font-semibold text-amber-500"
				aria-label="Home"
			>
				<MapleLeaf />
			</A>
			<div class="scrollbar-hide-until-hover min-h-0 flex-1 overflow-y-auto py-4 pr-3 pl-4">
				<For each={navSections}>
					{section => (
						<div classList={{ "mt-4": section.label !== "Documentation" }}>
							<SectionHeader
								icon={section.icon}
								label={section.label}
							/>
							<nav
								class="ml-4 flex flex-col gap-0.5"
								aria-label={section.label}
							>
								<For each={section.links}>
									{link => (
										<NavLink
											href={link.href}
											label={link.label}
										/>
									)}
								</For>
							</nav>
						</div>
					)}
				</For>
			</div>
			<div class="w-full shrink-0 border-t border-base-300 py-4">
				<p class="px-2 text-center text-xs text-base-content/50">
					Mēpuru · Simple UI for Solid
				</p>
			</div>
		</aside>
	)
}
