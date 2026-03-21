import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import { Input } from "~/components/ui/input"

const inputComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const inputVariants = cva("input", {
  defaultVariants: {
    size: "md"
  },
  variants: {
    size: {
      lg: "input-lg",
      md: "input-md",
      sm: "input-sm",
      xl: "input-xl",
      xs: "input-xs"
    }
  }
})

export type InputProps = JSX.IntrinsicElements["input"] & {
  class?: string
  error?: boolean
} & VariantProps<typeof inputVariants>

function Input(props: InputProps) {
  const [local, rest] = splitProps(props, ["class", "error", "type", "size"])

  return (
    <input
      class={cn(
        inputVariants({ size: local.size }),
        local.error && "input-error",
        local.class
      )}
      aria-invalid={local.error ?? undefined}
      {...rest}
    />
  )
}

export { Input }
`

const inputUsageCode = `import { Input } from "~/components/ui/input"

function FormComponent() {
  return (
    <form class="flex flex-col gap-3 w-full">
      <Input type="email" placeholder="Email address" />
			<Input error placeholder="Input with error state" />
    </form>
  )
}`

const inputSizesCode = `import { Input } from "~/components/ui/input"

export function InputSizesDemo() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Input size="sm" placeholder="Small" />
      <Input placeholder="Default" />
      <Input size="lg" placeholder="Large" />
    </div>
  )
}`

const inputHint = (
	<p class="text-xs text-base-content/60">
		Input forwards all native input attributes such as
		{" "}
		<InlineCode>placeholder</InlineCode>
		,
		<InlineCode>type</InlineCode>
		, and
		{" "}
		<InlineCode>value</InlineCode>
		.
	</p>
)

export default function InputPage() {
	return (
		<PageLayout
			title="Input"
			description="Native <input> with HTML semantics (styled with daisyUI). Supports sizes and error states; when `error` is enabled it sets aria-invalid per MDN ARIA (native HTML first, minimal abstraction)."
			sourceCode={inputComponentCode}
			sourceFilePath="src/components/ui/input.tsx"
		>
			<ComponentShowcase
				code={inputUsageCode}
				id="usage"
				name="input-usage-demo"
				title="Usage"
				preview={(
					<form class="flex w-full max-w-sm flex-col space-y-2">
						<Input
							type="email"
							placeholder="Email address"
						/>
						<Input
							error
							placeholder="Input with error state"
						/>
					</form>
				)}
			>
				Import the component and pass any native input attributes. See how it
				works with different types and states.
			</ComponentShowcase>

			<DocSectionDivider />

			<ComponentInstallationTabs name="input-install">
				<ArticleCodeBlock
					code={inputComponentCode}
					language="tsx"
					name="components/ui/input.tsx"
					expand
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={inputSizesCode}
					id="input-sizes"
					name="input-sizes-demo"
					title="Input sizes"
					preview={(
						<div class="flex w-full max-w-sm flex-wrap items-center gap-3">
							<Input
								size="sm"
								placeholder="Small input"
							/>
							<Input placeholder="Default input" />
							<Input
								error
								placeholder="Input with error state"
							/>
							<Input
								size="lg"
								placeholder="Large input"
							/>
						</div>
					)}
				/>
			</section>

			<DocSectionDivider />

			<PropsTable
				data={[
					{
						default: "md",
						description: "Controls the input size",
						prop: "size",
						type: `"xs" | "sm" | "md" | "lg" | "xl"`
					},
					{
						description: "Additional CSS classes",
						prop: "class",
						type: "string"
					},
					{
						default: "false",
						description:
							"Applies error styling and sets aria-invalid (MDN ARIA)",
						prop: "error",
						type: "boolean"
					},
					{
						description: "All native input attributes",
						prop: "...rest",
						type: "HTMLInputAttributes"
					}
				]}
				daisyHref="https://daisyui.com/components/input/"
			>
				{inputHint}
			</PropsTable>
		</PageLayout>
	)
}
