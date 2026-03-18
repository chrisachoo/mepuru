import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const inputVariants = cva("input", {
	defaultVariants: {
		size: "md"
	},
	variants: {
		size: {
			lg: "input-lg",
			md: "input-md",
			sm: "input-sm",
			xl: "input-xl",
			xs: "input-xs"
		}
	}
})

export type InputProps = JSX.IntrinsicElements["input"] & {
	class?: string
	error?: boolean
} & VariantProps<typeof inputVariants>

export function Input(props: InputProps) {
	const [local, rest] = splitProps(props, ["class", "error", "size"])

	return (
		<input
			class={cn(
				inputVariants({ size: local.size }),
				local.error && "input-error",
				local.class
			)}
			aria-invalid={local.error ?? undefined}
			{...rest}
		/>
	)
}
