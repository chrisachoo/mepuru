import { createSignal } from "solid-js"
import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import { Tabs } from "~/components/ui/tabs"

const tabsComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"

import { cva } from "class-variance-authority"
import { For } from "solid-js"
import { cn } from "~/lib/cn"

const tabsVariants = cva("tabs", {
	defaultVariants: {
		size: "md",
		variant: "lift"
	},
	variants: {
		size: {
			large: "tabs-lg",
			md: "tabs-md",
			sm: "tabs-sm",
			xl: "tabs-xl",
			xs: "tabs-xs"
		},
		variant: {
			border: "tabs-border",
			box: "tabs-box",
			lift: "tabs-lift"
		}
	}
})

type TabItem = {
	value: string
	label: string
	content: JSX.Element
}

type TabsProps = {
	name: string
	tabs: TabItem[]
	value: string
	onChange: (value: string) => void
	class?: string
} & VariantProps<typeof tabsVariants>

export function Tabs(props: Readonly<TabsProps>) {
	return (
		<div
			class={cn(
				tabsVariants({ size: props.size, variant: props.variant }),
				props.class
			)}
			role="tablist"
		>
			<For each={[...props.tabs]}>
				{(tab) => (
					<>
						<input
							type="radio"
							name={props.name}
							value={tab.value}
							aria-label={tab.label}
							checked={props.value === tab.value}
							onInput={() => props.onChange(tab.value)}
							class="tab"
							role="tab"
						/>
						<div
							class="tab-content rounded-b-lg border border-t-0 border-base-300 bg-base-100 p-4"
							role="tabpanel"
						>
							{tab.content}
						</div>
					</>
				)}
			</For>
		</div>
	)
}
`

const tabsUsageCode = `import { createSignal } from "solid-js"
import { Tabs } from "~/components/ui/tabs"

export function TabsDemo() {
	const [tab, setTab] = createSignal("general")
	return (
		<Tabs
			name="settings-panel"
			value={tab()}
			onChange={setTab}
			tabs={[
				{
					value: "general",
					label: "General",
					content: <p class="text-sm">General preferences for your workspace.</p>
				},
				{
					value: "security",
					label: "Security",
					content: <p class="text-sm">Password, sessions, and two-factor options.</p>
				},
				{
					value: "billing",
					label: "Billing",
					content: <p class="text-sm">Plans, invoices, and payment methods.</p>
				}
			]}
		/>
	)
}
`

const tabsVariantsCode = `import { createSignal } from "solid-js"
import { Tabs } from "~/components/ui/tabs"

const panels = [
	{
		value: "a",
		label: "Tab A",
		content: <p class="text-sm">Box style tabs.</p>
	},
	{
		value: "b",
		label: "Tab B",
		content: <p class="text-sm">Content for tab B.</p>
	}
]

export function TabsVariantsDemo() {
	const [box, setBox] = createSignal("a")
	const [border, setBorder] = createSignal("a")
	const [lift, setLift] = createSignal("a")
	return (
		<div class="flex flex-col gap-8">
			<Tabs name="demo-box" variant="box" value={box()} onChange={setBox} tabs={panels} />
			<Tabs name="demo-border" variant="border" value={border()} onChange={setBorder} tabs={panels} />
			<Tabs name="demo-lift" variant="lift" value={lift()} onChange={setLift} tabs={panels} />
		</div>
	)
}
`

const tabsSizesCode = `import { createSignal } from "solid-js"
import { Tabs } from "~/components/ui/tabs"

const panels = [
	{ value: "1", label: "One", content: <p class="text-sm">First panel.</p> },
	{ value: "2", label: "Two", content: <p class="text-sm">Second panel.</p> }
]

