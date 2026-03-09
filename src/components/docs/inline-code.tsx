import type { JSX } from "solid-js"

export function InlineCode(props: Readonly<{ children: JSX.Element }>) {
	return (
		<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">
			{props.children}
		</code>
	)
}
