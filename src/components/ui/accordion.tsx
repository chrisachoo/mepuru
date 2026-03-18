import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const accordionVariant = cva("collapse", {
	variants: {
		icon: {
			arrow: "collapse-arrow",
			plus: "collapse-plus"
		},
		variant: {
			border: "border-base-300 border"
		}
	}
})

type AccordionProps = JSX.IntrinsicElements["details"] &
	VariantProps<typeof accordionVariant>

function Accordion(props: Readonly<AccordionProps>) {
	const [local, rest] = splitProps(props, [
		"class",
		"icon",
		"variant",
		"children"
	])
	return (
		<details
			class={cn(
				accordionVariant({ icon: local.icon, variant: local.variant }),
				local.class
			)}
			{...rest}
		>
			{local.children}
		</details>
	)
}

function AccordionTrigger(props: Readonly<JSX.IntrinsicElements["summary"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])

	return (
		<summary
			class={cn("collapse-title font-semibold", local.class)}
			{...rest}
		>
			{local.children}
		</summary>
	)
}

function AccordionContent(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])

	return (
		<div
			class={cn("collapse-content text-sm", local.class)}
			{...rest}
		>
			{local.children}
		</div>
	)
}

export { Accordion, AccordionContent, AccordionTrigger }
