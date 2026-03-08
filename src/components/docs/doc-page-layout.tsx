import type { JSX } from "solid-js"
import { Show } from "solid-js"
import { DocPageActions } from "~/components/docs/doc-page-actions"
import { cn } from "~/lib/cn"

type DocPageLayoutProps = {
	title: string
	description: string
	children: JSX.Element
	class?: string
	sourceCode?: string
	sourceFilePath?: string
	githubUrl?: string
}

function showFileActions(source?: string, path?: string) {
	if (source && path)
		return true

	return false
}

export function DocPageLayout(props: Readonly<DocPageLayoutProps>) {
	return (
		<main class="min-h-screen w-full bg-base-100 relative overflow-x-hidden bg-dot-grid">
			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="h-80 w-96 bg-primary/10 blur-3xl rounded-full mt-12 animate-pulse" />
			</div>
			<article class={cn("relative mx-auto w-full max-w-3xl px-6 py-16", props.class)}>
				<div class="space-y-3 animate-fade-in">
					<div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<div class="min-w-0">
							<h1 class="text-2xl font-bold tracking-tight text-base-content sm:text-4xl">
								{props.title}
							</h1>
							<p class="mt-2 text-base-content/70 leading-relaxed">
								{props.description}
							</p>
						</div>
						<Show when={showFileActions(props.sourceCode, props.sourceFilePath)}>
							<DocPageActions
								sourceCode={props.sourceCode!}
								sourceFilePath={props.sourceFilePath!}
								githubUrl={props.githubUrl}
								class="shrink-0"
							/>
						</Show>
					</div>
				</div>
				{props.children}
			</article>
		</main>
	)
}
