import { A } from "@solidjs/router"
import { Info } from "lucide-solid"
import { For } from "solid-js"
import { ComponentCode } from "~/components/docs/component-code"
import { ComponentDemo } from "~/components/docs/component-demo"
import { DocDivider } from "~/components/docs/doc-divider"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { PropsTable } from "~/components/docs/props-table"
import {
	Accordion,
	AccordionContent,
	AccordionTrigger
} from "~/components/ui/accordion"
import { Alert, AlertDescription } from "~/components/ui/alert"
import { CodeBlock } from "~/components/ui/code-block"

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

const accordionComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const accordionVariant = cva("collapse", {
	variants: {
		icon: {
			arrow: "collapse-arrow",
			plus: "collapse-plus"
		},
		variant: {
			border: "border-base-300 border"
		}
	}
})

type AccordionProps = JSX.IntrinsicElements["details"] &
	VariantProps<typeof accordionVariant>

function Accordion(props: Readonly<AccordionProps>) {
	const [local, rest] = splitProps(props, [
		"class",
		"icon",
		"variant",
		"children"
	])
	return (
		<details
			class={cn(
				accordionVariant({ icon: local.icon, variant: local.variant }),
				local.class
			)}
			{...rest}
		>
			{local.children}
		</details>
	)
}

function AccordionTrigger(props: Readonly<JSX.IntrinsicElements["summary"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])

	return (
		<summary
			class={cn("collapse-title font-semibold", local.class)}
			{...rest}
		>
			{local.children}
		</summary>
	)
}

function AccordionContent(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])

	return (
		<div
			class={cn("collapse-content text-sm", local.class)}
			{...rest}
		>
			{local.children}
		</div>
	)
}

export { Accordion, AccordionContent, AccordionTrigger }
`

const accordionDemoCode = `import { Accordion } from "~/components/ui/accordion";

function AccordionDemo() {
	return (
		<div class="join join-vertical bg-base-100">
			<Accordion icon="arrow" variant="border" class="join-item" name="accordion-demo" open>
				<AccordionTrigger>What is HTML used for?</AccordionTrigger>
				<AccordionContent>HTML is the standard markup language for creating web pages and web applications.</AccordionContent>
			</Accordion>
			<Accordion icon="arrow" name="accordion-demo" open>
				<AccordionTrigger>What does CSS stand for?</AccordionTrigger>
				<AccordionContent>CSS stands for Cascading Style Sheets and it describes how HTML elements should be displayed.</AccordionContent>
			</Accordion>
			<Accordion icon="arrow" name="accordion-demo" open>
				<AccordionTrigger>Is JavaScript hard to learn?</AccordionTrigger>
				<AccordionContent>JavaScript is beginner-friendly and one of the most popular programming languages to start with.</AccordionContent>
			</Accordion>
		</div>
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

/* Define your own data this is for demo preposes */
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
		<DocPageLayout
			title="Accordion"
			description="Accordion is used for showing and hiding content but only one item can stay open at a time."
		>
			<Alert icon={<Info class="size-4" />}>
				<AlertDescription class="text-xs font-normal">
					Accordion uses the same style as the{" "}
					<A
						href="/components/collapse/"
						class="link"
					>
						collapse component
					</A>{" "}
					but it works with details elements. You can control which item to be
					open by setting the open attribute on details element.
				</AlertDescription>
			</Alert>

			<ComponentDemo
				code={accordionDemoCode}
				id="accordion"
				name="accordion"
				title="Accordion"
				preview={
					<div class="join join-vertical w-full">
						<For each={faqData}>
							{(item) => (
								<Accordion
									icon="plus"
									name="accordion-demo"
									class="item-join"
									variant="border"
									open
								>
									<AccordionTrigger>{item.title}</AccordionTrigger>
									<AccordionContent>{item.description}</AccordionContent>
								</Accordion>
							)}
						</For>
					</div>
				}
			/>
			<DocDivider />

			<ComponentCode name="accordion-install">
				<CodeBlock
					code={accordionComponentCode}
					language="tsx"
					expand
				/>
			</ComponentCode>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<ComponentDemo
					code={accordionSeparatedCode}
					id="soft-buttons"
					name="soft-buttons"
					title="Soft buttons"
					preview={
						<For each={faqData}>
							{(item) => (
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
					}
				/>
			</section>

			<PropsTable data={accordionProps} />
		</DocPageLayout>
	)
}
