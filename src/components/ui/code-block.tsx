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

	const lang = () => props.language ?? "tsx"

	const [highlighted] = createResource(
		() => ({
			code: props.code,
			lang: lang()
		}),
		async source =>
			codeToHtml(source.code, {
				lang: source.lang,
				theme: "tokyo-night"
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
				"overflow-hidden rounded-xl border border-base-300 bg-base-200/80 shadow-lg shadow-base-content/5",
				props.class
			)}
		>
			<div class="flex flex-wrap items-center justify-between gap-2 border-b border-base-300 bg-base-300/50 px-4 py-3">
				<div class="flex min-w-0 items-center gap-2">
					<span class="size-3 shrink-0 rounded-full bg-error/80" />
					<span class="size-3 shrink-0 rounded-full bg-warning/80" />
					<span class="size-3 shrink-0 rounded-full bg-success/80" />
					<Show when={props.title}>
						<span class="ml-2 truncate text-sm font-medium text-base-content/60">
							{props.title}
						</span>
					</Show>
				</div>

				<button
					type="button"
					onClick={handleCopy}
					class="flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-base-content/70 hover:bg-base-300 hover:text-base-content focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-base-200 focus:outline-none"
					aria-label={copied() ? "Copied" : "Copy code"}
				>
					<Show
						when={copied()}
						fallback={<Copy class="size-3.5 shrink-0" />}
					>
						<span
							class={cn("flex shrink-0", justCopied() && "animate-copy-pop")}
						>
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
