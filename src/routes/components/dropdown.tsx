import { A } from "@solidjs/router"
import { ComponentCode } from "~/components/docs/component-code"
import { DocDivider } from "~/components/docs/doc-divider"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { ComponentShowcase } from "~/components/docs/showcase"
import { CodeBlock } from "~/components/layout/code-block"
import { PageLayout } from "~/components/layout/page-layout"
import {
	Dropdown,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "~/components/ui/dropdown"

const dropdownComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const dropdownVariant = cva("dropdown", {
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

type DropdownProps = JSX.IntrinsicElements["div"] & VariantProps<typeof dropdownVariant>

function Dropdown(props: DropdownProps) {
	const [local, rest] = splitProps(props, ["class", "align"])

	return (
		<div class={cn(dropdownVariant({ align: local.align }), local.class)} {...rest} />
	)
}

function DropdownMenuTrigger(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return <div class={cn("btn m-1", local.class)} role="button" tabindex="0" {...rest} />
}

function DropdownMenuContent(props: Readonly<JSX.IntrinsicElements["ul"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<ul
			class={cn(
				"menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm",
				local.class
			)}
			tabIndex="-1"
			{...rest}
		/>
	)
}

function DropdownMenuItem(props: Readonly<JSX.IntrinsicElements["li"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return <li class={cn(local.class)} {...rest} />
}

export { Dropdown, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger }
`

const dropdownAlignmentCode = `import { Dropdown, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown"

export function DropdownDemo() {
  return (
		<Dropdown>
			<DropdownMenuTrigger class="btn-soft>Open menu</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem><a href="#">Item 1</a></DropdownMenuItem>
				<DropdownMenuItem><a href="#">Item 2</a></DropdownMenuItem>
				<DropdownMenuItem><a href="#">Item 3</a></DropdownMenuItem>
			</DropdownMenuContent>
		</Dropdown>
  )
}
`

const dropdownDemoCode = `import { Dropdown, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown"

export function DropdownBasicDemo() {
  return (
		<div class="flex items-center gap-4">
			<Dropdown align="left">
				<DropdownMenuTrigger class="btn-soft>Align left</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem><a href="#">Item 1</a></DropdownMenuItem>
					<DropdownMenuItem><a href="#">Item 2</a></DropdownMenuItem>
					<DropdownMenuItem><a href="#">Item 3</a></DropdownMenuItem>
				</DropdownMenuContent>
			</Dropdown>

			<Dropdown align="right">
				<DropdownMenuTrigger class="btn-soft">Align right</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem><a href="#">Item 1</a></DropdownMenuItem>
					<DropdownMenuItem><a href="#">Item 2</a></DropdownMenuItem>
					<DropdownMenuItem><a href="#">Item 3</a></DropdownMenuItem>
				</DropdownMenuContent>
			</Dropdown>
		</div>
	)
}
`

const dropdownProps = [
	{ description: "Label for the trigger button", prop: "name", type: "string" },
	{
		description: "Menu alignment relative to trigger",
		prop: "align",
		type: `"bottom" | "center" | "end" | "left" | "right" | "start" | "top"`
	},
	{
		description: "Additional CSS classes for the root",
		prop: "class",
		type: "string"
	},
	{
		description: "Menu items (DropdownItem)",
		prop: "children",
		type: "JSX.Element"
	}
]

const dropdownItemHint = (
	<p class="mt-2 text-xs text-base-content/60">
		<strong>DropdownItem</strong>
		{" "}
		:
		<InlineCode>class</InlineCode>
		{" "}
		,
		<InlineCode>onClick</InlineCode>
		. Clicking an item runs onClick and focuses
		the trigger (dropdown closes via blur). Menu interaction guidance follows
		WAI-ARIA Authoring Practices.
	</p>
)

export default function DropdownPage() {
	return (
		<PageLayout
			title="Dropdown"
			description="Opens a menu when the trigger is activated (styled with daisyUI). Menu behavior should follow WAI-ARIA Authoring Practices, using MDN ARIA for the meaning of roles and attributes (native HTML first, minimal abstraction)."
			sourceCode={dropdownComponentCode}
			sourceFilePath="src/components/ui/dropdown.tsx"
		>
			<ComponentShowcase
				code={dropdownDemoCode}
				id="usage"
				name="dropdown-usage-demo"
				preview={(
					<Dropdown>
						<DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>
								<A href="#">Item 1</A>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<A href="#">Item 2</A>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<A href="#">Item 3</A>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</Dropdown>
				)}
			>
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
					for the trigger label and children (menu
					items).
				</span>
			</ComponentShowcase>

			<DocDivider />

			<ComponentCode name="dropdown-install">
				<CodeBlock
					code={dropdownComponentCode}
					language="tsx"
					name="components/ui/dropdown.tsx"
					expand
				/>
			</ComponentCode>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={dropdownAlignmentCode}
					id="dropdown-alignment"
					name="dropdown-alignment"
					title="Alignment"
					preview={(
						<div class="flex items-center gap-4">
							<Dropdown align="left">
								<DropdownMenuTrigger>Align left</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>
										<A href="#">Item 1</A>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<A href="#">Item 2</A>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<A href="#">Item 3</A>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</Dropdown>

							<Dropdown align="right">
								<DropdownMenuTrigger>Align right</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>
										<A href="#">Item 1</A>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<A href="#">Item 2</A>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<A href="#">Item 3</A>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</Dropdown>
						</div>
					)}
				>
					<span>
						Use
						{" "}
						<InlineCode>align</InlineCode>
						{" "}
						to align the menu to the start or
						end of the trigger.
					</span>
				</ComponentShowcase>
			</section>

			<DocDivider />

			<PropsTable
				data={dropdownProps}
				daisyHref="https://daisyui.com/components/dropdown/"
			>
				{dropdownItemHint}
			</PropsTable>
		</PageLayout>
	)
}