export function TabsSizesDemo() {
	const [xs, setXs] = createSignal("1")
	const [md, setMd] = createSignal("1")
	const [xl, setXl] = createSignal("1")
	return (
		<div class="flex flex-col gap-6">
			<Tabs name="sz-xs" size="xs" value={xs()} onChange={setXs} tabs={panels} />
			<Tabs name="sz-md" size="md" value={md()} onChange={setMd} tabs={panels} />
			<Tabs name="sz-xl" size="xl" value={xl()} onChange={setXl} tabs={panels} />
		</div>
	)
}
`

const tabsHint = (
	<p class="text-xs text-base-content/60">
		Each
		{" "}
		<InlineCode>Tabs</InlineCode>
		{" "}
		instance must use a unique
		{" "}
		<InlineCode>name</InlineCode>
		{" "}
		so the underlying radio group does not clash with others on the page (see
		{" "}
		<a
			class="link link-primary"
			href="https://daisyui.com/components/tab/"
			rel="noreferrer"
			target="_blank"
		>
			daisyUI tabs
		</a>
		). Pair
		{" "}
		<InlineCode>value</InlineCode>
		{" "}
		and
		{" "}
		<InlineCode>onChange</InlineCode>
		{" "}
		for a controlled selected tab.
	</p>
)

function tabsDemoPanels() {
	return [
		{
			content: (
				<p class="text-sm text-base-content/80">
					General preferences for your workspace.
				</p>
			),
			label: "General",
			value: "general"
		},
		{
			content: (
				<p class="text-sm text-base-content/80">
					Password, sessions, and two-factor options.
				</p>
			),
			label: "Security",
			value: "security"
		},
		{
			content: (
				<p class="text-sm text-base-content/80">
					Plans, invoices, and payment methods.
				</p>
			),
			label: "Billing",
			value: "billing"
		}
	]
}

const twoPanelTabs = [
	{
		content: <p class="text-sm text-base-content/80">First panel content.</p>,
		label: "Tab A",
		value: "a"
	},
	{
		content: <p class="text-sm text-base-content/80">Second panel content.</p>,
		label: "Tab B",
		value: "b"
	}
]

export default function TabsPage() {
	const [usageTab, setUsageTab] = createSignal("general")
	const [boxTab, setBoxTab] = createSignal("a")
	const [borderTab, setBorderTab] = createSignal("a")
	const [liftTab, setLiftTab] = createSignal("a")
	const [xsTab, setXsTab] = createSignal("tabs-xs-1")
	const [mdTab, setMdTab] = createSignal("tabs-md-1")
	const [xlTab, setXlTab] = createSignal("tabs-xl-1")

	return (
		<PageLayout
			description="Tabbed navigation with panels. Uses daisyUI tab styles and native radio inputs so only one panel is selected at a time; pair with Solid signals for controlled state."
			sourceCode={tabsComponentCode}
			sourceFilePath="src/components/ui/tabs.tsx"
			title="Tabs"
		>
			<ComponentShowcase
				code={tabsUsageCode}
				id="tabs-usage"
				name="tabs-usage"
				title="Usage"
				preview={(
					<Tabs
						name="component-docs-tabs-usage"
						onChange={setUsageTab}
						tabs={tabsDemoPanels()}
						value={usageTab()}
						class="max-w-sm"
					/>
				)}
			>
				Render a list of
				{" "}
				<InlineCode>tabs</InlineCode>
				{" "}
				with labels and panel content. Clicking a tab updates selection via
				{" "}
				<InlineCode>onChange</InlineCode>
				.
			</ComponentShowcase>

			<DocSectionDivider />

			<ComponentInstallationTabs cliComponent="tabs" name="tabs-install">
				<ArticleCodeBlock
					code={tabsComponentCode}
					expand
					language="tsx"
					name="components/ui/tabs.tsx"
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={tabsVariantsCode}
					id="tabs-variants"
					name="tabs-variants"
					title="Style variants"
					preview={(
						<div class="flex w-full flex-col max-w-sm gap-8">
							<div class="space-y-2">
								<p class="text-xs font-medium text-base-content/60">tabs-box</p>
								<Tabs
									name="component-docs-tabs-box"
									onChange={setBoxTab}
									tabs={twoPanelTabs}
									value={boxTab()}
									variant="box"
								/>
							</div>
							<div class="space-y-2">
								<p class="text-xs font-medium text-base-content/60">tabs-border</p>
								<Tabs
									name="component-docs-tabs-border"
									onChange={setBorderTab}
									tabs={twoPanelTabs}
									value={borderTab()}
									variant="border"
								/>
							</div>
							<div class="space-y-2">
								<p class="text-xs font-medium text-base-content/60">tabs-lift (default)</p>
								<Tabs
									name="component-docs-tabs-lift"
									onChange={setLiftTab}
									tabs={twoPanelTabs}
									value={liftTab()}
									variant="lift"
								/>
							</div>
						</div>
					)}
				/>

				<ComponentShowcase
					code={tabsSizesCode}
					id="tabs-sizes"
					name="tabs-sizes"
					title="Sizes"
					preview={(
						<div class="flex w-full flex-col max-w-sm gap-6">
							<div class="space-y-2">
								<p class="text-xs font-medium text-base-content/60">tabs-xs</p>
								<Tabs
									name="component-docs-tabs-xs"
									onChange={setXsTab}
									size="xs"
									tabs={twoPanelTabs.map((t, i) => ({
										...t,
										label: i === 0 ? "One" : "Two",
										value: String(`tabs-xs-${i + 1}`)
									}))}
									value={xsTab()}
								/>
							</div>
							<div class="space-y-2">
								<p class="text-xs font-medium text-base-content/60">tabs-md (default)</p>
								<Tabs
									name="component-docs-tabs-md"
									onChange={setMdTab}
									size="md"
									tabs={twoPanelTabs.map((t, i) => ({
										...t,
										label: i === 0 ? "One" : "Two",
										value: String(`tabs-md-${i + 1}`)
									}))}
									value={mdTab()}
								/>
							</div>
							<div class="space-y-2">
								<p class="text-xs font-medium text-base-content/60">tabs-xl</p>
								<Tabs
									name="component-docs-tabs-xl"
									onChange={setXlTab}
									size="xl"
									tabs={twoPanelTabs.map((t, i) => ({
										...t,
										label: i === 0 ? "One" : "Two",
										value: String(`tabs-xl-${i + 1}`)
									}))}
									value={xlTab()}
								/>
							</div>
						</div>
					)}
				/>
			</section>

			<DocSectionDivider />

			<PropsTable
				daisyHref="https://daisyui.com/components/tab/"
				data={[
					{
						description: "Unique radio group name (required for multiple tab sets on one page)",
						prop: "name",
						type: "string"
					},
					{
						description: "Tab definitions: value, aria label, and panel content",
						prop: "tabs",
						type: "TabItem[]"
					},
					{
						description: "Value of the selected tab (must match a tab value)",
						prop: "value",
						type: "string"
					},
					{
						description: "Called when the user selects a different tab",
						prop: "onChange",
						type: "(value: string) => void"
					},
					{
						default: "lift",
						description: "daisyUI tab chrome: box, border, or lift",
						prop: "variant",
						type: `"box" | "border" | "lift"`
					},
					{
						default: "md",
						description: "Tab size (maps to tabs-xs … tabs-xl; large → tabs-lg)",
						prop: "size",
						type: `"xs" | "sm" | "md" | "large" | "xl"`
					},
					{
						description: "Extra classes on the tablist container",
						prop: "class",
						type: "string"
					}
				]}
			>
				{tabsHint}
			</PropsTable>
		</PageLayout>
	)
}
