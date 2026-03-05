import type { VariantProps } from "class-variance-authority"
import type { JSX, ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const buttonVariants = cva(
	"btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
	{
		defaultVariants: {
			size: "md",
			variant: "primary"
		},
		variants: {
			size: {
				lg: "btn-lg text-lg",
				md: "btn-md",
				sm: "btn-sm text-sm"
			},
			variant: {
				accent: "btn-accent",
				error: "btn-error",
				ghost: "btn-ghost",
				link: "btn-link",
				outline: "btn-outline",
				primary: "btn-primary",
				secondary: "btn-secondary"
			}
		}
	}
)

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
		"as",
		"children"
	])

	return (
		<button
			type={(rest as JSX.IntrinsicElements["button"]).type ?? "button"}
			class={cn(
				buttonVariants({ size: local.size, variant: local.variant }),
				local.class
			)}
			{...(rest as JSX.IntrinsicElements["button"])}
		>
			{local.children}
		</button>
	)
}

export { Button, buttonVariants }
export type { ButtonProps }
