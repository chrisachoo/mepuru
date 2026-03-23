import { A } from "@solidjs/router"
import { For } from "solid-js"
import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { InlineCode } from "~/components/docs/inline-code"
import { PageLayout } from "~/components/layout/page-layout"
import {
	Accordion,
	AccordionContent,
	AccordionTrigger
} from "~/components/ui/accordion"
import {
	Alert,
	AlertDescription,
	AlertTitle
} from "~/components/ui/alert"
import { Badge } from "~/components/ui/badge"
import { buttonVariants } from "~/components/ui/button"
import {
	Card,
	CardBody,
	CardDescription,
	CardTitle
} from "~/components/ui/card"
import { Divider } from "~/components/ui/divider"
import { faq } from "~/constants"
import { cn } from "~/lib/cn"

const usageCode = `import { Button } from "~/components/ui/button"

export default function Showcase() {
  return (
    <Button variant="light" size="small">
      Click me
    </Button>
  )
}`

const steps = [
	{
		body: "Open any component page and use the copy control on the code block.",
		title: "Copy"
	},
	{
		body: "Drop the file into something like src/components/ui next to your other primitives.",
		title: "Place"
	},
	{
		body: "Adjust imports, variants, and Tailwind classes—it's your code now.",
		title: "Customize"
	}
] as const

export default function IntroductionPage() {
	return (
		<PageLayout
			title="Introduction"
			description="A copy-paste UI component system for SolidJS built with daisyUI and Tailwind."
		>
			<Alert variant="info">
				<AlertTitle>Welcome to Mēpuru</AlertTitle>
				<AlertDescription>
					You get source files, not an opaque package—ideal when you want design
					consistency without giving up control.
				</AlertDescription>
			</Alert>

			<section class="space-y-4 leading-relaxed text-base-content/80">
				<p>
					<strong>Mēpuru</strong>
					{" "}
					is a collection of UI components for
					{" "}
					<strong>SolidJS</strong>
					, styled with
					{" "}
					<strong>daisyUI</strong>
					{" "}
					and
					{" "}
					<strong>Tailwind CSS</strong>
					.
				</p>

				<p>
					Instead of installing a component library, you copy the component
					source into your project and use it as your own.
				</p>

				<p>
					You own the code. Customize it, extend it, or adapt it to your design
					system without being locked into a dependency.
				</p>
			</section>

			<div class="flex flex-wrap gap-2 pt-2">
				<Badge variant="neutral">Copy & paste</Badge>
				<Badge variant="secondary">Solid primitives</Badge>
				<Badge variant="primary">daisyUI + Tailwind</Badge>
			</div>

			<Divider class="my-2" />

			<section class="space-y-4">
				<h2 class="text-xl font-semibold text-base-content">How it works</h2>
				<div class="grid gap-4 md:grid-cols-3">
					<For each={steps}>
						{(step, index) => (
							<Card
								size="sm"
								class="border-base-300/80 bg-base-200/30"
							>
								<CardBody class="gap-2">
									<span class="text-xs font-bold text-primary">
										{String(index() + 1).padStart(2, "0")}
									</span>
									<CardTitle class="text-base">{step.title}</CardTitle>
									<CardDescription>{step.body}</CardDescription>
								</CardBody>
							</Card>
						)}
					</For>
				</div>

				<ul class="mt-2 space-y-2 text-sm text-base-content/80">
					<li class="flex gap-2">
						<span class="text-primary">•</span>
						<span>
							Default location:
							{" "}
							<InlineCode>/components/ui</InlineCode>
						</span>
					</li>
					<li class="flex gap-2">
						<span class="text-primary">•</span>
						<span>Wire up shared utilities like cn() and polymorphic helpers.</span>
					</li>
				</ul>
			</section>

			<section class="rounded-xl border border-primary/20 bg-primary/5 p-5">
				<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div class="space-y-1">
						<h2 class="text-lg font-semibold text-base-content">
							Prefer seeing compositions first?
						</h2>
						<p class="max-w-xl text-sm text-base-content/70">
							The Blocks page stitches the same primitives into dashboards,
							pricing, and settings—useful when you are pitching a look or
							onboarding a team.
						</p>
					</div>
					<A
						href="/blocks/"
						class={cn(
							buttonVariants({ size: "sm", variant: "primary" }),
							"shrink-0"
						)}
					>
						View blocks
					</A>
				</div>
			</section>

			<section class="space-y-4 pt-2">
				<h2 class="text-xl font-semibold text-base-content">Example</h2>

				<ArticleCodeBlock
					name="showcase.tsx"
					language="tsx"
					code={usageCode}
				/>
			</section>

			<section class="space-y-4 pt-6">
				<h2 class="text-xl font-semibold text-base-content">FAQ</h2>

				<For each={faq}>
					{(item, index) => (
						<Accordion
							icon="arrow"
							class="bg-base-200"
							name={`intro-faq-${String(index())}`}
							open
						>
							<AccordionTrigger>{item.title}</AccordionTrigger>
							<AccordionContent>{item.description}</AccordionContent>
						</Accordion>
					)}
				</For>
			</section>
		</PageLayout>
	)
}
