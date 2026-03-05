/* eslint-disable solid/no-innerhtml */
import { Check, Copy } from "lucide-solid"
import { codeToHtml } from "shiki"
import { createResource, createSignal, Show } from "solid-js"
import { cn } from "~/lib/cn"

type CodeBlockProps = {
	code: string
	language?: "bash" | "css" | "javascript" | "tsx" | "typescript"
	class?: string
	title?: string
}

function copyToClipboard(text: string): Promise<void> {
	return navigator.clipboard.writeText(text)
}

export function CodeBlock(props: Readonly<CodeBlockProps>) {
	const [copied, setCopied] = createSignal(false)
	const [justCopied, setJustCopied] = createSignal(false)

	const [highlighted] = createResource(
		() => ({
			code: props.code,
			lang: props.language ?? "tsx"
		}),
		async source =>
			codeToHtml(source.code, {
				lang: source.lang,
				theme: "catppuccin-macchiato"
			})
	)

	const handleCopy = async () => {
		await copyToClipboard(props.code.trim())
		setCopied(true)
		setJustCopied(true)
		setTimeout(() => setJustCopied(false), 400)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div
			class={cn(
				"rounded-xl overflow-hidden border border-base-300 bg-base-200/80 shadow-lg shadow-base-content/5",
				props.class
			)}
		>
			<div class="flex items-center justify-between gap-2 border-b border-base-300 bg-base-300/50 px-4 py-3">
				<div class="flex items-center gap-2 min-w-0">
					<span class="size-3 shrink-0 rounded-full bg-error/80" />
					<span class="size-3 shrink-0 rounded-full bg-warning/80" />
					<span class="size-3 shrink-0 rounded-full bg-success/80" />
					{props.title
						? (
								<span class="ml-2 truncate text-sm font-medium text-base-content/60">
									{props.title}
								</span>
							)
						: null}
				</div>
				<button
					type="button"
					onClick={handleCopy}
					class={cn(
						"flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
						"text-base-content/70 hover:bg-base-300 hover:text-base-content",
						"focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-base-200"
					)}
					aria-label={copied() ? "Copied" : "Copy code"}
				>
					<Show
						when={copied()}
						fallback={
							<Copy class="size-3.5 shrink-0" />
						}
					>
						<span class={cn("flex shrink-0", justCopied() && "animate-copy-pop")}>
							<Check class="size-3.5 text-success" />
						</span>
					</Show>
					<span>{copied() ? "Copied" : "Copy"}</span>
				</button>
			</div>
			<div class="overflow-x-auto p-4 text-sm [&_pre]:m-0! [&_pre]:bg-transparent! [&_pre]:p-0!">
				<Show
					when={highlighted()}
					fallback={(
						<pre class="font-mono text-base-content/60">
							<code>{props.code.trim()}</code>
						</pre>
					)}
				>
					{html => <div innerHTML={html()} />}
				</Show>
			</div>
		</div>
	)
}
