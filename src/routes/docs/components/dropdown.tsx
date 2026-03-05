import { } from "~/components/ui/button"
import { CodeBlock } from "~/components/ui/code-block"
import { Dropdown, DropdownItem } from "~/components/ui/dropdown"
import { Tabs } from "~/components/ui/tabs"

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

const usageImportCode = `import { Dropdown, DropdownItem } from "~/components/ui/dropdown"
import { Button } from "~/components/ui/button"`

const usageExampleCode = `<Dropdown name="Open menu">
  <DropdownItem onClick={() => console.log("Item 1")}>Item 1</DropdownItem>
  <DropdownItem>Item 2</DropdownItem>
</Dropdown>`

export default function DropdownPage() {
	return (
		<main class="min-h-screen w-full bg-base-100 relative overflow-x-hidden bg-dot-grid">
			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="h-80 w-96 bg-primary/10 blur-3xl rounded-full mt-12 animate-pulse" />
			</div>

			<article class="relative mx-auto w-full max-w-4xl px-6 py-16">
				<div class="space-y-3 animate-fade-in">
					<h1 class="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
						Dropdown
					</h1>
					<p class="text-lg text-base-content/70 leading-relaxed">
						Opens a menu when the trigger is clicked. Uses daisyUI dropdown classes
						and CVA for alignment. Visibility is controlled by CSS (focus).
					</p>
				</div>

				<section class="mt-10 space-y-4">
					<h2 class="text-xl font-semibold text-base-content">Basic</h2>
					<div class="flex flex-wrap items-center gap-3 rounded-xl border border-base-300 bg-base-200/50 p-6">
						<Dropdown name="Open dropdown">
							<DropdownItem>Item 1</DropdownItem>
							<DropdownItem>Item 2</DropdownItem>
							<DropdownItem>Item 3</DropdownItem>
						</Dropdown>
					</div>

					<h2 class="text-xl font-semibold text-base-content mt-8">Alignment</h2>
					<p class="text-sm text-base-content/80">
						Use
						{" "}
						<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">align</code>
						{" "}
						to align the menu to the start or end of the trigger.
					</p>
					<div class="flex flex-wrap items-center gap-3 rounded-xl border border-base-300 bg-base-200/50 p-6">
						<Dropdown align="start" name="Align start">
							<DropdownItem>Item 1</DropdownItem>
							<DropdownItem>Item 2</DropdownItem>
						</Dropdown>
						<Dropdown align="right" name="Align right">
							<DropdownItem>Item 1</DropdownItem>
							<DropdownItem>Item 2</DropdownItem>
						</Dropdown>
					</div>
				</section>

				<div class="mt-10 h-px w-full max-w-2xl mx-auto bg-linear-to-r from-transparent via-primary/30 to-transparent" />

				<section class="mt-10 space-y-4">
					<h2 class="text-xl font-semibold text-base-content">Installation</h2>
					<Tabs
						name="dropdown-install"
						defaultValue="manual"
						tabs={[
							{
								content: (
									<div class="space-y-4">
										<p class="text-sm text-base-content/80">
											Copy the component from your project or the snippet below.
										</p>
										<CodeBlock
											title="src/components/ui/dropdown.tsx"
											code={dropdownComponentCode}
											language="tsx"
										/>
										<p class="text-sm text-base-content/80">
											You need
											{" "}
											<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">
												class-variance-authority
											</code>
											{" "}
											and
											{" "}
											<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">
												cn
											</code>
											{" "}
											(clsx + tailwind-merge). Update import paths (e.g.
											{" "}
											<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">
												~/lib/cn
											</code>
											) to match your project.
										</p>
									</div>
								),
								label: "Manual",
								value: "manual"
							},
							{
								content: (
									<div class="rounded-lg border border-base-300 bg-base-200/50 p-4">
										<p class="text-sm text-base-content/70">
											<span class="font-medium text-base-content">Coming soon.</span>
											{" "}
											Use the
											Manual tab to copy the component code until the CLI is available.
										</p>
									</div>
								),
								label: "CLI",
								value: "cli"
							}
						]}
					/>
				</section>

				<div class="mt-10 h-px w-full max-w-2xl mx-auto bg-linear-to-r from-transparent via-primary/30 to-transparent" />

				<section class="mt-10 space-y-4">
					<h2 class="text-xl font-semibold text-base-content">Usage</h2>
					<p class="text-base-content/80 text-sm leading-relaxed">
						Import
						{" "}
						<code class="rounded bg-base-300 px-1 py-0.5 font-mono text-xs">Dropdown</code>
						{" "}
						and
						{" "}
						<code class="rounded bg-base-300 px-1 py-0.5 font-mono text-xs">DropdownItem</code>
						. Pass a
						{" "}
						<code class="rounded bg-base-300 px-1 py-0.5 font-mono text-xs">trigger</code>
						{" "}
						(e.g. a
						Button) and children (menu items).
					</p>
					<CodeBlock title="Import" code={usageImportCode} language="tsx" />
					<CodeBlock title="Example" code={usageExampleCode} language="tsx" />
				</section>

				<div class="mt-10 h-px w-full max-w-2xl mx-auto bg-linear-to-r from-transparent via-primary/30 to-transparent" />

				<section class="mt-10 space-y-4">
					<h2 class="text-xl font-semibold text-base-content">Props</h2>
					<div class="overflow-x-auto rounded-xl border border-base-300">
						<table class="table table-pin-rows w-full text-sm">
							<thead>
								<tr class="border-base-300 bg-base-200/80">
									<th class="text-left font-semibold text-base-content">Prop</th>
									<th class="text-left font-semibold text-base-content">Type</th>
									<th class="text-left font-semibold text-base-content">Default</th>
									<th class="text-left font-semibold text-base-content">Description</th>
								</tr>
							</thead>
							<tbody>
								<tr class="border-base-300">
									<td class="font-mono text-primary">trigger</td>
									<td class="text-base-content/80">JSX.Element</td>
									<td class="text-base-content/60">—</td>
									<td class="text-base-content/80">Element that toggles the dropdown (focus opens)</td>
								</tr>
								<tr class="border-base-300">
									<td class="font-mono text-primary">align</td>
									<td class="text-base-content/80">"end" | "start"</td>
									<td class="text-base-content/60">start</td>
									<td class="text-base-content/80">Horizontal alignment of menu relative to trigger</td>
								</tr>
								<tr class="border-base-300">
									<td class="font-mono text-primary">class</td>
									<td class="text-base-content/80">string</td>
									<td class="text-base-content/60">—</td>
									<td class="text-base-content/80">Additional CSS classes for the root</td>
								</tr>
								<tr class="border-base-300">
									<td class="font-mono text-primary">open</td>
									<td class="text-base-content/80">boolean</td>
									<td class="text-base-content/60">—</td>
									<td class="text-base-content/80">Reserved for future controlled use</td>
								</tr>
								<tr class="border-base-300">
									<td class="font-mono text-primary">onOpenChange</td>
									<td class="text-base-content/80">(open: boolean) =&gt; void</td>
									<td class="text-base-content/60">—</td>
									<td class="text-base-content/80">Reserved for future controlled use</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p class="text-base-content/60 text-xs mt-2">
						<strong>DropdownItem</strong>
						:
						<code class="rounded bg-base-300 px-1 py-0.5 font-mono">class</code>
						,
						{" "}
						<code class="rounded bg-base-300 px-1 py-0.5 font-mono">onClick</code>
						. Clicking an item runs
						onClick and focuses the trigger (dropdown closes via blur).
					</p>
				</section>
			</article>
		</main>
	)
}
