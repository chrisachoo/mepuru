import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import { Button } from "~/components/ui/button"
import { Tooltip } from "~/components/ui/tooltip"

const tooltipComponentCode = `import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

export function Tooltip(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<div
			class={cn("tooltip", local.class)}
			{...rest}
		/>
	)
}
`

const tooltipUsageCode = `import { Tooltip } from "~/components/ui/tooltip"
import { Button } from "~/components/ui/button"

export function TooltipDemo() {
	return (
		<Tooltip class="tooltip-primary" data-tip="Saves your draft locally">
			<Button variant="outline">
				Save draft
			</Button>
		</Tooltip>
	)
}
`

const tooltipPlacementCode = `import { Tooltip } from "~/components/ui/tooltip"
import { Button } from "~/components/ui/button"

export function TooltipPlacementDemo() {
	return (
		<div class="flex flex-wrap items-center gap-6 py-2">
			<Tooltip class="tooltip-open tooltip-left" data-tip="Before">
				<Button variant="outline" size="sm">
					Left
				</Button>
			</Tooltip>
			<Tooltip class="tooltip-open tooltip-top" data-tip="Above">
				<Button variant="outline" size="sm">
					Top
				</Button>
			</Tooltip>
			<Tooltip class="tooltip-open tooltip-bottom" data-tip="Below">
				<Button variant="outline" size="sm">
					Bottom
				</Button>
			</Tooltip>
			<Tooltip class="tooltip-open tooltip-right" data-tip="After">
				<Button variant="outline" size="sm">
					Right
				</Button>
			</Tooltip>
		</div>
	)
}
`

const tooltipColorsCode = `import { Tooltip } from "~/components/ui/tooltip"
import { Button } from "~/components/ui/button"

export function TooltipColorsDemo() {
	return (
		<div class="flex flex-wrap items-center gap-3 py-2">
			<Tooltip class="tooltip-open tooltip-primary" data-tip="Primary">
				<Button variant="outline" size="sm">
					Primary
				</Button>
			</Tooltip>
			<Tooltip class="tooltip-open tooltip-secondary" data-tip="Secondary">
				<Button variant="outline" size="sm">
					Secondary
				</Button>
			</Tooltip>
			<Tooltip class="tooltip-open tooltip-accent" data-tip="Accent">
				<Button variant="outline" size="sm">
					Accent
				</Button>
			</Tooltip>
			<Tooltip class="tooltip-open tooltip-info" data-tip="Info">
				<Button variant="outline" size="sm">
					Info
				</Button>
			</Tooltip>
			<Tooltip class="tooltip-open tooltip-success" data-tip="Success">
				<Button variant="outline" size="sm">
					Success
				</Button>
			</Tooltip>
			<Tooltip class="tooltip-open tooltip-warning" data-tip="Warning">
				<Button variant="outline" size="sm">
					Warning
				</Button>
			</Tooltip>
			<Tooltip class="tooltip-open tooltip-error" data-tip="Error">
				<Button variant="outline" size="sm">
					Error
				</Button>
			</Tooltip>
		</div>
	)
}
`

const tooltipHint = (
	<p class="text-xs text-base-content/60">
		Pass the label text with daisyUI’s
		{" "}
		<InlineCode>data-tip</InlineCode>
		{" "}
		attribute on the wrapper. Add placement (
		<InlineCode>tooltip-top</InlineCode>
		, …), color (
		<InlineCode>tooltip-primary</InlineCode>
		, …), or
		{" "}
		<InlineCode>tooltip-open</InlineCode>
		{" "}
		for docs demos via
		{" "}
		<InlineCode>class</InlineCode>
		. Wrap a focusable trigger (for example a
		{" "}
		<InlineCode>button</InlineCode>
		) so keyboard users can reach the control.
	</p>
)

