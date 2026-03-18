import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { Show, splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const alertVariants = cva("alert", {
	defaultVariants: {
		orientation: "horizontal",
		variant: "light"
	},
	variants: {
		orientation: {
			horizontal: "alert-horizontal",
			vertical: "alert-vertical"
		},
		variant: {
			destructive: "alert-error",
			info: "alert-info",
			light: "alert-soft",
			outline: "alert-outline",
			success: "alert-success",
			warning: "alert-warning"
		}
	}
})

type AlertProps = {
	icon?: JSX.Element
} & JSX.IntrinsicElements["div"] &
	VariantProps<typeof alertVariants>

function Alert(props: Readonly<AlertProps>) {
	const [local, rest] = splitProps(props, [
		"class",
		"variant",
		"children",
		"icon"
	])
	return (
		<div
			data-slot="alert"
			role="alert"
			class={cn(alertVariants({ variant: local.variant }), local.class)}
			{...rest}
		>
			<Show when={local.icon}>{(Icon) => <Icon />}</Show>

			<div>{local.children}</div>
		</div>
	)
}

function AlertTitle(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])

	return (
		<h3
			data-slot="alert-title"
			class={cn("font-bold", local.class)}
			{...rest}
		>
			{local.children}
		</h3>
	)
}

function AlertDescription(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<div
			data-slot="alert-description"
			class={cn("text-sm", local.class)}
			{...rest}
		/>
	)
}

export { Alert, AlertDescription, AlertTitle }
