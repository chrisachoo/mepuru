import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const dropdownVariant = cva("dropdown", {
	variants: {
		align: {
			bottom: "dropdown-bottom",
			center: "dropdown-center",
			end: "dropdown-end",
			left: "dropdown-left",
			right: "dropdown-right",
			start: "dropdown-start",
			top: "dropdown-top"
		}
	}
})

type DropdownProps = JSX.IntrinsicElements["div"] & VariantProps<typeof dropdownVariant>

function Dropdown(props: DropdownProps) {
	const [local, rest] = splitProps(props, ["class", "align"])

	return (
		<div class={cn(dropdownVariant({ align: local.align }), local.class)} {...rest} />
	)
}

function DropdownMenuTrigger(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return <div class={cn("btn btn-soft m-1", local.class)} role="button" tabindex="0" {...rest} />
}

function DropdownMenuContent(props: Readonly<JSX.IntrinsicElements["ul"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<ul
			class={cn(
				"menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm",
				local.class
			)}
			tabIndex="-1"
			{...rest}
		/>
	)
}

function DropdownMenuItem(props: Readonly<JSX.IntrinsicElements["li"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return <li class={cn(local.class)} {...rest} />
}

export { Dropdown, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger }
