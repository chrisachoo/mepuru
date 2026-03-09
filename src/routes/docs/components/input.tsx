import { CodePreviewTabs } from "~/components/docs/code-preview-tabs"
import { ComponentCode } from "~/components/docs/component-code"
import { ComponentDemo } from "~/components/docs/component-demo"
import { DocDivider } from "~/components/docs/doc-divider"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { DocSection } from "~/components/docs/doc-section"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { CodeBlock } from "~/components/ui/code-block"
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

const inputFormFieldCode = `import { Input } from "~/components/ui/input

function FormField() {

	return (
		<form class="grid space-y-4">
			<fieldset class="fieldset">
				<legend class="fieldset-legend capitalize">Username: </legend>
				<Input type="text" id="username" name="username" placeholder="Username" />
				<p class="label">Optional</p>
			</fieldset>

			<fieldset class="fieldset">
				<legend class="fieldset-legend capitalize">Password: </legend>
				<Input type="password" id="password" name="name" placeholder="Password" autocomplete="new-password" />
				<p class="label">Optional</p>
			</fieldset>
		</form>
	)
}
`

const inputHint = (
	<p class="text-base-content/60 text-xs">
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
		<DocPageLayout
			title="Input"
			description="A styled input component built with daisyUI. Supports multiple sizes and error states while keeping native HTML input behavior."
			sourceCode={inputComponentCode}
			sourceFilePath="src/components/ui/input.tsx"
		>
			<DocSection
				title="Usage"
				id="usage"
				description="Import the component and pass any native input attributes. See how it works with different types and states."
			>
				<CodePreviewTabs
					name="input-usage-demo"
					code={inputUsageCode}
					preview={(
						<form class="flex flex-col gap-3 w-full">
							<Input type="email" placeholder="Email address" />
							<Input error placeholder="Input with error state" />
						</form>
					)}
				/>
			</DocSection>

			<DocDivider />

			<ComponentCode name="input-install">
				<CodeBlock
					title="src/components/ui/input.tsx"
					code={inputComponentCode}
					language="tsx"
				/>
			</ComponentCode>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<ComponentDemo
					name="input-sizes-demo"
					href="#input-sizes"
					title="Input sizes"
					code={inputSizesCode}
					preview={(
						<div class="flex flex-wrap items-center gap-3">
							<Input size="sm" placeholder="Small input" />
							<Input placeholder="Default input" />
							<Input size="lg" placeholder="Large input" />
							<Input error placeholder="Input with error state" />
						</div>
					)}
				/>

				<ComponentDemo
					name="with-fieldset-and-fieldset-legend"
					href="#with-fieldset-and-fieldset-legend"
					title="With fieldset and fieldset-legend"
					code={inputFormFieldCode}
					preview={(
						<form class="grid space-y-4 w-full">
							<fieldset class="fieldset">
								<legend class="fieldset-legend capitalize">Username: </legend>
								<Input type="text" id="username" name="username" placeholder="Username" />
								<p class="label">Optional</p>
							</fieldset>

							<fieldset class="fieldset">
								<legend class="fieldset-legend capitalize">Password: </legend>
								<Input type="password" id="password" name="name" placeholder="Password" autocomplete="new-password" />
								<p class="label">Optional</p>
							</fieldset>
						</form>
					)}
				/>
			</section>

			<DocDivider />

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
						description: "Applies error styling and sets aria-invalid",
						prop: "error",
						type: "boolean"
					},
					{
						description: "All native input attributes",
						prop: "...rest",
						type: "HTMLInputAttributes"
					}
				]}
			>
				{inputHint}
			</PropsTable>
		</DocPageLayout>
	)
}
