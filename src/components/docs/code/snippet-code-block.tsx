import type { DocCodeLang } from "~/lib/shiki"
import { Copy, SquareCheckBig } from "lucide-solid"
import { createMemo, createResource, Show } from "solid-js"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/cn"
import { useCopyFeedback } from "~/lib/copy-feedback"
import { highlight } from "~/lib/shiki"

type SnippetCodeBlockProps = {
	code: string
	language?: DocCodeLang
	class?: string
	copyButtonClass?: string
	proseSize?: "sm" | "xs"
}

export function SnippetCodeBlock(props: Readonly<SnippetCodeBlockProps>) {
	const { copied, copy, justCopied } = useCopyFeedback()

	const sourceKey = createMemo(() => ({
		code: props.code,
		lang: props.language ?? "tsx"
	}))

	const [source] = createResource(sourceKey, async ({ code, lang }) =>
		highlight(code.trim(), lang))

	const proseSize = () => props.proseSize ?? "xs"

	return (
		<div class={cn("relative", props.class)}>
			<Button
				class={cn(
					"absolute top-2 right-2 z-10 btn-square btn-soft",
					props.copyButtonClass
				)}
				onClick={() => void copy(props.code)}
				variant="ghost"
				size="sm"
			>
				<Show when={!copied()}>
					<Copy class="size-4" />
				</Show>
				<Show when={copied()}>
					<SquareCheckBig
						class={cn("size-4", justCopied() && "animate-copy-pop")}
					/>
				</Show>
			</Button>

			<div
				class={cn(
					"scrollbar-none max-h-96 overflow-auto",
					proseSize() === "sm" ? "text-sm" : "text-xs",
					"[&_pre]:m-0! [&_pre]:bg-transparent! [&_pre]:p-0!"
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
						<div class="overflow-x-auto font-mono leading-relaxed">
							<div innerHTML={html()} />
						</div>
					)}
				</Show>
			</div>
		</div>
	)
}
