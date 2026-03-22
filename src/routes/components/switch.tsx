import { createSignal } from "solid-js"
import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import { FieldLabel } from "~/components/ui/fieldset"
import { Switch } from "~/components/ui/switch"

const toggleComponentCode = `import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

export function Switch(props: Readonly<JSX.IntrinsicElements["input"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<input
			type="checkbox"
			class={cn("toggle", local.class)}
			{...rest}
		/>
	)
}
`

const toggleUsageCode = `import { createSignal } from "solid-js"
import { FieldLabel } from "~/components/ui/fieldset"
import { Switch } from "~/components/ui/switch"

export function ToggleDemo() {
	const [on, setOn] = createSignal(false)
	return (
		<FieldLabel class="flex max-w-sm cursor-pointer items-center gap-3">
			<Switch
				checked={on()}
				onInput={(e) => setOn(e.currentTarget.checked)}
			/>
			<span class="text-sm">Send weekly digest</span>
		</FieldLabel>
	)
}
`

const toggleColorsCode = `import { Switch } from "~/components/ui/switch"

export function ToggleColorsDemo() {
	return (
		<div class="flex flex-wrap items-center gap-4">
			<Switch class="toggle-primary" checked />
			<Switch class="toggle-secondary" checked />
			<Switch class="toggle-accent" checked />
			<Switch class="toggle-neutral" checked />
			<Switch class="toggle-success" checked />
			<Switch class="toggle-warning" checked />
			<Switch class="toggle-info" checked />
			<Switch class="toggle-error" checked />
		</div>
	)
}
`

const toggleSizesCode = `import { Switch } from "~/components/ui/switch"

export function ToggleSizesDemo() {
	return (
		<div class="flex flex-wrap items-center gap-4">
			<Switch class="toggle-xs" checked />
			<Switch class="toggle-sm" checked />
			<Switch class="toggle-md" checked />
			<Switch class="toggle-lg" checked />
			<Switch class="toggle-xl" checked />
		</div>
	)
}
`

const toggleDisabledCode = `import { Switch } from "~/components/ui/switch"

export function ToggleDisabledDemo() {
	return (
		<div class="flex flex-wrap items-center gap-4">
			<Switch disabled />
			<Switch disabled checked />
		</div>
	)
}
`

const toggleHint = (
	<p class="text-xs text-base-content/60">
		This is a native checkbox with daisyUI
		{" "}
		<InlineCode>toggle</InlineCode>
		{" "}
		classes. Use
		{" "}
		<InlineCode>class</InlineCode>
		{" "}
		for daisyUI color and size modifiers (
		<InlineCode>toggle-primary</InlineCode>
		,
		{" "}
		<InlineCode>toggle-sm</InlineCode>
		, …). Prefer labeling with
		{" "}
		<InlineCode>FieldLabel</InlineCode>
		{" "}
		or an explicit
		{" "}
		<InlineCode>aria-label</InlineCode>
		.
	</p>
)

export default function TogglePage() {
	const [digestOn, setDigestOn] = createSignal(true)

	return (
		<PageLayout
			description="A control that allows the user to toggle between checked and not checked."
			sourceCode={toggleComponentCode}
			sourceFilePath="src/components/ui/switch.tsx"
			title="Switch"
		>
			<ComponentShowcase
				code={toggleUsageCode}
				id="toggle-usage"
				name="toggle-usage"
				title="Usage"
				preview={(
					<FieldLabel class="flex max-w-sm cursor-pointer items-center gap-3">
						<Switch
							checked={digestOn()}
							onInput={e => setDigestOn(e.currentTarget.checked)}
						/>
						<span class="text-sm">Send weekly digest</span>
					</FieldLabel>
				)}
			>
				Wire
				{" "}
				<InlineCode>checked</InlineCode>
				{" "}
				and
				{" "}
				<InlineCode>onInput</InlineCode>
				{" "}
				(or
				{" "}
				<InlineCode>onChange</InlineCode>
				) for controlled mode, or use
				{" "}
				<InlineCode>defaultChecked</InlineCode>
				{" "}
				for uncontrolled.
			</ComponentShowcase>

			<DocSectionDivider />

			<ComponentInstallationTabs cliComponent="switch" name="switch-install">
				<ArticleCodeBlock
					code={toggleComponentCode}
					expand
					language="tsx"
					name="components/ui/switch.tsx"
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={toggleColorsCode}
					id="toggle-colors"
					name="toggle-colors"
					title="Colors"
					preview={(
						<div class="flex flex-wrap items-center gap-4">
							<Switch checked class="toggle-primary" />
							<Switch checked class="toggle-secondary" />
							<Switch checked class="toggle-accent" />
							<Switch checked class="toggle-neutral" />
							<Switch checked class="toggle-success" />
							<Switch checked class="toggle-warning" />
							<Switch checked class="toggle-info" />
							<Switch checked class="toggle-error" />
						</div>
					)}
				/>

				<ComponentShowcase
					code={toggleSizesCode}
					id="toggle-sizes"
					name="toggle-sizes"
					title="Sizes"
					preview={(
						<div class="flex flex-wrap items-center gap-4">
							<Switch checked class="toggle-xs" />
							<Switch checked class="toggle-sm" />
							<Switch checked class="toggle-md" />
							<Switch checked class="toggle-lg" />
							<Switch checked class="toggle-xl" />
						</div>
					)}
				/>

				<ComponentShowcase
					code={toggleDisabledCode}
					id="toggle-disabled"
					name="toggle-disabled"
					title="Disabled"
					preview={(
						<div class="flex flex-wrap items-center gap-4">
							<Switch disabled />
							<Switch checked disabled />
						</div>
					)}
				/>
			</section>

			<DocSectionDivider />

			<PropsTable
				daisyHref="https://daisyui.com/components/toggle/"
				data={[
					{
						description: "daisyUI toggle color/size utilities (e.g. toggle-primary, toggle-sm)",
						prop: "class",
						type: "string"
					},
					{
						description: "All native checkbox input attributes",
						prop: "...rest",
						type: "HTMLInputAttributes (type checkbox)"
					}
				]}
			>
				{toggleHint}
			</PropsTable>
		</PageLayout>
	)
}
