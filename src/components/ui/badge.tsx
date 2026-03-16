import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const badgeVariants = cva("badge", {
	variants: {
		size: {
			lg: "badge-lg",
			md: "badge-md",
			sm: "badge-sm",
			xl: "badge-xl",
			xs: "badge-xs"
		},
		variant: {
			accent: "badge-accent",
			destructive: "badge-error",
			info: "badge-info",
			light: "badge-soft",
			neutral: "badge-neutral",
			outline: "badge-outline",
			primary: "badge-primary",
			secondary: "badge-secondary",
			success: "badge-success",
			warning: "badge-warning"
		}
	}
})

type BadgeProps = JSX.IntrinsicElements["span"] &
	VariantProps<typeof badgeVariants>

export function Badge(props: Readonly<BadgeProps>) {
	const [local, rest] = splitProps(props, ["class", "variant", "size"])

	return (
		<span
			class={cn(badgeVariants({ size: local.size, variant: local.variant }))}
			{...rest}
		/>
	)
}
