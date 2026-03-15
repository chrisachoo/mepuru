import type { JSX } from "solid-js"
import { cn } from "~/lib/cn"

export function Toggle(props: Readonly<JSX.IntrinsicElements["input"]>) {
	return (
		<input type="checkbox" class={cn("toggle", props.class)} checked />
  )
}
