/* eslint-disable solid/no-innerhtml */
import type { JSX } from "solid-js"
import { A } from "@solidjs/router"
import { Copy, Hash, SquareCheckBig } from "lucide-solid"
import { codeToHtml } from "shiki"
import { createResource, createSignal, Show } from "solid-js"
import { Button } from "../ui/button"
import { Tabs } from "../ui/tabs"

type ComponentDemoProps = {
	preview: JSX.Element
	code: string
	name: string
	title: string
	href: string
}

function copyToClipboard(text: string): Promise<void> {
	return navigator.clipboard.writeText(text)
}

export function ComponentDemo(props: Readonly<ComponentDemoProps>) {
	const [activeTab, setActiveTab] = createSignal<"JSX" | "preview">("preview")
	const [copied, setCopied] = createSignal(false)
	const [justCopied, setJustCopied] = createSignal(false)

	const [source] = createResource(() => ({ code: props.code }), async source => codeToHtml(source.code, {
		lang: "javascript",
		tabindex: 2,
		theme: "catppuccin-macchiato"
	}))

	const handleCopy = async () => {
		await copyToClipboard(props.code.trim())
		setCopied(true)
		setJustCopied(true)
		setTimeout(() => setJustCopied(false), 400)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div class="">
			<div class="flex items-center gap-2 pb-3 text-sm font-bold">
				<A
					href={props.href}
					aria-label="Link to heading"
					class="bg-base-100 hover:bg-primary/10 text-base-content/50 hover:text-base-content border-primary/5 hover:border-primary/10 hover:shadow-base-200 inline-grid size-6 place-content-center rounded-sm border hover:shadow-sm"
				>
					<Hash class="size-3" />
				</A>
				<h3 class="component-preview-title mt-2 mb-1 text-lg font-semibold">{props.title}</h3>
			</div>
			<Tabs
				name={props.name}
				value={activeTab()}
				onChange={setActiveTab}
				tabs={[
					{
						content: (
							<div class="relative overflow-hidden flex flex-wrap items-center gap-3 rounded-xl border border-base-300 bg-base-200/50 p-4">
								{props.preview}
							</div>
						),
						label: "Preview",
						value: "preview"
					},
					{
						content: (
							<div class="overflow-x-auto text-sm [&_pre]:m-0! [&_pre]:bg-transparent! [&_pre]:p-0!">
								<Show
									when={source()}
									fallback={(
										<pre class="font-mono text-base-content/60">
											<code>{props.code.trim()}</code>
										</pre>
									)}
								>
									{html => (
										<div class="relative">
											<div class="rounded-xl border border-base-300 bg-base-200/50 p-4" innerHTML={html()} />
											<Button
												class="btn btn-soft transition-all absolute top-3 right-2 z-10"
												aria-label="Copy to clipboard"
												onClick={handleCopy}
												variant="ghost"
												size="sm"
											>
												<Show when={!copied()}>
													<Copy class="size-4 shrink-0" />
												</Show>
												<Show when={copied()}>
													<SquareCheckBig class={`size-4 shrink-0 ${justCopied() && "animate-copy-pop"}`} />
												</Show>
											</Button>
										</div>
									)}
								</Show>
							</div>
						),
						label: "JSX",
						value: "jsx"
					}
				]}
			/>
		</div>
	)
}
