import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const selectVariants = cva("select", {
	variants: {
		variant: {
			accent: "select-accent",
			destructive: "select-error",
			info: "select-info",
			neutral: "select-neutral",
			primary: "select-primary",
			secondary: "select-secondary",
			success: "select-success",
			warning: "select-warning"
		}
	}
})

type SelectProps = JSX.IntrinsicElements["select"] &
	VariantProps<typeof selectVariants>

function Select(props: Readonly<SelectProps>) {
	const [local, rest] = splitProps(props, ["class", "variant"])

	return (
		<select
			class={cn(selectVariants({ variant: local.variant }), local.class)}
			{...rest}
		/>
	)
}

function SelectOption(props: Readonly<JSX.IntrinsicElements["option"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<option
			class={cn(local.class)}
			{...rest}
		/>
	)
}

export { Select, SelectOption }
