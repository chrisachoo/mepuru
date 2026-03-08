import { createSignal } from "solid-js"
import { CodeBlock } from "~/components/ui/code-block"
import { FormField, Input } from "~/components/ui/input"
import { Tabs } from "~/components/ui/tabs"

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

const usageImportCode = `import { Input } from "~/components/ui/input"`

const usageExampleCode = `<Input placeholder="Email address" />

<Input size="lg" placeholder="Large input" />

<Input error placeholder="Invalid input" />`

export default function InputPage() {
	const [installTab, setInstallTab] = createSignal("manual")
	return (
		<main class="min-h-screen w-full bg-base-100 relative overflow-x-hidden bg-dot-grid">
			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="h-80 w-96 bg-primary/10 blur-3xl rounded-full mt-12 animate-pulse" />
			</div>

			<article class="relative mx-auto w-full max-w-3xl px-6 py-16">
				<div class="space-y-3 animate-fade-in">
					<h1 class="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
						Input
					</h1>
					<p class="text-lg text-base-content/70 leading-relaxed">
						A styled input component built with daisyUI. Supports multiple sizes
						and error states while keeping native HTML input behavior.
					</p>
				</div>

				<section class="mt-10 space-y-4">
					<h2 class="text-xl font-semibold text-base-content">Examples</h2>

					<div class="flex flex-wrap items-center gap-3 rounded-xl border border-base-300 bg-base-200/50 p-6">
						<Input placeholder="Default input" />
						<Input size="sm" placeholder="Small input" />
						<Input size="lg" placeholder="Large input" />
						<Input error placeholder="Input with error state" />
					</div>

					<h2 class="text-xl font-semibold text-base-content">Form Field</h2>

					<div class="rounded-xl border border-base-300 bg-base-200/50 p-6">
						<FormField name="email" placeholder="Email address" />
					</div>
				</section>

				<div class="mt-10 h-px w-full max-w-2xl mx-auto bg-linear-to-r from-transparent via-primary/30 to-transparent" />

				<section class="mt-10 space-y-4">
					<h2 class="text-xl font-semibold text-base-content">Installation</h2>

					<Tabs
						name="input-install"
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
											title="src/components/ui/input.tsx"
											code={inputComponentCode}
											language="tsx"
										/>

										<p class="text-sm text-base-content/80">
											Update import paths if necessary (e.g.
											{" "}
											<code class="rounded bg-base-300 px-1 py-0.5 font-mono text-xs">
												~/lib/cn
											</code>
											).
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
											Use the Manual tab to copy the component code until the CLI
											is available.
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
						Import the component and pass any native input attributes.
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
									<th>Prop</th>
									<th>Type</th>
									<th>Default</th>
									<th>Description</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td class="font-mono text-primary">size</td>
									<td>xs | sm | md | lg | xl</td>
									<td>md</td>
									<td>Controls the input size</td>
								</tr>

								<tr>
									<td class="font-mono text-primary">error</td>
									<td>boolean</td>
									<td>false</td>
									<td>Applies error styling and sets aria-invalid</td>
								</tr>

								<tr>
									<td class="font-mono text-primary">class</td>
									<td>string</td>
									<td>—</td>
									<td>Additional CSS classes</td>
								</tr>

								<tr>
									<td class="font-mono text-primary">...rest</td>
									<td>HTMLInputAttributes</td>
									<td>—</td>
									<td>All native input attributes</td>
								</tr>
							</tbody>
						</table>
					</div>

					<p class="text-base-content/60 text-xs">
						Input forwards all native input attributes such as
						{" "}
						<code class="rounded bg-base-300 px-1 py-0.5 font-mono">
							placeholder
						</code>
						,
						{" "}
						<code class="rounded bg-base-300 px-1 py-0.5 font-mono">
							type
						</code>
						,
						and
						{" "}
						<code class="rounded bg-base-300 px-1 py-0.5 font-mono">
							value
						</code>
						.
					</p>
				</section>
			</article>
		</main>
	)
}
