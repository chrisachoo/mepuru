import type { RouteSectionProps } from "@solidjs/router"
import type { LucideIcon } from "lucide-solid"

import { A, useLocation } from "@solidjs/router"
import { BookOpen, Component } from "lucide-solid"
import { For } from "solid-js"

import { componentDocLinks, docSections } from "~/lib/docs/registry"

const navSections = [
	...docSections.map(section => ({
		icon: BookOpen,
		label: section.label,
		links: section.links
	})),
	{ icon: Component, label: "Components", links: componentDocLinks }
]

function DocNavLink(props: Readonly<{ href: string, label: string }>) {
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
			class="flex items-center rounded-r-lg px-3 py-2.5 text-sm font-medium transition-colors"
		>
			{props.label}
		</A>
	)
}

function SidebarSectionHeader(
	props: Readonly<{ icon: LucideIcon, label: string }>
) {
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

function DocsSidebarNav() {
	return (
		<For each={navSections}>
			{section => (
				<div classList={{ "mt-4": section.label !== "Documentation" }}>
					<SidebarSectionHeader
						icon={section.icon}
						label={section.label}
					/>
					<nav
						class="ml-4 flex flex-col gap-0.5"
						aria-label={section.label}
					>
						<For each={section.links}>
							{link => (
								<DocNavLink
									href={link.href}
									label={link.label}
								/>
							)}
						</For>
					</nav>
				</div>
			)}
		</For>
	)
}

function DocsSidebarFooter() {
	return (
		<div class="w-full shrink-0 border-t border-base-300 py-4">
			<p class="px-2 text-center text-xs text-base-content/50">
				Mēpuru · Simple UI for Solid
			</p>
		</div>
	)
}

export default function DocsLayout(props: Readonly<RouteSectionProps>) {
	return (
		<div class="flex min-h-0 flex-1 overflow-hidden">
			<aside
				class="flex w-64 shrink-0 flex-col border-r border-base-300 bg-base-100 lg:w-72 min-h-0 overflow-hidden lg:flex"
				aria-label="Documentation navigation"
			>
				<div class="scrollbar-hide-until-hover min-h-0 flex-1 overflow-y-auto py-5 pr-3 pl-4">
					<DocsSidebarNav />
				</div>
				<DocsSidebarFooter />
			</aside>

			<div class="scrollbar-hide-until-hover min-h-0 min-w-0 flex-1 overflow-y-auto px-4 py-6 lg:px-8">
				<div
					class="h-0 w-full"
					aria-hidden="true"
				/>
				<div class="mx-auto w-full max-w-4xl">{props.children}</div>
			</div>
		</div>
	)
}
