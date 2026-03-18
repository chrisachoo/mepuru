import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

function Fieldset(props: Readonly<JSX.IntrinsicElements["fieldset"]>) {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<fieldset
			class={cn("fieldset", local.class)}
			{...rest}
		/>
	)
}

function FieldLegend(props: Readonly<JSX.IntrinsicElements["legend"]>) {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<legend
			class={cn("fieldset-legend capitalize", local.class)}
			{...rest}
		/>
	)
}

function FieldLabel(props: Readonly<JSX.IntrinsicElements["label"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])
	return (
		<label
			class={cn("label font-semibold", local.class)}
			{...rest}
		>
			{local.children}
		</label>
	)
}

function FieldDescription(props: Readonly<JSX.IntrinsicElements["p"]>) {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<p
			class={cn("label", local.class)}
			{...rest}
		/>
	)
}

export { FieldDescription, FieldLabel, FieldLegend, Fieldset }
