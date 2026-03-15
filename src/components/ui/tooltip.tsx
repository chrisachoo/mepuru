import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

export function Tooltip(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<div class={cn("tooltip", local.class)} {...rest} />
	)
}
