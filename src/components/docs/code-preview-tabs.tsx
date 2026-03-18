/* eslint-disable solid/no-innerhtml */
import type { JSX } from "solid-js"
import { Copy, SquareCheckBig } from "lucide-solid"
import { createResource, createSignal, Show } from "solid-js"
import { Button } from "~/components/ui/button"
import { Tabs } from "~/components/ui/tabs"
import { cn } from "~/lib/cn"

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
		async (src) => {
			const { codeToHtml } = await import("shiki")

			return codeToHtml(src.code, {
				lang: "tsx",
				tabindex: 2,
				theme: "tokyo-night"
			})
		}
	)

	const handleCopy = async () => {
		await copyToClipboard(props.code.trim())

		setCopied(true)
		setJustCopied(true)

		setTimeout(() => setJustCopied(false), 300)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<Tabs
			name={props.name}
			value={activeTab()}
			onChange={setActiveTab}
			tabs={[
				{
					content: (
						<div class="relative flex flex-wrap items-center gap-3 rounded-xl bg-base-200/50 p-4">
							{props.preview}
						</div>
					),
					label: "Preview",
					value: "preview"
				},
				{
					content: (
						<div class="relative">
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

							<div class={cn(
								"max-h-96 text-xs [&_pre]:m-0! [&_pre]:bg-transparent! [&_pre]:p-0!",
								"scrollbar-none overflow-auto overscroll-contain scroll-smooth"
							)}
							>
								<Show
									when={source()}
									fallback={(
										<pre class="font-mono text-base-content/60">
											<code>{props.code.trim()}</code>
										</pre>
									)}
								>
									{html => (
										<div class="relative p-4 font-mono leading-relaxed">
											<div innerHTML={html()} />
										</div>
									)}
								</Show>
							</div>
						</div>
					),
					label: "JSX",
					value: "jsx"
				}
			]}
		/>
	)
}
