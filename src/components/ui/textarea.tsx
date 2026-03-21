import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const textareaVariants = cva("textarea", {
	variants: {
		size: {
			lg: "textarea-lg",
			md: "textarea-md",
			sm: "textarea-sm",
			xl: "textarea-xl",
			xs: "textarea-xs"
		},
		variant: {
			accent: "textarea-accent",
			error: "textarea-error",
			info: "textarea-info",
			neutral: "textarea-neutral",
			primary: "textarea-primary",
			secondary: "textarea-secondary",
			success: "textarea-success",
			warning: "textarea-warning"
		}
	}
})

type TextareaProps = JSX.IntrinsicElements["textarea"]
	& VariantProps<typeof textareaVariants>

function Textarea(props: Readonly<TextareaProps>) {
	const [local, rest] = splitProps(props, ["class", "size", "variant"])

	return (
		<textarea
			class={cn(
				textareaVariants({ size: local.size, variant: local.variant }),
				local.class
			)}
			{...rest}
		/>
	)
}

export { Textarea }
