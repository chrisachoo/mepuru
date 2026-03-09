import { CodePreviewTabs } from "~/components/docs/code-preview-tabs"
import { ComponentCode } from "~/components/docs/component-code"
import { DocDivider } from "~/components/docs/doc-divider"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { DocSection } from "~/components/docs/doc-section"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { CodeBlock } from "~/components/ui/code-block"
import { Dropdown, DropdownItem } from "~/components/ui/dropdown"

const dropdownComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const dropdownVariant = cva("dropdown space-y-1 space-x-1", {
	defaultVariants: {},
	variants: {
		align: {
			bottom: "dropdown-bottom",
			center: "dropdown-center",
			end: "dropdown-end",
			left: "dropdown-left",
			right: "dropdown-right",
			start: "dropdown-start",
			top: "dropdown-top"
		}
	}
})

type DropdownProps = {
	name: string
	class?: string
	children?: JSX.Element
} & VariantProps<typeof dropdownVariant> & JSX.IntrinsicElements["div"]

function Dropdown(props: DropdownProps) {
	const [local, rest] = splitProps(props, ["align", "class", "children", "name"])
	return (
		<div class={cn(dropdownVariant({ align: local.align }), local.class)} {...rest}>
			<div
				tabIndex={0}
				role="button"
				class="btn -1"
				aria-expanded="false"
				aria-haspopup="true"
			>
				{local.name}
			</div>

			<ul tabIndex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 min-w-52 p-2 shadow-sm">
				{local.children}
			</ul>
		</div>
	)
}

export type DropdownItemProps = JSX.IntrinsicElements["li"] & {
	class?: string
	onClick?: () => void
}

function DropdownItem(props: DropdownItemProps) {
	const [local, rest] = splitProps(props, ["class", "onClick", "children"])
	return (
		<li {...rest}>
			<a
				role="menuitem"
				href="#"
				class={cn("rounded-md", local.class)}
				onClick={(e) => {
					e.preventDefault()
					local.onClick?.()
					const trigger = e.currentTarget.closest(".dropdown")?.querySelector("[role=button]")
					if (trigger instanceof HTMLElement)
						trigger.focus()
				}}
			>
				{local.children}
			</a>
		</li>
	)
}

export { Dropdown, DropdownItem }
`

const dropdownAlignmentCode = `import { Dropdown, DropdownItem } from "~/components/ui/dropdown"

export function DropdownDemo() {
  return (
		<div class="flex items-center gap-4">
			<Dropdown align="start" name="Align start">
				<DropdownItem>Item 1</DropdownItem>
				<DropdownItem>Item 2</DropdownItem>
			</Dropdown>

			<Dropdown align="right" name="Align right">
				<DropdownItem>Item 1</DropdownItem>
				<DropdownItem>Item 2</DropdownItem>
			</Dropdown>
		</div>
  )
}
`

const dropdownDemoCode = `import { Dropdown, DropdownItem } from "~/components/ui/dropdown"

export function DropdownBasicDemo() {
  return (
    <Dropdown name="Open menu">
      <DropdownItem onClick={() => console.log("Item 1")}>Item 1</DropdownItem>
      <DropdownItem>Item 2</DropdownItem>
      <DropdownItem>Item 3</DropdownItem>
    </Dropdown>
  )
}`

const dropdownProps = [
	{ description: "Label for the trigger button", prop: "name", type: "string" },
	{
		description: "Menu alignment relative to trigger",
		prop: "align",
		type: `"bottom" | "center" | "end" | "left" | "right" | "start" | "top"`
	},
	{ description: "Additional CSS classes for the root", prop: "class", type: "string" },
	{ description: "Menu items (DropdownItem)", prop: "children", type: "JSX.Element" }
]

const dropdownItemHint = (
	<p class="text-base-content/60 text-xs mt-2 ">
		<strong>DropdownItem</strong>
		{" "}
		:
		<InlineCode>class</InlineCode>
		{" "}
		,
		<InlineCode>onClick</InlineCode>
		.
		{" "}
		Clicking an item runs onClick and focuses the trigger (dropdown closes via blur).
	</p>
)

export default function DropdownPage() {
	return (
		<DocPageLayout
			title="Dropdown"
			description="Opens a menu when the trigger is clicked. Uses daisyUI dropdown classes and CVA for alignment. Visibility is controlled by CSS (focus)."
			sourceCode={dropdownComponentCode}
			sourceFilePath="src/components/ui/dropdown.tsx"
		>
			<DocSection
				title="Usage"
				id="usage"
				description={(
					<span>
						Import
						{" "}
						<InlineCode>Dropdown</InlineCode>
						{" "}
						and
						{" "}
						<InlineCode>DropdownItem</InlineCode>
						. Pass a
						{" "}
						<InlineCode>name</InlineCode>
						{" "}
						for the trigger label and children (menu items).
					</span>
				)}
			>
				<CodePreviewTabs
					name="dropdown-usage-demo"
					code={dropdownDemoCode}
					preview={(
						<Dropdown name="Open menu">
							<DropdownItem onClick={() => console.log("Item 1")}>Item 1</DropdownItem>
							<DropdownItem>Item 2</DropdownItem>
							<DropdownItem>Item 3</DropdownItem>
						</Dropdown>
					)}
				/>
			</DocSection>

			<DocDivider />

			<ComponentCode name="dropdown-install">
				<CodeBlock
					title="src/components/ui/dropdown.tsx"
					code={dropdownComponentCode}
					language="tsx"
				/>
			</ComponentCode>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<DocSection
					title="Alignment"
					id="dropdown-alignment"
					description={(
						<span>
							Use
							{" "}
							<InlineCode>align</InlineCode>
							{" "}
							to align the menu to the start or end of the trigger.
						</span>
					)}
				>
					<CodePreviewTabs
						code={dropdownAlignmentCode}
						name="dropdown-alignment"
						preview={(
							<div class="flex items-center gap-4">
								<Dropdown align="start" name="Align start">
									<DropdownItem>Item 1</DropdownItem>
									<DropdownItem>Item 2</DropdownItem>
								</Dropdown>

								<Dropdown align="right" name="Align right">
									<DropdownItem>Item 1</DropdownItem>
									<DropdownItem>Item 2</DropdownItem>
								</Dropdown>
							</div>
						)}
					/>
				</DocSection>
			</section>

			<DocDivider />

			<PropsTable data={dropdownProps}>
				{dropdownItemHint}
			</PropsTable>
		</DocPageLayout>
	)
}
