import { A } from "@solidjs/router"
import { ArrowRight } from "lucide-solid"
import { For } from "solid-js"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { PageLayout } from "~/components/layout/page-layout"
import { BlocksOverviewGallery } from "~/components/showcase/blocks-overview-gallery"
import { Badge } from "~/components/ui/badge"
import { buttonVariants } from "~/components/ui/button"
import {
	Card,
	CardBody,
	CardDescription,
	CardTitle
} from "~/components/ui/card"
import { blocksCatalog } from "~/constants/blocks-catalog"
import { cn } from "~/lib/cn"

// TODO: Block not responsive needs to fix this page and add more
export default function BlocksPage() {
	return (
		<PageLayout
			title="Blocks"
			description="Clean, modern building blocks. Copy and paste into your apps. Built for developers who care about design."
		>
			<section class="grid gap-6 text-base leading-relaxed text-base-content/75 lg:grid-cols-12 lg:gap-10">
				<div class="space-y-3 lg:col-span-7">
					<p>
						Each named block opens its own page with a live preview and a JSX tab
						(plus copy), matching
						{" "}
						<A
							class="link link-primary font-medium"
							href="/components/breadcrumb/"
						>
							component examples
						</A>
						.
					</p>
					<p>
						Primitives live under
						{" "}
						<A
							class="link link-primary font-medium"
							href="/components/button/"
						>
							Components
						</A>
						{" "}
						we skip dialog shells and keep everything inspectable.
					</p>
				</div>
				<div class="rounded-xl border border-primary/20 bg-primary/5 p-5 lg:col-span-5">
					<p class="text-sm font-semibold text-primary">Quick read</p>
					<ul class="mt-2 list-inside list-disc space-y-1.5 text-sm text-base-content/75">
						<li>Gallery below = visual-only inspiration.</li>
						<li>Cards at the bottom = deep dives with code.</li>
						<li>Add more blocks by copying the route + data pattern.</li>
					</ul>
				</div>
			</section>

			<DocSectionDivider />

			<BlocksOverviewGallery />

			<DocSectionDivider />

			<div class="space-y-4">
				<h2 class="text-lg font-semibold text-base-content">Block library</h2>
				<p class="max-w-2xl text-sm text-base-content/70">
					Each card links to a page with Preview and JSX tabs.
				</p>
			</div>

			<div class="grid gap-5 md:grid-cols-2">
				<For each={blocksCatalog}>
					{block => (
						<Card class="group border-base-300/80 transition-colors hover:border-primary/25">
							<CardBody class="flex h-full flex-col gap-4">
								<div class="flex flex-wrap items-center gap-2">
									<Badge
										size="sm"
										variant="neutral"
									>
										{block.tag}
									</Badge>
								</div>
								<div class="space-y-2">
									<CardTitle class="text-lg">{block.title}</CardTitle>
									<CardDescription>{block.description}</CardDescription>
								</div>
								<div class="mt-auto pt-2">
									<A
										href={block.href}
										class={cn(
											buttonVariants({ size: "sm", variant: "outline" }),
											"inline-flex gap-2"
										)}
									>
										Open block
										<ArrowRight class="size-3.5 transition-transform group-hover:translate-x-0.5" />
									</A>
								</div>
							</CardBody>
						</Card>
					)}
				</For>
			</div>
		</PageLayout>
	)
}
