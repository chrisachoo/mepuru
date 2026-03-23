import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

function Breadcrumb(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<div class={cn("breadcrumbs text-sm", local.class)} {...rest} />
	)
}

function BreadcrumbList(props: Readonly<JSX.IntrinsicElements["ul"]>) {
	return <ul {...props} />
}

function BreadcrumbItem(props: Readonly<JSX.IntrinsicElements["li"]>) {
	return <li {...props} />
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbList }
