import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import {
	FieldDescription,
	FieldLegend,
	Fieldset
} from "~/components/ui/fieldset"
import { Textarea } from "~/components/ui/textarea"

const textareaComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const textareaVariants = cva("textarea", {
	variants: {
		size: {
			lg: "textarea-lg",
			md: "textarea-md",
			sm: "textarea-sm",
			xl: "textarea-xl",
			xs: "textarea-xs"
		},
		variant: {
			accent: "textarea-accent",
			error: "textarea-error",
			info: "textarea-info",
			neutral: "textarea-neutral",
			primary: "textarea-primary",
			secondary: "textarea-secondary",
			success: "textarea-success",
			warning: "textarea-warning"
		}
	}
})

type TextareaProps = JSX.IntrinsicElements["textarea"]
	& VariantProps<typeof textareaVariants>

function Textarea(props: Readonly<TextareaProps>) {
	const [local, rest] = splitProps(props, ["class", "size", "variant"])

	return (
		<textarea
			class={cn(
				textareaVariants({ size: local.size, variant: local.variant }),
				local.class
			)}
			{...rest}
		/>
	)
}

export { Textarea }
`

const textareaUsageCode = `import { Textarea } from "~/components/ui/textarea"
import { FieldDescription, FieldLegend, Fieldset } from "~/components/ui/fieldset"

export function TextareaDemo() {
	return (
		<Fieldset class="fieldset w-full max-w-sm rounded-box border border-base-300 bg-base-100 p-4">
			<FieldLegend>Project notes</FieldLegend>
			<Textarea
				placeholder="Describe the change, risks, and rollout plan…"
				rows={4}
				class="w-full"
			/>
			<FieldDescription>
				Visible to everyone in the workspace.
			</FieldDescription>
		</Fieldset>
	)
}
`

const textareaSizesCode = `import { Textarea } from "~/components/ui/textarea"

export function TextareaSizesDemo() {
	return (
		<div class="flex w-full max-w-md flex-col gap-3">
			<Textarea size="xs" placeholder="Extra small" rows={2} />
			<Textarea size="sm" placeholder="Small" rows={2} />
			<Textarea size="md" placeholder="Medium" rows={2} />
			<Textarea size="lg" placeholder="Large" rows={2} />
			<Textarea size="xl" placeholder="Extra large" rows={2} />
		</div>
	)
}
`

const textareaVariantsCode = `import { Textarea } from "~/components/ui/textarea"

export function TextareaColorsDemo() {
	return (
		<div class="flex w-full max-w-md flex-col gap-3">
			<Textarea variant="primary" placeholder="Primary" rows={2} />
			<Textarea variant="secondary" placeholder="Secondary" rows={2} />
			<Textarea variant="accent" placeholder="Accent" rows={2} />
			<Textarea variant="neutral" placeholder="Neutral" rows={2} />
			<Textarea variant="info" placeholder="Info" rows={2} />
			<Textarea variant="success" placeholder="Success" rows={2} />
			<Textarea variant="warning" placeholder="Warning" rows={2} />
			<Textarea variant="error" placeholder="Error" rows={2} />
		</div>
	)
}
`

const textareaGhostCode = `import { Textarea } from "~/components/ui/textarea"

