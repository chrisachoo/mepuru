/* eslint-disable solid/no-innerhtml */
import { Copy, SquareCheckBig } from "lucide-solid"
import { createResource, createSignal, Show } from "solid-js"
import { Button } from "~/components/ui/button"
import { cn } from "~/lib/cn"

export function CodeBlock(props: Readonly<{ code: string }>) {
	const [copied, setCopied] = createSignal(false)
	const [justCopied, setJustCopied] = createSignal(false)

	const [source] = createResource(
		() => props.code,
		async (code) => {
			const { codeToHtml } = await import("shiki")
			return codeToHtml(code, {
				lang: "tsx",
				theme: "tokyo-night"
			})
		}
	)

	const handleCopy = async () => {
		await navigator.clipboard.writeText(props.code.trim())

		setCopied(true)
		setJustCopied(true)

		setTimeout(() => setJustCopied(false), 300)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div class="relative">
			<Button
				class="absolute top-2 right-2 z-10 btn-square btn-soft"
				onClick={handleCopy}
				variant="ghost"
				size="sm"
			>
				<Show when={!copied()}>
					<Copy class="size-4" />
				</Show>
				<Show when={copied()}>
					<SquareCheckBig
						class={`size-4 ${justCopied() ? "animate-copy-pop" : ""}`}
					/>
				</Show>
			</Button>

			<div class={cn(
				"max-h-96 overflow-auto text-xs scrollbar-none",
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
						<div class="font-mono leading-relaxed">
							<div innerHTML={html()} />
						</div>
					)}
				</Show>
			</div>
		</div>
	)
}
