import type { VariantProps } from "class-variance-authority"
import type { ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const buttonVariants = cva("btn", {
	variants: {
		color: {
			accent: "btn-accent",
			default: "btn-neutral",
			primary: "btn-primary",
			secondary: "btn-secondary"
		},
		size: {
			lg: "btn-lg",
			sm: "btn-sm"
		},
		variant: {
			destructive: "btn-error",
			ghost: "btn-ghost",
			light: "btn-soft",
			link: "btn-link",
			outline: "btn-outline ",
			primary: "btn-primary"
		}
	}
})

type ButtonProps = {
	class?: string
} & VariantProps<typeof buttonVariants>

function Button<T extends ValidComponent = "button">(
	props: PolymorphicProps<T, ButtonProps>
) {
	const [local, rest] = splitProps(props, [
		"variant",
		"size",
		"class",
		"children",
		"color"
	])

	return (
		<button
			class={cn(
				buttonVariants({
					color: local.color,
					size: local.size,
					variant: local.variant
				}),
				local.class
			)}
			{...rest}
		>
			{local.children}
		</button>
	)
}

export { Button, buttonVariants }
export type { ButtonProps }
