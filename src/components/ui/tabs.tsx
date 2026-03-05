import type { JSX } from "solid-js"
import { createSignal, For } from "solid-js"
import { cn } from "~/lib/cn"

type TabItem = {
	value: string
	label: string
	content: JSX.Element
}

type TabsProps = {
	/** Unique name for the tab group (e.g. for radio name attribute) */
	name: string
	tabs: readonly TabItem[] | TabItem[]
	/** Value of the tab to select by default */
	defaultValue?: string
	class?: string
	/** DaisyUI tab style: "box" | "border" | "lift" (default: "box") */
	variant?: "box" | "border" | "lift"
}

export function Tabs(props: Readonly<TabsProps>) {
	const defaultVal = () => props.defaultValue ?? props.tabs[0]?.value ?? ""
	const [active, setActive] = createSignal(defaultVal())
	const variantClass = () =>
		props.variant === "border"
			? "tabs-border"
			: props.variant === "lift"
				? "tabs-lift"
				: "tabs-box"

	return (
		<div class={cn("tabs", variantClass(), props.class)} role="tablist">
			<For each={[...props.tabs]}>
				{(tab) => (
					<>
						<input
							type="radio"
							name={props.name}
							value={tab.value}
							aria-label={tab.label}
							checked={active() === tab.value}
							onInput={() => setActive(tab.value)}
							class="tab"
							role="tab"
						/>
						<div
							class="tab-content border-base-300 bg-base-100 p-4 rounded-b-lg border border-t-0"
							role="tabpanel"
						>
							{tab.content}
						</div>
					</>
				)}
			</For>
		</div>
	)
}
