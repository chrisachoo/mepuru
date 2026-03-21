import type { DocCodeLang } from "~/lib/shiki"
import { Check, Copy, Expand, Shrink } from "lucide-solid"
import { createResource, createSignal, Show } from "solid-js"
import { cn } from "~/lib/cn"
import { useCopyFeedback } from "~/lib/copy-feedback"
import { highlight } from "~/lib/shiki"

type ArticleCodeBlockProps = {
	code: string
	language?: DocCodeLang
	class?: string
	name?: string
	expand?: boolean
}

export function ArticleCodeBlock(props: Readonly<ArticleCodeBlockProps>) {
	const { copied, copy, justCopied } = useCopyFeedback()
	const [expanded, setExpanded] = createSignal(false)

	const lang = (): DocCodeLang => props.language ?? "tsx"
	const cleanedCode = () => props.code.trim()

	const [highlighted] = createResource(
		() => ({
			code: cleanedCode(),
			lang: lang()
		}),
		async ({ code, lang: language }) => highlight(code, language)
	)

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
						<div class="flex items-center gap-2 px-2.5 py-1 font-mono text-xs leading-tight">
							┌
							{" "}
							<span class="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
								{lang()}
							</span>
							<Show when={props.name}>
								<span class="text-base-content/80">{props.name}</span>
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
						class="btn btn-square normal-case btn-link btn-sm"
						onClick={() => void copy(cleanedCode())}
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
						fallback={(
							<pre class="font-mono text-base-content/60">
								<code>{cleanedCode()}</code>
							</pre>
						)}
					>
						{html => <div innerHTML={html()} />}
					</Show>
				</div>
			</div>
		</div>
	)
}
