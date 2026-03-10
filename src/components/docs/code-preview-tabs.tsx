/* eslint-disable solid/no-innerhtml */
import type { JSX } from "solid-js"
import { Copy, SquareCheckBig } from "lucide-solid"
import { codeToHtml } from "shiki"
import { createResource, createSignal, Show } from "solid-js"
import { Button } from "~/components/ui/button"
import { Tabs } from "~/components/ui/tabs"

const previewBoxClass
	= "relative flex flex-wrap items-center gap-3 rounded-xl border border-base-300 bg-base-200/50 p-4"

function copyToClipboard(text: string): Promise<void> {
	return navigator.clipboard.writeText(text)
}

type CodePreviewTabsProps = {
	preview: JSX.Element
	code: string
	name: string
}

export function CodePreviewTabs(props: Readonly<CodePreviewTabsProps>) {
	const [activeTab, setActiveTab] = createSignal<"jsx" | "preview">("preview")
	const [copied, setCopied] = createSignal(false)
	const [justCopied, setJustCopied] = createSignal(false)

	const [source] = createResource(
		() => ({ code: props.code }),
		async src =>
			codeToHtml(src.code, { lang: "tsx", tabindex: 2, theme: "tokyo-night" })
	)

	const handleCopy = async () => {
		await copyToClipboard(props.code.trim())
		setCopied(true)
		setJustCopied(true)
		setTimeout(() => setJustCopied(false), 400)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<Tabs
			name={props.name}
			value={activeTab()}
			onChange={setActiveTab}
			tabs={[
				{
					content: <div class={previewBoxClass}>{props.preview}</div>,
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
										<div
											class="rounded-xl border border-base-300 bg-base-200/50 p-4"
											innerHTML={html()}
										/>
										<Button
											class="absolute top-3 right-2 z-10 btn-square transition-all btn-soft"
											aria-label="Copy to clipboard"
											onClick={handleCopy}
											variant="ghost"
											size="sm"
										>
											<Show when={!copied()}>
												<Copy class="size-4 shrink-0" />
											</Show>
											<Show when={copied()}>
												<SquareCheckBig
													class={`size-4 shrink-0 ${justCopied() ? "animate-copy-pop" : ""}`}
												/>
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
	)
}
