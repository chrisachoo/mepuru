import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const loadingVariants = cva("loading", {
	defaultVariants: {
		variant: "spinner"
	},
	variants: {
		color: {
			accent: "text-accent",
			error: "text-error",
			info: "text-info",
			neutral: "text-neutral",
			primary: "text-primary",
			secondary: "text-secondary",
			success: "text-success",
			warning: "text-warning"
		},
		size: {
			lg: "loading-lg",
			md: "loading-md",
			sm: "loading-sm",
			xl: "loading-xl",
			xs: "loading-xs"
		},
		variant: {
			ball: "loading-ball",
			bars: "loading-bars",
			dots: "loading-dots",
			infinity: "loading-infinity",
			ring: "loading-ring",
			spinner: "loading-spinner"
		}
	}
})

type LoadingProps = JSX.IntrinsicElements["span"] &
	VariantProps<typeof loadingVariants>

export function Loading(props: Readonly<LoadingProps>) {
	const [local, rest] = splitProps(props, ["class", "color", "variant", "size"])

	return (
		<span
			class={cn(
				loadingVariants({
					color: local.color,
					size: local.size,
					variant: local.variant
				}),
				local.class
			)}
			{...rest}
		/>
	)
}
