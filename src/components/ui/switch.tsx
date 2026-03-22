import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

export function Switch(props: Readonly<JSX.IntrinsicElements["input"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<input
			type="checkbox"
			class={cn("toggle", local.class)}
			{...rest}
		/>
	)
}
