import { For } from "solid-js"
import { ComponentCode } from "~/components/docs/component-code"
import { ComponentDemo } from "~/components/docs/component-demo"
import { DocDivider } from "~/components/docs/doc-divider"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { CodeBlock } from "~/components/layout/code-block"
import { FieldDescription, FieldLegend, Fieldset } from "~/components/ui/fieldset"
import { Select, SelectOption } from "~/components/ui/select"

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
        "select-bordered select w-full rounded-lg focus:outline-2 focus:outline-offset-2",
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

const selectUsageCode = `import { Select, SelectOption } from "~/components/ui/select"
import { For } from "solid-js"

export function SelectDemo() {
  return (
		<Select class="max-w-xs">
			<For each={[
				{ label: "Choose one", value: "" },
				{ label: "Option A", value: "a" },
				{ label: "Option B", value: "b" },
				{ label: "Option C", value: "c" }
			]}
			>
				{opt => <SelectOption value={opt.value}>{opt.label}</SelectOption>}
			</For>
		</Select>
	)
}
`

const selectWithRequiredCode = `import { Select, SelectOption } from "~/components/ui/select"
import { FieldDescription, FieldLegend, Fieldset } from "~/components/ui/fieldset"
import { For } from "solid-js"

export function SelectRequiredDemo() {
  return (
		<Fieldset>
			<FieldLegend>Pick an AI model</FieldLegend>
			<Select class="max-w-xs" aria-label="Choose option" required>
				<For each={[
					{ label: "Pick an AI model", value: "" },
					{ label: "GPT-4", value: "gpt-4" },
					{ label: "GPT-4o", value: "gpt-4o" },
					{ label: "GPT-4o-mini", value: "gpt-4o-mini" }
				]}
				>
					{opt => <SelectOption value={opt.value} disabled={opt.disabled}>{opt.label}</SelectOption>}
				</For>
			</Select>
			<FieldDescription>Pick an AI model from the list of options using the select component</FieldDescription>
		</Fieldset>
	)
}`

const selectWithErrorCode = `import { Select, SelectOption } from "~/components/ui/select"
import { For } from "solid-js"

export function SelectErrorDemo() {
  return (
		<Select aria-label="Choose option" class="max-w-xs" variant="destructive" value="gpt-4o">
			<For each={[
				{ disabled: true, label: "Pick an AI model", value: "" },
				{ label: "GPT-4", value: "gpt-4" },
				{ label: "GPT-4o", value: "gpt-4o" },
				{ label: "GPT-4o-mini", value: "gpt-4o-mini" }
			]}
			>
				{opt => <SelectOption value={opt.value} disabled={opt.disabled}>{opt.label}</SelectOption>}
			</For>
		</Select>
	)
}
`

const selectProps = [
	{
		description: "Additional CSS classes",
		prop: "class",
		type: "string"
	},
	{
		description: "Variant",
		prop: "variant",
		type: `"accent" | "destructive" | "info" | "neutral" | "primary" | "secondary" | "success" | "warning"`
	},
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
				preview={(
					<Select class="max-w-xs">
						<For each={[
							{ label: "Choose one", value: "" },
							{ label: "Option A", value: "a" },
							{ label: "Option B", value: "b" },
							{ label: "Option C", value: "c" }
						]}
						>
							{opt => <SelectOption value={opt.value}>{opt.label}</SelectOption>}
						</For>
					</Select>
				)}
			/>

			<DocDivider />

			<ComponentCode name="select-install">
				<CodeBlock
					code={selectComponentCode}
					language="tsx"
					name="components/ui/select.tsx"
					expand
				/>
			</ComponentCode>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<ComponentDemo
					code={selectWithRequiredCode}
					id="with-fieldset-and-labels"
					name="with-fieldset-and-labels"
					title="With fieldset and labels"
					preview={(
						<Fieldset>
							<FieldLegend>Pick an AI model</FieldLegend>
							<Select class="max-w-xs" aria-label="Choose option" value="" required>
								<For each={[
									{ label: "Pick an AI model", value: "" },
									{ label: "GPT-4", value: "gpt-4" },
									{ label: "GPT-4o", value: "gpt-4o" },
									{ label: "GPT-4o-mini", value: "gpt-4o-mini" }
								]}
								>
									{opt => <SelectOption value={opt.value}>{opt.label}</SelectOption>}
								</For>
							</Select>
							<FieldDescription>Pick an AI model from the list of options using the select component</FieldDescription>
						</Fieldset>
					)}
				/>

				<ComponentDemo
					code={selectWithErrorCode}
					id="select-error"
					name="select-error-demo"
					title="Error state"
					preview={(
						<Select aria-label="Choose option" class="max-w-xs" variant="destructive" value="gpt-4o">
							<For each={[
								{ disabled: true, label: "Pick an AI model", value: "" },
								{ label: "GPT-4", value: "gpt-4" },
								{ label: "GPT-4o", value: "gpt-4o" },
								{ label: "GPT-4o-mini", value: "gpt-4o-mini" }
							]}
							>
								{opt => <SelectOption value={opt.value} disabled={opt.disabled}>{opt.label}</SelectOption>}
							</For>
						</Select>
					)}
				/>
			</section>

			<DocDivider />

			<PropsTable data={selectProps} daisyHref="https://daisyui.com/components/select/">
				<p class="mt-2 text-xs text-base-content/60">
					Use
					{" "}
					<InlineCode>aria-label</InlineCode>
					{" "}
					or a visible label for
					accessibility when the select is not wrapped in a fieldset.
				</p>
			</PropsTable>
		</DocPageLayout>
	)
}
