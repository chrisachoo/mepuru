import { A } from "@solidjs/router"
import { Component } from "lucide-solid"
import { For } from "solid-js"
import { componentDocs, componentHref } from "~/lib/docs/registry"

function ComponentList() {
	return (
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<For each={[...componentDocs]}>
				{entry => (
					<A
						href={componentHref(entry)}
						class="text-base-content/90 hover:text-base-content flex flex-col gap-1 rounded-lg p-4 hover:bg-base-300/50 transition-colors"
					>
						<div class="flex items-center gap-2">
							<div class="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
								<Component class="size-4" />
							</div>
							<span class="text-sm font-medium">{entry.name}</span>
						</div>
						{entry.description
							? (
									<span class="text-xs text-base-content/60 line-clamp-2">{entry.description}</span>
								)
							: null}
					</A>
				)}
			</For>
		</div>
	)
}

export default function ComponentsPage() {
	return (
		<main class="min-h-screen w-full bg-base-100 relative overflow-x-hidden bg-dot-grid">
			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="h-80 w-96 bg-primary/10 blur-3xl rounded-full mt-12 animate-pulse" />
			</div>
			<article class="relative mx-auto w-full max-w-3xl px-6 py-16">
				<div class="space-y-3 animate-fade-in">
					<h1 class="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
						Components
					</h1>
					<p class="text-base-content/70 text-lg leading-relaxed">
						Mēpuru components are a collection of reusable UI components that can be used to build your application. Browse the components below to see the available components and how to use them.
					</p>
				</div>

				<div class="mt-10">
					<ComponentList />
				</div>
			</article>
		</main>
	)
}
