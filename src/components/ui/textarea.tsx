import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

function Textarea(props: Readonly<JSX.IntrinsicElements["textarea"]>) {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<textarea
			class={cn("textarea", local.class)}
			{...rest}
		/>
	)
}

export { Textarea }
