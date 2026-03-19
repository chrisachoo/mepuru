import { A } from "@solidjs/router"
import { Component } from "lucide-solid"
import { For } from "solid-js"
import { componentDocs, componentHref } from "~/lib/docs/registry"

function ComponentList() {
	return (
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
			<For each={[...componentDocs]}>
				{(entry) => (
					<A
						href={componentHref(entry)}
						class="flex flex-col gap-1 rounded-lg p-4 text-base-content/90 transition-colors hover:bg-base-300/50 hover:text-base-content"
					>
						<div class="flex items-center gap-2">
							<div class="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
								<Component class="size-4" />
							</div>
							<span class="text-sm font-medium">{entry.name}</span>
						</div>
						{entry.description ? (
							<span class="line-clamp-2 text-xs text-base-content/60">
								{entry.description}
							</span>
						) : null}
					</A>
				)}
			</For>
		</div>
	)
}

export default function ComponentsPage() {
	return (
		<main class="bg-dot-grid relative min-h-screen w-full overflow-x-hidden bg-base-100">
			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="mt-12 h-80 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
			</div>
			<article class="relative mx-auto w-full max-w-3xl px-6 py-16">
				<div class="animate-fade-in space-y-3">
					<h1 class="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
						Components
					</h1>
					<p class="text-lg leading-relaxed text-base-content/70">
						Mēpuru components are a collection of reusable UI components that
						can be used to build your application. Browse the components below
						to see the available components and how to use them.
					</p>
				</div>

				<div class="mt-10">
					<ComponentList />
				</div>
			</article>
		</main>
	)
}
