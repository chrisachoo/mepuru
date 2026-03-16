import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const checkboxVariants = cva("checkbox", {
	variants: {
		variant: {
			accent: "checkbox-accent",
			error: "checkbox-error",
			info: "checkbox-info",
			neutral: "checkbox-neutral",
			primary: "checkbox-primary",
			secondary: "checkbox-secondary",
			success: "checkbox-success",
			warning: "checkbox-warning"
		}
	}
})

type CheckboxProps = JSX.IntrinsicElements["input"] &
	VariantProps<typeof checkboxVariants>

export function Checkbox(props: Readonly<CheckboxProps>) {
	const [local, rest] = splitProps(props, ["class", "variant"])
	return (
		<input
			class={cn(checkboxVariants({ variant: local.variant }))}
			type="checkbox"
			{...rest}
		/>
	)
}
