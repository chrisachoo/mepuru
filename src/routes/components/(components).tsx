import { A } from "@solidjs/router"
import { Component } from "lucide-solid"
import { For } from "solid-js"
import { PageLayout } from "~/components/layout/page-layout"
import { componentDocs, componentHref } from "~/lib/docs/registry"

function ComponentList() {
	return (
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
			<For each={[...componentDocs]}>
				{entry => (
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
						{entry.description
							? (
									<span class="line-clamp-2 text-xs text-base-content/60">
										{entry.description}
									</span>
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
		<PageLayout
			title="Components"
			description="Mēpuru components are a collection of reusable UI components that
						can be used to build your application. Browse the components below
						to see the available components and how to use them."
		>
			<ComponentList />
		</PageLayout>
	)
}
