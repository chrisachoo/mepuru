import { A } from "@solidjs/router"
import { Info } from "lucide-solid"
import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import { Alert, AlertDescription } from "~/components/ui/alert"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Collapse, CollapseContent, CollapseTrigger } from "~/components/ui/collapse"

const collapseComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const collapseVariant = cva("collapse", {
	defaultVariants: {
		variant: "border"
	},
	variants: {
		icon: {
			arrow: "collapse-arrow",
			plus: "collapse-plus"
		},
		variant: {
			border: "bg-base-100 border-base-300 border"
		}
	}
})

type CollapseProps = JSX.IntrinsicElements["details"] &
	VariantProps<typeof collapseVariant>

function Collapse(props: Readonly<CollapseProps>) {
	const [local, rest] = splitProps(props, [
		"class",
		"icon",
		"variant",
		"children"
	])
	return (
		<details
			class={cn(
				collapseVariant({ icon: local.icon, variant: local.variant }),
				local.class
			)}
			{...rest}
		>
			{local.children}
		</details>
	)
}

function CollapseTrigger(props: Readonly<JSX.IntrinsicElements["summary"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])

	return (
		<summary
			class={cn("collapse-title", local.class)}
			{...rest}
		>
			{local.children}
		</summary>
	)
}

function CollapseContent(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])

	return (
		<div
			class={cn("collapse-content", local.class)}
			{...rest}
		>
			{local.children}
		</div>
	)
}

export { Collapse, CollapseContent, CollapseTrigger }
`

const collapseDemoCode = `import { Badge } from "~/components/ui/badge"
import { Collapse, CollapseContent, CollapseTrigger } from "~/components/ui/collapse"

	export function CollapsibleDemo() {
		return (
			<Collapse class="w-full max-w-md">
				<CollapseTrigger class="w-full pe-4">
					<div class="flex items-center justify-between w-full">

						<div class="flex flex-col items-start">
							<span class="text-xs text-muted-foreground">
								Order status
							</span>
							<span class="font-semibold text-base">
								Shipped
							</span>
						</div>

						<Badge variant="success" class="badge-soft badge-outline">
							In transit
						</Badge>
					</div>
				</CollapseTrigger>

				<CollapseContent class="flex flex-col gap-3">
					<div class="border-t border-base-300 text-sm">
						<p class="font-medium pt-2">Shipping address</p>
						<p class="text-muted-foreground text-xs mt-1">
							100 Market St, San Francisco
						</p>
					</div>

					<div class="border-t border-base-300 text-sm">
						<p class="font-medium pt-2">Items</p>
						<p class="text-muted-foreground text-xs mt-1">
							2× Studio Headphones
						</p>
					</div>

					<div class="border-t border-base-300 text-sm">
						<p class="font-medium pt-2">Estimated delivery</p>
						<p class="text-muted-foreground text-xs mt-1">
							Mar 28 – Mar 30
						</p>
					</div>
				</CollapseContent>
			</Collapse>
		)
	}
`

const basicCollapseExampleCode = `import { Collapse, CollapseContent, CollapseTrigger } from "~/components/ui/collapse"

export function BasicExample() {
  return (
		<Collapse icon="plus" class="w-full max-w-sm bg-primary">
			<CollapseTrigger class="font-semibold after:inset-s-5 after:end-auto pe-4 ps-12">How do I create an account?</CollapseTrigger>
			<CollapseContent class="flex flex-col items-start gap-2 text-sm">
				Click the "Sign Up" button in the top right corner and follow the registration process.
			</CollapseContent>
		</Collapse>
  )
}
`

const customCollapseExampleCode = `import { Collapse, CollapseContent, CollapseTrigger } from "~/components/ui/collapse"

