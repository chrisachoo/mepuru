import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "./lib/cn"

export type TextareaProps = JSX.IntrinsicElements["textarea"] & {
	class?: string
	error?: boolean
}

function Textarea(props: TextareaProps) {
	const [local, rest] = splitProps(props, ["class", "error"])
	return (
		<textarea
			class={cn(
				"textarea textarea-bordered w-full rounded-lg focus:outline focus:outline-2 focus:outline-offset-2",
				local.error && "textarea-error",
				local.class
			)}
			aria-invalid={local.error ?? undefined}
			{...rest}
		/>
	)
}

export { Textarea }