export function TextareaGhostDemo() {
	return (
		<Textarea
			class="textarea-ghost w-full max-w-md"
			placeholder="Borderless ghost style (daisyUI textarea-ghost)"
			rows={3}
		/>
	)
}
`

const textareaHint = (
	<p class="text-xs text-base-content/60">
		<InlineCode>Textarea</InlineCode>
		{" "}
		forwards all native attributes (
		<InlineCode>rows</InlineCode>
		,
		{" "}
		<InlineCode>placeholder</InlineCode>
		,
		{" "}
		<InlineCode>disabled</InlineCode>
		,
		{" "}
		<InlineCode>required</InlineCode>
		, etc.). For the borderless
		{" "}
		<InlineCode>textarea-ghost</InlineCode>
		{" "}
		style from daisyUI, add it via
		{" "}
		<InlineCode>class</InlineCode>
		.
	</p>
)

export default function TextareaPage() {
	return (
		<PageLayout
			description="Multi-line text field for longer input. Styled with daisyUI textarea classes; supports semantic color variants, sizes, and optional ghost style via utilities."
			sourceCode={textareaComponentCode}
			sourceFilePath="src/components/ui/textarea.tsx"
			title="Textarea"
		>
			<ComponentShowcase
				code={textareaUsageCode}
				id="textarea-usage"
				name="textarea-usage"
				title="Usage"
				preview={(
					<Fieldset class="fieldset w-full max-w-sm rounded-box border border-base-300 bg-base-100 p-4">
						<FieldLegend>Project notes</FieldLegend>
						<Textarea
							placeholder="Describe the change, risks, and rollout plan…"
							rows={4}
							class="w-full"
						/>
						<FieldDescription>
							Visible to everyone in the workspace.
						</FieldDescription>
					</Fieldset>
				)}
			>
				Use inside a
				{" "}
				<InlineCode>Fieldset</InlineCode>
				{" "}
				when the textarea belongs to a labeled group.
			</ComponentShowcase>

			<DocSectionDivider />

			<ComponentInstallationTabs cliComponent="textarea" name="textarea-install">
				<ArticleCodeBlock
					code={textareaComponentCode}
					expand
					language="tsx"
					name="components/ui/textarea.tsx"
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={textareaSizesCode}
					id="textarea-sizes"
					name="textarea-sizes"
					title="Sizes"
					preview={(
						<div class="flex w-full max-w-sm flex-col gap-3">
							<Textarea placeholder="Extra small" rows={2} size="xs" />
							<Textarea placeholder="Small" rows={2} size="sm" />
							<Textarea placeholder="Medium" rows={2} size="md" />
							<Textarea placeholder="Large" rows={2} size="lg" />
							<Textarea placeholder="Extra large" rows={2} size="xl" />
						</div>
					)}
				/>

				<ComponentShowcase
					code={textareaVariantsCode}
					id="textarea-variants"
					name="textarea-variants"
					title="Colors"
					preview={(
						<div class="flex w-full max-w-sm flex-col gap-3">
							<Textarea placeholder="Primary" rows={2} variant="primary" />
							<Textarea placeholder="Secondary" rows={2} variant="secondary" />
							<Textarea placeholder="Accent" rows={2} variant="accent" />
							<Textarea placeholder="Neutral" rows={2} variant="neutral" />
							<Textarea placeholder="Info" rows={2} variant="info" />
							<Textarea placeholder="Success" rows={2} variant="success" />
							<Textarea placeholder="Warning" rows={2} variant="warning" />
							<Textarea placeholder="Error" rows={2} variant="error" />
						</div>
					)}
				/>

				<ComponentShowcase
					code={textareaGhostCode}
					id="textarea-ghost"
					name="textarea-ghost"
					title="Ghost"
					preview={(
						<Textarea
							class="textarea-ghost w-full max-w-sm"
							placeholder="Borderless ghost style (daisyUI textarea-ghost)"
							rows={3}
						/>
					)}
				/>
			</section>

			<DocSectionDivider />

			<PropsTable
				daisyHref="https://daisyui.com/components/textarea/"
				data={[
					{
						description: "daisyUI semantic border and focus ring color",
						prop: "variant",
						type: `"primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error"`
					},
					{
						description: "Control height and padding scale",
						prop: "size",
						type: `"xs" | "sm" | "md" | "lg" | "xl"`
					},
					{
						description: "Additional CSS classes (e.g. textarea-ghost, max-w-*)",
						prop: "class",
						type: "string"
					},
					{
						description: "All native textarea attributes",
						prop: "...rest",
						type: "HTMLTextAreaAttributes"
					}
				]}
			>
				{textareaHint}
			</PropsTable>
		</PageLayout>
	)
}
