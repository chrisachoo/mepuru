import type { JSX } from "solid-js"
import { A } from "@solidjs/router"
import { Hash } from "lucide-solid"
import { Show, splitProps } from "solid-js"
import { CodePreviewTabs } from "~/components/docs/code-preview-tabs"
import { cn } from "~/lib/cn"

type ComponentDemoProps = {
	children?: JSX.Element
	code: string
	id: string
	name: string
	preview: JSX.Element
	title?: string
} & JSX.IntrinsicElements["div"]

export function ComponentDemo(props: Readonly<ComponentDemoProps>) {
	const hasCode = () => (props.code ?? "").trim().length > 0
	const [local, rest] = splitProps(props, [
		"children",
		"class",
		"code",
		"id",
		"name",
		"preview",
		"title"
	])

	return (
		<div
			id={local.id}
			class={cn("space-y-4", local.class)}
			{...rest}
		>
			<Show when={props.title}>
				<div class="flex items-center gap-2 pb-2 text-sm font-bold">
					<A
						href={`#${props.id}`}
						aria-label="Link to heading"
						class={
							cn(
								"inline-grid size-6 place-content-center rounded-sm border border-primary/5 bg-base-100 text-base-content/50 ",
								"hover:border-primary/10 hover:bg-primary/10 hover:text-base-content hover:shadow-sm hover:shadow-base-200"
							)
						}
						onClick={(e) => {
							e.preventDefault()
							e.stopPropagation()
							e.currentTarget.scrollIntoView({ behavior: "smooth" })
						}}
					>
						<Hash class="size-3" />
					</A>
					<h3 class="text-lg font-semibold">{props.title}</h3>
				</div>
			</Show>

			<div class="text-xs leading-relaxed opacity-80">{props.children}</div>

			<Show
				when={hasCode()}
				fallback={(
					<div class="relative flex flex-wrap items-center gap-3 overflow-hidden rounded-xl border border-base-300 bg-base-200/50 p-4">
						{props.preview}
					</div>
				)}
			>
				<CodePreviewTabs
					code={props.code}
					name={props.name}
					preview={props.preview}
				/>
			</Show>
		</div>
	)
}
