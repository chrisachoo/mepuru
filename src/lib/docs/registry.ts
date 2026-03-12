/**
 * Docs registry: single source of truth for all doc routes and nav.
 * Add one entry here to get sidebar link + components list + scalable to 50+.
 */

export type DocLink = {
	href: string
	label: string
}

export type DocSection = {
	icon: string
	label: string
	links: readonly DocLink[]
}

/** Top-level doc pages (Introduction, Installation, etc.) */
export const docSections: readonly DocSection[] = [
	{
		icon: "BookOpen",
		label: "Documentation",
		links: [
			{ href: "/docs/introduction", label: "Introduction" },
			{ href: "/docs/installation", label: "Installation" },
			{ href: "/docs/components", label: "Components" }
		]
	}
] as const

/** All component doc entries. One object per component = one nav link + one list card. */
export type ComponentDocEntry = {
	/** URL path segment, e.g. "button" → /docs/components/button */
	slug: string
	/** Display name in sidebar and page title */
	name: string
	/** Short description for list cards and meta */
	description?: string
	/** Optional category for grouping when you have 50+ (e.g. "Forms", "Overlay") */
	category?: string
}

export const componentDocs: readonly ComponentDocEntry[] = [
	{ description: "Actions and triggers", name: "Button", slug: "button" },
	{ description: "Text and form inputs", name: "Input", slug: "input" },
	{ description: "Content containers", name: "Card", slug: "card" },
	{ description: "Menu and options", name: "Dropdown", slug: "dropdown" },
	{ description: "Dialogs and overlays", name: "Modal", slug: "modal" },
	{ description: "Single selection", name: "Select", slug: "select" },
	{ description: "Hover hints", name: "Tooltip", slug: "tooltip" }
] as const

/** Base path for component docs */
export const componentsBasePath = "/components"

/** Full href for a component doc */
export function componentHref(entry: ComponentDocEntry): string {
	return `${componentsBasePath}/${entry.slug}`
}

/** Component doc links for sidebar (href + label). Build nav in layout with icons. */
export const componentDocLinks: readonly DocLink[] = componentDocs.map((c) => ({
	href: componentHref(c),
	label: c.name
}))
