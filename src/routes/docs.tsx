import type { RouteSectionProps } from "@solidjs/router"
import type { LucideIcon } from "lucide-solid"

import { A, useLocation } from "@solidjs/router"
import { BookOpen, Component, Menu } from "lucide-solid"
import { For } from "solid-js"

const docLinks = [
	{ href: "/docs/introduction", label: "Introduction" },
	{ href: "/docs/installation", label: "Installation" },
	{ href: "/docs/components", label: "Components" }
] as const

const componentLinks = [
	{ href: "/docs/components/button", label: "Button" },
	{ href: "/docs/components/input", label: "Input" },
	{ href: "/docs/components/card", label: "Card" },
	{ href: "/docs/components/dropdown", label: "Dropdown" },
	{ href: "/docs/components/modal", label: "Modal" },
	{ href: "/docs/components/tooltip", label: "Tooltip" }
] as const

const navSections = [
	{ icon: BookOpen, label: "Documentation", links: docLinks },
	{ icon: Component, label: "Components", links: componentLinks }
] as const

const CONTENT_HEIGHT = "calc(100vh - 4rem)"

const linkBaseClass
	= "flex items-center rounded-r-lg px-3 py-2.5 text-sm font-medium transition-colors"

function DocNavLink(props: { href: string, label: string }) {
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

function SidebarSectionHeader(props: {
	icon: LucideIcon
	label: string
}) {
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

export default function DocsLayout(props: RouteSectionProps) {
	return (
		<main class="flex min-h-screen w-full bg-base-100">
			<div class="drawer lg:drawer-open">
				<input id="docs-drawer" type="checkbox" class="drawer-toggle" />
				{/* Scrollable content area only */}
				<div class="drawer-content flex h-screen flex-col overflow-hidden">
					{/* Mobile: menu bar */}
					<div class="sticky top-16 z-40 flex w-full shrink-0 items-center gap-3 border-b border-base-300 bg-base-100/95 px-4 py-3 backdrop-blur-sm lg:hidden">
						<label
							for="docs-drawer"
							class="btn btn-ghost btn-square drawer-button"
							aria-label="Open docs menu"
						>
							<Menu class="size-6" />
						</label>
						<span class="text-sm font-semibold text-base-content">Docs</span>
					</div>
					{/* Page content - only this scrolls */}
					<div class="min-h-0 flex-1 overflow-y-auto px-4 py-6 lg:px-8">
						{props.children}
					</div>
				</div>
				<div class="drawer-side z-50 shrink-0">
					<label
						for="docs-drawer"
						aria-label="Close sidebar"
						class="drawer-overlay"
					/>
					{/* Sticky sidebar - does not scroll */}
					<aside
						class="flex fixed w-64 flex-col gap-1 border-r border-base-300 bg-base-200/40 py-5 pl-4 pr-3 lg:w-72 backdrop-blur-sm"
						style={{ height: CONTENT_HEIGHT }}
					>
						<For each={navSections}>
							{section => (
								<div
									classList={{
										"mt-4": section.label !== "Documentation"
									}}
								>
									<SidebarSectionHeader
										icon={section.icon}
										label={section.label}
									/>
									<nav
										class="flex flex-col gap-0.5 ml-4"
										aria-label={section.label}
									>
										<For each={section.links}>
											{link => (
												<DocNavLink href={link.href} label={link.label} />
											)}
										</For>
									</nav>
								</div>
							)}
						</For>
						<div class="mt-auto border-t border-base-300 pt-4">
							<p class="px-2 text-xs text-base-content/50">
								Mēpuru · Simple UI for Solid
							</p>
						</div>
					</aside>
				</div>
			</div>
		</main>
	)
}
