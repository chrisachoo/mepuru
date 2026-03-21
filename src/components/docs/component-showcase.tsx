import type { JSX } from "solid-js"
import { Show, splitProps } from "solid-js"
import { PreviewCodeTabs } from "~/components/docs/code/lift-tabs"
import { DocSectionHeading } from "~/components/docs/section-heading"
import { cn } from "~/lib/cn"

type ComponentShowcaseProps = {
	children?: JSX.Element
	code: string
	id: string
	name: string
	preview: JSX.Element
	title?: string
} & JSX.IntrinsicElements["div"]

function ShowcaseDescription(props: Readonly<{ children?: JSX.Element }>) {
	return <div class="text-xs leading-relaxed opacity-80">{props.children}</div>
}

function PreviewWell(props: Readonly<{ children: JSX.Element }>) {
	return (
		<div
			class={cn(
				"relative flex flex-wrap items-center gap-3 overflow-hidden rounded-xl",
				"border border-base-300 bg-base-200/50 p-4"
			)}
		>
			{props.children}
		</div>
	)
}

export function ComponentShowcase(props: Readonly<ComponentShowcaseProps>) {
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
			<DocSectionHeading
				id={local.id}
				title={local.title}
			/>

			<ShowcaseDescription>{local.children}</ShowcaseDescription>

			<Show
				when={hasCode()}
				fallback={<PreviewWell>{local.preview}</PreviewWell>}
			>
				<PreviewCodeTabs
					code={local.code}
					name={local.name}
					preview={local.preview}
				/>
			</Show>
		</div>
	)
}
