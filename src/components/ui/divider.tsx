import type { VariantProps } from "class-variance-authority"
import type { JSX, ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const dividerVariants = cva("divider", {
	defaultVariants: {
		orientation: "vertical"
	},
	variants: {
		color: {
			accent: "divider-accent",
			error: "divider-error",
			info: "divider-info",
			neutral: "divider-neutral",
			primary: "divider-primary",
			secondary: "divider-secondary",
			success: "divider-success",
			warning: "divider-warning"
		},
		orientation: {
			horizontal: "divider-horizontal",
			vertical: "divider-vertical"
		},
		placement: {
			end: "divider-end",
			start: "divider-start",
		}
	}
})

type DividerProps = {
	class?: string
} & VariantProps<typeof dividerVariants>

function Divider<T extends ValidComponent = "div">(props: PolymorphicProps<T, DividerProps>) {
	const [local, others] = splitProps(props, [
		"class",
		"color",
		"orientation",
		"placement",
		"children"
	])

	return (
		<div
			class={cn(
				dividerVariants({
					color: local.color,
					orientation: local.orientation,
					placement: local.placement
				}),
				local.class
			)}
			{...(others as JSX.IntrinsicElements["div"])}
		>
			{local.children}
		</div>
	)
}

export { Divider, dividerVariants }
export type { DividerProps }

