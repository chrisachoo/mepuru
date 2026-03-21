import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const checkboxVariants = cva("checkbox", {
	variants: {
		size: {
			lg: "checkbox-lg",
			md: "checkbox-md",
			sm: "checkbox-sm",
			xl: "checkbox-xl",
			xs: "checkbox-xs"
		},
		variant: {
			accent: "checkbox-accent",
			destructive: "checkbox-error",
			info: "checkbox-info",
			neutral: "checkbox-neutral",
			primary: "checkbox-primary",
			secondary: "checkbox-secondary",
			success: "checkbox-success",
			warning: "checkbox-warning"
		}
	}
})

type CheckboxProps = JSX.IntrinsicElements["input"]
	& VariantProps<typeof checkboxVariants>

export function Checkbox(props: Readonly<CheckboxProps>) {
	const [local, rest] = splitProps(props, ["class", "size", "variant"])
	return (
		<input
			class={cn(checkboxVariants({ size: local.size, variant: local.variant }))}
			type="checkbox"
			{...rest}
		/>
	)
}
