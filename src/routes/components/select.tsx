import { ComponentCode } from "~/components/docs/component-code"
import { ComponentDemo } from "~/components/docs/component-demo"
import { DocDivider } from "~/components/docs/doc-divider"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { CodeBlock } from "~/components/layout/code-block"
import { Select } from "~/components/ui/select"

const selectComponentCode = `import type { JSX } from "solid-js"
import { For, splitProps } from "solid-js"
import { cn } from "~/lib/cn"

export type SelectProps = JSX.IntrinsicElements["select"] & {
  class?: string
  error?: boolean
  options: Array<{ value: string; label: string }>
}

function Select(props: SelectProps) {
  const [local, rest] = splitProps(props, [
    "class",
    "error",
    "options",
    "children"
  ])

  return (
    <select
      class={cn(
        "select-bordered select w-full rounded-lg focus:outline focus:outline-2 focus:outline-offset-2",
        local.error && "select-error",
        local.class
      )}
      aria-invalid={local.error ?? undefined}
      {...rest}
    >
      {local.children}
      <For each={local.options}>
        {(opt) => <option value={opt.value}>{opt.label}</option>}
      </For>
    </select>
  )
}

export { Select }
`

const selectUsageCode = `import { Select } from "~/components/ui/select"

export function SelectDemo() {
  const options = [
    { value: "", label: "Choose one" },
    { value: "a", label: "Option A" },
    { value: "b", label: "Option B" }
  ]
  return (
    <Select options={options} class="max-w-xs">
      <option value="">Choose one</option>
    </Select>
  )
}
`

const selectWithErrorCode = `import { Select } from "~/components/ui/select"

export function SelectErrorDemo() {
  const options = [
    { value: "", label: "Pick one" },
    { value: "1", label: "One" },
    { value: "2", label: "Two" }
  ]
  return (
    <Select options={options} error class="max-w-xs" aria-label="Choose option">
      <option value="">Pick one</option>
    </Select>
  )
}
`

const selectProps = [
	{
		description: "Options rendered as <option> (value + label)",
		prop: "options",
		type: "Array<{ value: string; label: string }>"
	},
	{
		default: "false",
		description: "Error styling and aria-invalid",
		prop: "error",
		type: "boolean"
	},
	{ description: "Additional CSS classes", prop: "class", type: "string" },
	{
		description: "Native select attributes (name, disabled, etc.)",
		prop: "...rest",
		type: "JSX.IntrinsicElements['select']"
	}
]

export default function SelectPage() {
	return (
		<DocPageLayout
			title="Select"
			description="Native select element styled with daisyUI. Pass an options array and optional error state; supports all native select attributes and keyboard navigation."
			sourceCode={selectComponentCode}
			sourceFilePath="src/components/ui/select.tsx"
		>
			<ComponentDemo
				code={selectUsageCode}
				id="usage"
				name="select-usage-demo"
				title="Usage"
				preview={
					<Select
						options={[
							{ value: "", label: "Choose one" },
							{ value: "a", label: "Option A" },
							{ value: "b", label: "Option B" }
						]}
						class="max-w-xs"
					>
						<option value="">Choose one</option>
					</Select>
				}
			>
				Create <InlineCode>src/components/ui/select.tsx</InlineCode> and paste
				the installation code. Pass <InlineCode>options</InlineCode>{" "}
				(value/label pairs) and use native <InlineCode>name</InlineCode>,{" "}
				<InlineCode>disabled</InlineCode>, etc.
			</ComponentDemo>

			<DocDivider />

			<section class="space-y-3">
				<h2 class="text-xl font-semibold text-base-content">Installation</h2>
				<p class="text-sm leading-relaxed text-base-content/80">
					Create <InlineCode>src/components/ui/select.tsx</InlineCode> and paste
					the code below.
				</p>
				<ComponentCode name="select-install">
					<CodeBlock
						code={selectComponentCode}
						language="tsx"
						expand
					/>
				</ComponentCode>
			</section>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<ComponentDemo
					code={selectWithErrorCode}
					id="select-error"
					name="select-error-demo"
					title="Error state"
					preview={
						<Select
							options={[
								{ value: "", label: "Pick one" },
								{ value: "1", label: "One" },
								{ value: "2", label: "Two" }
							]}
							error
							class="max-w-xs"
							aria-label="Choose option"
						>
							<option value="">Pick one</option>
						</Select>
					}
				/>
			</section>

			<DocDivider />

			<PropsTable data={selectProps}>
				<p class="mt-2 text-xs text-base-content/60">
					Use <InlineCode>aria-label</InlineCode> or a visible label for
					accessibility when the select is not wrapped in a fieldset.
				</p>
			</PropsTable>
		</DocPageLayout>
	)
}
