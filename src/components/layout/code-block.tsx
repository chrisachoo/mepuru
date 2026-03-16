/* eslint-disable solid/no-innerhtml */
import { Check, Copy, Expand, Shrink } from "lucide-solid"
import { createResource, createSignal, Show } from "solid-js"
import { cn } from "~/lib/cn"

type CodeBlockProps = {
	code: string
	language?: "bash" | "css" | "javascript" | "tsx" | "typescript"
	class?: string
	title?: string
	expand?: boolean
}

function copyToClipboard(text: string): Promise<void> {
	return navigator.clipboard.writeText(text)
}

export function CodeBlock(props: Readonly<CodeBlockProps>) {
	const [copied, setCopied] = createSignal(false)
	const [justCopied, setJustCopied] = createSignal(false)
	const [expanded, setExpanded] = createSignal(false)

	const lang = () => props.language ?? "tsx"
	const cleanedCode = () => props.code.trim()

	const [highlighted] = createResource(
		() => ({
			code: cleanedCode(),
			lang: lang()
		}),
		async (source) => {
			const { codeToHtml } = await import("shiki")

			return codeToHtml(source.code, {
				lang: source.lang,
				theme: "tokyo-night"
			})
		}
	)

	const handleCopy = async () => {
		await copyToClipboard(cleanedCode())

		setCopied(true)
		setJustCopied(true)

		setTimeout(() => setJustCopied(false), 300)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div
			class={cn(
				"overflow-hidden rounded-xl border border-base-300 bg-base-200/80 shadow-lg shadow-base-content/5",
				props.class
			)}
		>
			<div class="flex flex-wrap items-center justify-between gap-2 border-b border-base-300 bg-base-300/50 px-4 py-3">
				<div class="flex items-center gap-3">
					<div class="flex items-center">
						<div class="flex items-center gap-2 px-2.5 py-1 font-mono text-xs">
							┌{" "}
							<span class="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
								{lang()}
							</span>
							<Show when={props.title}>
								<span class="text-base-content/80">{props.title}</span>
							</Show>
							┐
						</div>
					</div>
				</div>

				<div class="flex items-center gap-1">
					<Show when={props.expand}>
						<button
							type="button"
							class="btn btn-ghost btn-xs"
							onClick={() => setExpanded(!expanded())}
						>
							<Show
								when={expanded()}
								fallback={<Expand class="size-3.5" />}
							>
								<Shrink class="size-3.5" />
							</Show>
						</button>
					</Show>

					<button
						type="button"
						onClick={handleCopy}
						class="btn btn-square normal-case btn-link btn-sm"
					>
						<Show
							when={copied()}
							fallback={<Copy class="size-3.5" />}
						>
							<span class={cn("flex", justCopied() && "animate-copy-pop")}>
								<Check class="size-3.5 text-success" />
							</span>
						</Show>
					</button>
				</div>
			</div>

			<div
				class={cn(
					"relative",
					expanded()
						? "h-full"
						: "scrollbar-none max-h-96 overflow-auto overscroll-contain scroll-smooth"
				)}
			>
				<div
					class={cn(
						"p-4 font-mono text-xs leading-relaxed",
						"[&_pre]:m-0! [&_pre]:bg-transparent! [&_pre]:p-0!"
					)}
				>
					<Show
						when={highlighted()}
						fallback={
							<pre class="font-mono text-base-content/60">
								<code>{cleanedCode()}</code>
							</pre>
						}
					>
						{(html) => <div innerHTML={html()} />}
					</Show>
				</div>
			</div>
		</div>
	)
}
