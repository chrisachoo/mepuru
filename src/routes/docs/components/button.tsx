import { } from "@solidjs/router"
import { } from "lucide-solid"
import { createSignal } from "solid-js"
import { ComponentDemo } from "~/components/docs/component-demo"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { Button } from "~/components/ui/button"
import { CodeBlock } from "~/components/ui/code-block"
import { Tabs } from "~/components/ui/tabs"

const buttonComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const buttonVariants = cva("btn", {
  variants: {
    size: { lg: "btn-lg", sm: "btn-sm" },
    variant: {
      destructive: "btn-error",
      ghost: "btn-ghost",
      link: "btn-link",
      outline: "btn-outline",
      primary: "btn-primary",
    },
  },
})

type ButtonProps = {
  class?: string
} & VariantProps<typeof buttonVariants>

function Button<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps>
) {
  const [local, rest] = splitProps(props, ["variant", "size", "class", "children"])
  return (
    <button
      class={cn(
        buttonVariants({ size: local.size, variant: local.variant }),
        local.class
      )}
      {...rest}
    >
      {local.children}
    </button>
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
`

/** Full usage example: import + demo (copyable as-is). */
const usageExampleCode = `import { Button } from "~/components/ui/button"

export function ButtonDemo() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`

/** Sizes demo: full snippet from import. */
const usageSizesCode = `import { Button } from "~/components/ui/button"

export function ButtonSizesDemo() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`

export default function ButtonPage() {
	const [installTab, setInstallTab] = createSignal("manual")

	return (
		<DocPageLayout
			title="Button"
			description="Displays a button with variants and sizes. Built with daisyUI and class-variance-authority."
			sourceCode={buttonComponentCode}
			sourceFilePath="src/components/ui/button.tsx"
		>
			<section class="mt-10 space-y-8">
				<ComponentDemo
					name="button-variants-demo"
					href="#button-variants"
					title="Button variants"
					code={usageExampleCode}
					preview={(
						<div class="flex flex-wrap items-center gap-3">
							<Button variant="primary">Primary</Button>
							<Button variant="outline">Outline</Button>
							<Button variant="destructive">Destructive</Button>
							<Button variant="ghost">Ghost</Button>
							<Button variant="link">Link</Button>
						</div>
					)}
				/>

				<ComponentDemo
					name="button-sizes-demo"
					href="#buttons-sizes"
					title="Button sizes"
					code={usageSizesCode}
					preview={(
						<div class="flex flex-wrap items-center gap-3">
							<Button size="sm">Small</Button>
							<Button>Default</Button>
							<Button size="lg">Large</Button>
						</div>
					)}
				/>
			</section>

			<div class="mt-10 h-px w-full max-w-2xl mx-auto bg-linear-to-r from-transparent via-primary/30 to-transparent" />

			<section class="mt-10 space-y-4">
				<h2 class="text-xl font-semibold text-base-content">Installation</h2>
				<Tabs
					name="button-install"
					value={installTab()}
					onChange={setInstallTab}
					tabs={[
						{
							content: (
								<div class="space-y-4">
									<p class="text-sm text-base-content/80">
										Copy and paste the following code into your project.
									</p>
									<CodeBlock
										title="src/components/ui/button.tsx"
										code={buttonComponentCode}
										language="tsx"
									/>
									<p class="text-sm text-base-content/80">
										Update the import paths to match your project (e.g.
										{" "}
										<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">
											~/lib/cn
										</code>
										,
										{" "}
										<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">
											~/lib/polymorphic
										</code>
										). You also need
										{" "}
										<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">
											class-variance-authority
										</code>
										{" "}
										and
										{" "}
										<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">
											clsx
										</code>
										{" "}
										+
										{" "}
										<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">
											tailwind-merge
										</code>
										{" "}
										for
										{" "}
										<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-xs">cn</code>
										.
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
										Use the Manual tab to copy the component code until the CLI is available.
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
					Import the component and use it with variant and size props. Copy the example below to get started.
				</p>
				<CodeBlock
					title="Example"
					code={usageExampleCode}
					language="tsx"
				/>
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
								<td class="font-mono text-primary">variant</td>
								<td class="text-base-content/80">primary | outline | ghost | link | destructive</td>
								<td class="text-base-content/60">—</td>
								<td class="text-base-content/80">Visual style of the button</td>
							</tr>
							<tr class="border-base-300">
								<td class="font-mono text-primary">size</td>
								<td class="text-base-content/80">sm | lg</td>
								<td class="text-base-content/60">—</td>
								<td class="text-base-content/80">Button size</td>
							</tr>
							<tr class="border-base-300">
								<td class="font-mono text-primary">class</td>
								<td class="text-base-content/80">string</td>
								<td class="text-base-content/60">—</td>
								<td class="text-base-content/80">Additional CSS classes</td>
							</tr>
							<tr class="border-base-300">
								<td class="font-mono text-primary">children</td>
								<td class="text-base-content/80">JSX.Element</td>
								<td class="text-base-content/60">—</td>
								<td class="text-base-content/80">Button label or content</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="text-base-content/60 text-xs">
					Button is polymorphic: it accepts all native button attributes and can be rendered as another element via
					{" "}
					<code class="rounded bg-base-300 px-1 py-0.5 font-mono">as</code>
					{" "}
					(see PolymorphicProps).
				</p>
			</section>
		</DocPageLayout>
	)
}