export function CustomExample() {
  return (
		<Collapse icon="arrow" class="w-full max-w-sm">
			<CollapseTrigger>Product details</CollapseTrigger>
			<CollapseContent class="flex flex-col items-start gap-2 text-sm">
				<p>
					This panel can be expanded or collapsed to reveal additional
					content.
				</p>
				<div class="w-full card-actions justify-end">
					<Button size="sm" variant="primary">Learn More</Button>
				</div>
			</CollapseContent>
		</Collapse>
  )
}
`

const collapseProps = [
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

function CollapseAlert() {
	return (
		<Alert icon={<Info class="size-4" />}>
			<AlertDescription class="text-xs font-normal">
				Collapse uses the same style as the
				{" "}
				<A
					href="/components/accordion/"
					class="link"
				>
					accordion component
				</A>
				{" "}
				but it works with
				{" "}
				<InlineCode>details</InlineCode>
				{" "}
				and
				{" "}
				<InlineCode>summary</InlineCode>
				{" "}
				tag. You can control which item to be open by setting the open attribute on details element.
			</AlertDescription>
		</Alert>
	)
}

export default function CollapsePage() {
	return (
		<PageLayout
			title="Collapse"
			description="Collapse is used for showing and hiding content."
		>
			<CollapseAlert />

			<ComponentShowcase
				code={collapseDemoCode}
				id="collapse"
				name="collapse"
				preview={(
					<Collapse class="w-full max-w-sm">
						<CollapseTrigger class="w-full pe-4">
							<div class="flex items-center justify-between w-full">

								<div class="flex flex-col items-start">
									<span class="text-xs text-muted-foreground">
										Order status
									</span>
									<span class="font-semibold text-base">
										Shipped
									</span>
								</div>

								<Badge variant="success" class="badge-soft badge-outline">
									In transit
								</Badge>
							</div>
						</CollapseTrigger>

						<CollapseContent class="flex flex-col gap-3">

							<div class="border-t border-base-300 text-sm">
								<p class="font-medium pt-2">Shipping address</p>
								<p class="text-muted-foreground text-xs mt-1">
									100 Market St, San Francisco
								</p>
							</div>

							<div class="border-t border-base-300 text-sm">
								<p class="font-medium pt-2">Items</p>
								<p class="text-muted-foreground text-xs mt-1">
									2× Studio Headphones
								</p>
							</div>

							<div class="border-t border-base-300 text-sm">
								<p class="font-medium pt-2">Estimated delivery</p>
								<p class="text-muted-foreground text-xs mt-1">
									Mar 28 – Mar 30
								</p>
							</div>
						</CollapseContent>
					</Collapse>
				)}
			/>

			<DocSectionDivider />

			<ComponentInstallationTabs
				cliComponent="checkbox"
				name="checkbox-install"
			>
				<ArticleCodeBlock
					code={collapseComponentCode}
					language="tsx"
					name="components/ui/collapse.tsx"
					expand
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={basicCollapseExampleCode}
					id="basic-collapse-with-arrow-icon"
					name="basic-collapse-with-arrow-icon"
					title="Moving collapse icon to the start"
					preview={(
						<Collapse icon="plus" class="w-full max-w-sm bg-primary">
							<CollapseTrigger class="font-semibold after:inset-s-5 after:end-auto pe-4 ps-12">How do I create an account?</CollapseTrigger>
							<CollapseContent class="flex flex-col items-start gap-2 text-sm">
								Click the "Sign Up" button in the top right corner and follow the registration process.
							</CollapseContent>
						</Collapse>
					)}
				/>

				<ComponentShowcase
					code={customCollapseExampleCode}
					id="with-arrow-icon"
					name="with-arrow-icon"
					title="With arrow icon"
					preview={(
						<Collapse icon="arrow" class="w-full max-w-sm">
							<CollapseTrigger>Product details</CollapseTrigger>
							<CollapseContent class="flex flex-col items-start gap-2 text-sm">
								<p>
									This panel can be expanded or collapsed to reveal additional
									content.
								</p>
								<div class="w-full card-actions justify-end">
									<Button size="sm" variant="primary">Learn More</Button>
								</div>
							</CollapseContent>
						</Collapse>
					)}
				/>

			</section>

			<DocSectionDivider />

			<PropsTable
				data={collapseProps}
				daisyHref="https://daisyui.com/components/collapse/"
			/>
		</PageLayout>
	)
}
