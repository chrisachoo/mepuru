import { BookOpen, Component } from "lucide-solid"

export const indexNavLinks = [
	{ href: "/docs/installation", label: "Docs" },
	{ href: "/docs/components", label: "Components" }
] as const

export const APP_DRAWER_ID = "app-drawer"

export const linkItems = [
	{
		group: [
			{ href: "/docs/intro/", label: "Introduction" },
			{ href: "/docs/install/", label: "Install" },
			{ href: "/docs/themes/", label: "Themes" },
			{ href: "/docs/quickstart/", label: "Quickstart" }
		],
		icon: BookOpen,
		path: "docs"
	},
	{
		group: [
			{ href: "/components/accordion/", label: "Accordion" },
			{ href: "/components/alert/", label: "Alert" },
			{ href: "/components/avatar/", label: "Avatar" },
			{ href: "/components/badge/", label: "Badge" },
			{ href: "/components/button/", label: "Button" },
			{ href: "/components/card/", label: "Card" },
			{ href: "/components/checkbox/", label: "Checkbox" },
			{ href: "/components/collapse/", label: "Collapse" },
			{ href: "/components/divider/", label: "Divider" },
			{ href: "/components/dropdown/", label: "Dropdown" },
			{ href: "/components/field/", label: "Field" },
			{ href: "/components/input/", label: "Input" },
			{ href: "/components/select/", label: "Select" },
			{ href: "/components/skeleton/", label: "Skeleton" },
			{ href: "/components/status/", label: "Status" },
			{ href: "/components/switch/", label: "Switch" },
			{ href: "/components/table/", label: "Table" },
			{ href: "/components/tabs/", label: "Tabs" },
			{ href: "/components/textarea/", label: "Textarea" },
			{ href: "/components/tooltip/", label: "Tooltip" },
			{ href: "/components/typography/", label: "Typography" }
		],
		icon: Component,
		path: "components"
	}
] as const

export const faq = [
	{
		description:
			"Copying components gives you full control over the code. You can modify styling, structure, or behavior without depending on a third-party package.",
		title: "Why copy components instead of installing a package?"
	},
	{
		description:
			"No. Components are meant to live inside your project so you fully own and customize them.",
		title: "Will there be an npm package?"
	},
	{
		description: "Which frameworks are supported?",
		title: "Any project using SolidJS, including SolidStart or custom setups."
	}
] as const
