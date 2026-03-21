import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import { Checkbox } from "~/components/ui/checkbox"
import { FieldGroup, FieldLabel, FieldLegend, Fieldset } from "~/components/ui/fieldset"

const checkboxComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const checkboxVariants = cva("checkbox", {
	variants: {
		size: {
			lg: "checkbox-lg",
			md: "checkbox-md",
			sm: "checkbox-sm",
			xl: "checkbox-xl",
			xs: "checkbox-xs"
		},
		variant: {
			accent: "checkbox-accent",
			error: "checkbox-error",
			info: "checkbox-info",
			neutral: "checkbox-neutral",
			primary: "checkbox-primary",
			secondary: "checkbox-secondary",
			success: "checkbox-success",
			warning: "checkbox-warning"
		}
	}
})

type CheckboxProps = JSX.IntrinsicElements["input"]
	& VariantProps<typeof checkboxVariants>

export function Checkbox(props: Readonly<CheckboxProps>) {
	const [local, rest] = splitProps(props, ["class", "size", "variant"])
	return (
		<input
			class={cn(checkboxVariants({ size: local.size, variant: local.variant }))}
			type="checkbox"
			{...rest}
		/>
	)
}
`

const checkboxDemoCode = `import { Checkbox } from "~/components/ui/checkbox"
import { FieldGroup, FieldLabel, FieldLegend, Fieldset } from "~/components/ui/fieldset"

export function CheckboxDemo() {
	return (
		<FieldGroup class="max-w-sm">
			<Fieldset class="fieldset bg-base-100 border-white rounded-box w-full border p-4">
				<FieldLegend>Notifications</FieldLegend>
				<FieldLabel>
					<Checkbox checked />
					Enable notifications
				</FieldLabel>
			</Fieldset>
		</FieldGroup>
	)
}
`

const checkboxSizesCode = `import { Checkbox } from "~/components/ui/checkbox"
	export function CheckboxSizes() {
		return (
			<div class="flex items-center gap-2">
				<Checkbox size="lg" checked />
				<Checkbox size="md" checked />
				<Checkbox size="sm" checked />
				<Checkbox size="xs" checked />
				<Checkbox size="xl" checked />
			</div>
		)
	}
`

const checkboxProps = [
	{
		description: "Checkbox variants",
		prop: "size",
		type: `"primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error"`
	},
	{
		description: "Badge custom sizes",
		prop: "size",
		type: `"xs" | "sm" | "md" | "lg" | "xl`
	},
	{
		description: "Additional CSS classes",
		prop: "class",
		type: "string"
	}
]

export default function CheckboxPage() {
	return (
		<PageLayout
			title="Checkbox"
			description="Native checkbox styled with daisyUI. Supports labels and indeterminate state."
			sourceCode={checkboxComponentCode}
			sourceFilePath="src/components/ui/checkbox.tsx"
		>
			<ComponentShowcase
				code={checkboxDemoCode}
				id="Checkbox"
				name="checkbox"
				preview={(
					<FieldGroup class="max-w-sm">
						<Fieldset class="fieldset bg-base-100 border-white rounded-box w-full border p-4">
							<FieldLegend>Notifications</FieldLegend>
							<FieldLabel>
								<Checkbox checked />
								Enable notifications
							</FieldLabel>
						</Fieldset>
					</FieldGroup>
				)}
			/>

			<DocSectionDivider />

			<ComponentInstallationTabs
				cliComponent="checkbox"
				name="checkbox-install"
			>
				<ArticleCodeBlock
					code={checkboxComponentCode}
					language="tsx"
					name="components/ui/card.tsx"
					expand
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={checkboxSizesCode}
					id="checkbox-color-variants"
					name="checkbox-color-variants"
					title="Variants"
					preview={(
						<div class="flex items-center gap-2">
							<Checkbox variant="primary" checked />
							<Checkbox variant="secondary" checked />
							<Checkbox variant="accent" checked />
							<Checkbox variant="neutral" checked />
							<Checkbox variant="info" checked />
							<Checkbox variant="success" checked />
							<Checkbox variant="destructive" checked />
						</div>
					)}
				/>

				<ComponentShowcase
					code={checkboxSizesCode}
					id="checkbox-sizes"
					name="checkbox-sizes"
					title="Sizes"
					preview={(
						<div class="flex items-center gap-2">
							<Checkbox size="xs" checked />
							<Checkbox size="sm" checked />
							<Checkbox size="md" checked />
							<Checkbox size="lg" checked />
							<Checkbox size="xl" checked />
						</div>
					)}
				/>

				<ComponentShowcase
					code={checkboxSizesCode}
					id="checkbox-disabled"
					name="checkbox-disabled"
					title="Disabled"
					preview={(
						<div class="flex items-center gap-2">
							<Checkbox disabled />
							<Checkbox disabled checked />
						</div>
					)}
				/>
			</section>

			<DocSectionDivider />

			<PropsTable
				data={checkboxProps}
				daisyHref="https://daisyui.com/components/checkbox/"
			/>
		</PageLayout>
	)
}
