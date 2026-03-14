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
	if (source && path) return true

	return false
}

export function DocPageLayout(props: Readonly<DocPageLayoutProps>) {
	return (
		<section class="bg-dot-grid relative w-full bg-base-100">
			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="mt-12 h-80 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
			</div>
			<article
				class={cn(
					"relative mx-auto w-full max-w-4xl grow space-y-8",
					props.class
				)}
			>
				<div class="animate-fade-in space-y-3">
					<div class="flex gap-2">
						<div class="grow">
							<h1 class="text-2xl font-bold tracking-tight text-base-content md:text-4xl">
								{props.title}
							</h1>
						</div>
						<Show
							when={showFileActions(props.sourceCode, props.sourceFilePath)}
						>
							<DocPageActions
								sourceCode={props.sourceCode!}
								sourceFilePath={props.sourceFilePath!}
								githubUrl={props.githubUrl}
								class="shrink-0"
							/>
						</Show>
					</div>

					<p class="mt-2 text-base leading-relaxed text-base-content/70">
						{props.description}
					</p>
				</div>

				{props.children}
			</article>
		</section>
	)
}
