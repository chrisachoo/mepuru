import type { JSX } from "solid-js"
import { A } from "@solidjs/router"
import { Hash } from "lucide-solid"
import { Show } from "solid-js"
import { CodePreviewTabs } from "~/components/docs/code-preview-tabs"

const previewBoxClass
	= "relative overflow-hidden flex flex-wrap items-center gap-3 rounded-xl border border-base-300 bg-base-200/50 p-4"

type ComponentDemoProps = {
	preview: JSX.Element
	code: string
	name: string
	title: string
	href: string
}

export function ComponentDemo(props: Readonly<ComponentDemoProps>) {
	const hasCode = () => (props.code ?? "").trim().length > 0

	return (
		<div class="space-y-6">
			<div class="flex items-center gap-2 pb-3 text-sm font-bold">
				<A
					href={props.href}
					aria-label="Link to heading"
					class="bg-base-100 hover:bg-primary/10 text-base-content/50 hover:text-base-content border-primary/5 hover:border-primary/10 hover:shadow-base-200 inline-grid size-6 place-content-center rounded-sm border hover:shadow-sm"
					onClick={(e) => {
						e.preventDefault()
						e.stopPropagation()
						e.currentTarget.scrollIntoView({ behavior: "smooth" })
					}}
				>
					<Hash class="size-3" />
				</A>
				<h3 class="component-preview-title mt-2 mb-1 text-lg font-semibold">{props.title}</h3>
			</div>
			<Show
				when={hasCode()}
				fallback={(
					<div class={previewBoxClass}>
						{props.preview}
					</div>
				)}
			>
				<CodePreviewTabs
					name={props.name}
					preview={props.preview}
					code={props.code}
				/>
			</Show>
		</div>
	)
}
