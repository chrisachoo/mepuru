import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const collapseVariant = cva("collapse", {
	defaultVariants: {
		variant: "border"
	},
	variants: {
		icon: {
			arrow: "collapse-arrow",
			plus: "collapse-plus"
		},
		variant: {
			border: "bg-base-100 border-base-300 border"
		}
	}
})

type CollapseProps = JSX.IntrinsicElements["details"]
	& VariantProps<typeof collapseVariant>

function Collapse(props: Readonly<CollapseProps>) {
	const [local, rest] = splitProps(props, [
		"class",
		"icon",
		"variant",
		"children"
	])
	return (
		<details
			class={cn(
				collapseVariant({ icon: local.icon, variant: local.variant }),
				local.class
			)}
			{...rest}
		>
			{local.children}
		</details>
	)
}

function CollapseTrigger(props: Readonly<JSX.IntrinsicElements["summary"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])

	return (
		<summary
			class={cn("collapse-title", local.class)}
			{...rest}
		>
			{local.children}
		</summary>
	)
}

function CollapseContent(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])

	return (
		<div
			class={cn("collapse-content", local.class)}
			{...rest}
		>
			{local.children}
		</div>
	)
}

export { Collapse, CollapseContent, CollapseTrigger }
