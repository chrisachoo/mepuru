import { For } from "solid-js"
import { InlineCode } from "~/components/docs/inline-code"
import { CodeBlock } from "~/components/layout/code-block"
import { PageLayout } from "~/components/layout/page-layout"
import {
	Accordion,
	AccordionContent,
	AccordionTrigger
} from "~/components/ui/accordion"
import { faq } from "~/constants"

const usageCode = `import { Button } from "~/components/ui/button"

export default function Showcase() {
  return (
    <Button variant="light" size="small">
      Click me
    </Button>
  )
}`

export default function IntroductionPage() {
	return (
		<PageLayout
			title="Introduction"
			description="A copy-paste UI component system for SolidJS built with daisyUI and Tailwind."
		>
			<section class="space-y-4 leading-relaxed text-base-content/80">
				<p>
					<strong>Mēpuru</strong>
					{" "}
					is a collection of UI components for
					{" "}
					<strong>SolidJS</strong>
					, styled with
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

			<section class="space-y-4 pt-6">
				<h2 class="text-xl font-semibold">How it works</h2>

				<ul class="space-y-1 text-base-content/80">
					<li>• Copy a component from the docs</li>
					<li>
						• Place it in
						{" "}
						<InlineCode>&quot;/components/ui&quot;</InlineCode>
					</li>
					<li>• Import and use it in your project</li>
				</ul>
			</section>

			<section class="space-y-4 pt-6">
				<h2 class="text-xl font-semibold">Example</h2>

				<CodeBlock
					name="showcase.tsx"
					language="tsx"
					code={usageCode}
				/>
			</section>

			<section class="space-y-4 pt-6">
				<h2 class="text-xl font-semibold">FAQ</h2>

				<For each={faq}>
					{item => (
						<Accordion
							icon="arrow"
							name="introduction"
							class="bg-base-200"
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
