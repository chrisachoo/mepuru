import type { JSX } from "solid-js"
import { createSignal, For } from "solid-js"
import { CodeBlock } from "./code-block"

type TabItem = {
	value: string
	label: string
	content: JSX.Element
}

function Tabs(props: Readonly<{
	name: string
	tabs: TabItem[]
	value: string
	onChange: (value: string) => void
}>) {
	return (
		<div class="tabs tabs-md tabs-lift" role="tablist">
			<For each={props.tabs}>
				{tab => (
					<>
						<input
							type="radio"
							name={props.name}
							value={tab.value}
							aria-label={tab.label}
							checked={props.value === tab.value}
							onInput={() => props.onChange(tab.value)}
							class="tab checked:[--tab-bg:var(--color-base-200)]"
							role="tab"
						/>
						<div
							class="tab-content rounded-b-xl border border-t-0 border-base-300 bg-base-200 shadow-lg shadow-base-content/5 p-4"
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

export function PreviewTabs(props: Readonly<{
	preview: JSX.Element
	code: string
	name: string
}>) {
	const [activeTab, setActiveTab] = createSignal<"code" | "preview">("preview")

	return (
		<Tabs
			name={props.name}
			value={activeTab()}
			onChange={setActiveTab}
			tabs={[
				{
					content: (
						<div class="flex w-full items-center justify-center gap-4 py-4">
							{props.preview}
						</div>
					),
					label: "Preview",
					value: "preview"
				},
				{
					content: <CodeBlock code={props.code} />,
					label: "JSX",
					value: "code"
				}
			]}
		/>
	)
}
