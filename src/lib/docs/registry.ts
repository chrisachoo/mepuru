export type DocLink = {
	href: string
	label: string
}

export type DocSection = {
	icon: string
	label: string
	links: readonly DocLink[]
}

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

export type ComponentDocEntry = {
	slug: string
	name: string
	description?: string
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

export const componentsBasePath = "/components"

export function componentHref(entry: ComponentDocEntry): string {
	return `${componentsBasePath}/${entry.slug}`
}

export const componentDocLinks: readonly DocLink[] = componentDocs.map((c) => ({
	href: componentHref(c),
	label: c.name
}))
