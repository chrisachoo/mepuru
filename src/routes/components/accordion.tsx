import { A } from "@solidjs/router"
import { Info } from "lucide-solid"
import { For } from "solid-js"
import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import {
	Accordion,
	AccordionContent,
	AccordionGroup,
	AccordionJoin,
	AccordionTrigger
} from "~/components/ui/accordion"
import accordionComponentCode from "~/components/ui/accordion.tsx?raw"
import { Alert, AlertDescription } from "~/components/ui/alert"

const faqData = [
	{
		description:
			"HTML is the standard markup language for creating web pages and web applications.",
		title: "What is HTML used for?"
	},
	{
		description:
			"CSS stands for Cascading Style Sheets and it describes how HTML elements should be displayed.",
		title: "What does CSS stand for?"
	},
	{
		description:
			"JavaScript is beginner-friendly and one of the most popular programming languages to start with.",
		title: "Is JavaScript hard to learn?"
	}
] as const

const accordionProps = [
	{
		description: "Visual accordion style",
		prop: "variant",
		type: `"border"`
	},
	{
		default: "md",
		description: "With arrow icon",
		prop: "icon",
		type: `"plus" | "arrow"`
	}
]

const accordionDemoCode = `import { Accordion } from "~/components/ui/accordion"
import { For } from "solid-js"

function AccordionDemo() {
	return (
		<AccordionJoin class="w-full">
			<For each={faqData}>
				{item => (
					<Accordion icon="plus" name="accordion-demo" class="item-join bg-base-100" variant="border" open>
						<AccordionTrigger>{item.title}</AccordionTrigger>
						<AccordionContent>{item.description}</AccordionContent>
					</Accordion>
				)}
			</For>
		</AccordionJoin>
	)
}
`

const accordionSeparatedCode = `import { Accordion } from "~/components/ui/accordion";

function AccordionDemo() {
	return (
		<For each={faqData}>
			{item => (
				<Accordion icon="arrow" name="accordion-demo" class="bg-base-100" open>
					<AccordionTrigger>{item.title}</AccordionTrigger>
					<AccordionContent>{item.description}</AccordionContent>
				</Accordion>
			)}
		</For>
	)
}

const faqData = [
	{
		description:
			"HTML is the standard markup language for creating web pages and web applications.",
		title: "What is HTML used for?"
	}
] as const
`

export default function AccordionPage() {
	return (
		<PageLayout
			title="Accordion"
			description="Accordion is used for showing and hiding content but only one item can stay open at a time."
			sourceCode={accordionComponentCode}
			sourceFilePath="src/components/ui/accordion.tsx"
		>
			<Alert icon={<Info class="size-4" />}>
				<AlertDescription class="text-xs font-normal">
					Accordion uses the same style as the
					{" "}
					<A
						href="/components/collapse/"
						class="link"
					>
						collapse component
					</A>
					{" "}
					but it works with details elements. You can control which item to be
					open by setting the open attribute on details element.
				</AlertDescription>
			</Alert>

			<ComponentShowcase
				code={accordionDemoCode}
				id="accordion"
				name="accordion"
				preview={(
					<AccordionJoin class="w-full">
						<For each={faqData}>
							{item => (
								<Accordion
									icon="plus"
									name="accordion-demo"
									class="item-join bg-base-100"
									variant="border"
									open
								>
									<AccordionTrigger>{item.title}</AccordionTrigger>
									<AccordionContent>{item.description}</AccordionContent>
								</Accordion>
							)}
						</For>
					</AccordionJoin>
				)}
			/>

			<DocSectionDivider />

			<ComponentInstallationTabs
				cliComponent="accordion"
				name="accordion-install"
			>
				<ArticleCodeBlock
					code={accordionComponentCode}
					language="tsx"
					name="components/ui/accordion.tsx"
					expand
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={accordionSeparatedCode}
					id="soft-buttons"
					name="soft-buttons"
					title="Soft buttons"
					preview={(
						<AccordionGroup class="w-full">
							<For each={faqData}>
								{item => (
									<Accordion
										icon="arrow"
										name="accordion-demo"
										class="bg-base-100"
										open
									>
										<AccordionTrigger>{item.title}</AccordionTrigger>
										<AccordionContent>{item.description}</AccordionContent>
									</Accordion>
								)}
							</For>
						</AccordionGroup>
					)}
				/>
			</section>

			<PropsTable
				data={accordionProps}
				daisyHref="https://daisyui.com/components/accordion/"
			/>
		</PageLayout>
	)
}
