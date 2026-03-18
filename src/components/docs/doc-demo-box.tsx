import type { JSX } from "solid-js"

/** Simple demo container for inline previews (no tabs/code). Use ComponentDemo when you need Preview+JSX tabs. */
export function DocDemoBox(props: Readonly<{ children: JSX.Element }>) {
	return (
		<div class="flex flex-wrap items-center gap-3 rounded-xl border border-base-300 bg-base-200/50 p-4">
			{props.children}
		</div>
	)
}
