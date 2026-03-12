import { BookOpen, Component } from "lucide-solid"

export const indexNavLinks = [
	{ href: "/docs/installation", label: "Docs" },
	{ href: "/docs/components", label: "Components" }
] as const

export const APP_DRAWER_ID = "app-drawer"

export const linkItems = [
	{ group: [
		{ href: "/docs/intro/", label: "Introduction" },
		{ href: "/docs/install/", label: "Install" },
		{ href: "/docs/themes/", label: "Themes" },
		{ href: "/docs/quickstart/", label: "Quickstart" }
	], icon: BookOpen, path: "docs" },
	{ group: [
		// { href: "/component/", label: "Component" },
		{ href: "/components/button/", label: "Button" },
		{ href: "/components/dropdown/", label: "Dropdown" },
		{ href: "/components/input/", label: "Input" },
		{ href: "/components/select/", label: "Select" },
		{ href: "/components/modal/", label: "Modal" },
		{ href: "/components/tooltip/", label: "Tooltip" },
		{ href: "/components/modal/", label: "Modal" },
	], icon: Component, path: "components" }
] as const