export default function TooltipPage() {
	return (
		<PageLayout
			description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
			sourceCode={tooltipComponentCode}
			sourceFilePath="src/components/ui/tooltip.tsx"
			title="Tooltip"
		>
			<ComponentShowcase
				code={tooltipUsageCode}
				id="tooltip-usage"
				name="tooltip-usage"
				title="Usage"
				preview={(
					<div class="pt-8">
						<Tooltip class="tooltip-primary" data-tip="Saves your draft locally">
							<Button variant="outline">
								Save draft
							</Button>
						</Tooltip>
					</div>
				)}
			>
				The trigger stays in the light DOM; the wrapper supplies
				{" "}
				<InlineCode>tooltip</InlineCode>
				{" "}
				plus any daisyUI modifiers you need.
			</ComponentShowcase>

			<DocSectionDivider />

			<ComponentInstallationTabs cliComponent="tooltip" name="tooltip-install">
				<ArticleCodeBlock
					code={tooltipComponentCode}
					expand
					language="tsx"
					name="components/ui/tooltip.tsx"
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={tooltipPlacementCode}
					id="tooltip-placement"
					name="tooltip-placement"
					title="Placement"
					preview={(
						<div class="flex flex-wrap items-center gap-6 py-8">
							<Tooltip class="tooltip-open tooltip-left" data-tip="Before">
								<Button variant="outline" size="sm">
									Left
								</Button>
							</Tooltip>
							<Tooltip class="tooltip-open tooltip-top" data-tip="Above">
								<Button variant="outline" size="sm">
									Top
								</Button>
							</Tooltip>
							<Tooltip class="tooltip-open tooltip-bottom" data-tip="Below">
								<Button variant="outline" size="sm">
									Bottom
								</Button>
							</Tooltip>
							<Tooltip class="tooltip-open tooltip-right" data-tip="After">
								<Button variant="outline" size="sm">
									Right
								</Button>
							</Tooltip>
						</div>
					)}
				/>

				<ComponentShowcase
					code={tooltipColorsCode}
					id="tooltip-colors"
					name="tooltip-colors"
					title="Colors"
					preview={(
						<div class="flex flex-wrap items-center gap-3 pt-10 pb-2">
							<Tooltip class="tooltip-open tooltip-primary" data-tip="Primary">
								<Button variant="outline" size="sm">
									Primary
								</Button>
							</Tooltip>
							<Tooltip class="tooltip-open tooltip-secondary" data-tip="Secondary">
								<Button variant="outline" size="sm">
									Secondary
								</Button>
							</Tooltip>
							<Tooltip class="tooltip-open tooltip-accent" data-tip="Accent">
								<Button variant="outline" size="sm">
									Accent
								</Button>
							</Tooltip>
							<Tooltip class="tooltip-open tooltip-info" data-tip="Info">
								<Button variant="outline" size="sm">
									Info
								</Button>
							</Tooltip>
							<Tooltip class="tooltip-open tooltip-success" data-tip="Success">
								<Button variant="outline" size="sm">
									Success
								</Button>
							</Tooltip>
							<Tooltip class="tooltip-open tooltip-warning" data-tip="Warning">
								<Button variant="outline" size="sm">
									Warning
								</Button>
							</Tooltip>
							<Tooltip class="tooltip-open tooltip-error" data-tip="Error">
								<Button variant="outline" size="sm">
									Error
								</Button>
							</Tooltip>
						</div>
					)}
				/>
			</section>

			<DocSectionDivider />

			<PropsTable
				daisyHref="https://daisyui.com/components/tooltip/"
				data={[
					{
						description: "Tooltip text (daisyUI data attribute)",
						prop: "data-tip",
						type: "string"
					},
					{
						description: "Placement, color, tooltip-open, and other daisyUI / Tailwind classes",
						prop: "class",
						type: "string"
					},
					{
						description: "Native div attributes and event handlers",
						prop: "...rest",
						type: "HTMLDivAttributes"
					}
				]}
			>
				{tooltipHint}
			</PropsTable>
		</PageLayout>
	)
}
