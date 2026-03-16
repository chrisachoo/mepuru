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
	{ description: "Expandable sections", name: "Accordion", slug: "accordion" },
	{ description: "Feedback and status messages", name: "Alert", slug: "alert" },
	{ description: "User or entity image", name: "Avatar", slug: "avatar" },
	{ description: "Labels and counts", name: "Badge", slug: "badge" },
	{ description: "Actions and triggers", name: "Button", slug: "button" },
	{ description: "Content containers", name: "Card", slug: "card" },
	{ description: "Boolean form control", name: "Checkbox", slug: "checkbox" },
	{
		description: "Syntax-highlighted code",
		name: "Code Block",
		slug: "code-block"
	},
	{ description: "Expandable content", name: "Collapse", slug: "collapse" },
	{ description: "Native dialog element", name: "Dialog", slug: "dialog" },
	{ description: "Visual separator", name: "Divider", slug: "divider" },
	{ description: "Menu and options", name: "Dropdown", slug: "dropdown" },
	{ description: "Form group container", name: "Fieldset", slug: "fieldset" },
	{ description: "Text and form inputs", name: "Input", slug: "input" },
	{
		description: "Decorative logo icon",
		name: "Maple Leaf",
		slug: "maple-leaf"
	},
	{ description: "Dialogs and overlays", name: "Modal", slug: "modal" },
	{ description: "Single selection", name: "Select", slug: "select" },
	{ description: "Tabbed panels", name: "Tabs", slug: "tabs" },
	{ description: "Multi-line text input", name: "Textarea", slug: "textarea" },
	{ description: "On/off switch", name: "Toggle", slug: "toggle" },
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
