import type { JSX } from "solid-js"
import { createSignal, For } from "solid-js"
import { SnippetCodeBlock } from "~/components/docs/code/snippet-code-block"

export type LiftTabItem = {
	value: string
	label: string
	content: JSX.Element
}

export function LiftTabGroup(
	props: Readonly<{
		name: string
		tabs: LiftTabItem[]
		value: string
		onChange: (value: string) => void
	}>
) {
	return (
		<div
			class="tabs-lift tabs tabs-md"
			role="tablist"
		>
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
							class="tab-content rounded-b-xl border border-t-0 border-base-300 bg-base-200 p-4 shadow-lg shadow-base-content/5"
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

export function PreviewCodeTabs(
	props: Readonly<{
		preview: JSX.Element
		code: string
		name: string
	}>
) {
	const [activeTab, setActiveTab] = createSignal<"code" | "preview">("preview")

	return (
		<LiftTabGroup
			name={props.name}
			value={activeTab()}
			onChange={value => setActiveTab(value as "code" | "preview")}
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
					content: <SnippetCodeBlock code={props.code} />,
					label: "JSX",
					value: "code"
				}
			]}
		/>
	)
}
