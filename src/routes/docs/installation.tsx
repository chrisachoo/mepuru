import { CodeBlock } from "~/components/ui/code-block"

const createProjectCmd = "bun create solid@latest my-app"

const installDepsCmd
	= "bun add tailwindcss@latest @tailwindcss/vite@latest daisyui@latest"

const viteConfigCode = `import { solidStart } from "@solidjs/start/config"
import tailwindcss from "@tailwindcss/vite"
import { nitro } from "nitro/vite"

import { defineConfig } from "vite"

export default defineConfig({
	plugins: [solidStart(), nitro(), tailwindcss()]
})
`

const cssCode = `@import "tailwindcss";
@plugin "daisyui";`

const buttonComponentCode = `
export function Button<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps>
) {
  const [local, rest] = splitProps(props, [
    "variant",
    "size",
    "class",
    "children"
  ])

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
`

export default function InstallationPage() {
	return (
		<main class="bg-dot-grid relative min-h-screen w-full overflow-x-hidden bg-base-100">
			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="mt-12 h-80 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
			</div>

			<article class="relative mx-auto w-full max-w-3xl px-6 py-16">
				<div class="animate-fade-in space-y-3">
					<h1 class="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
						Install daisyUI for Solid
					</h1>
					<p class="text-lg leading-relaxed text-base-content/70">
						How to install Tailwind CSS and daisyUI in a Solid project. Mēpuru
						components rely on both—set them up, then copy component code from
						the docs.
					</p>
				</div>

				<div class="mt-10 space-y-10">
					<section class="space-y-3">
						<h2 class="text-xl font-semibold text-base-content">
							1. Create a new Solid project
						</h2>
						<p class="text-sm leading-relaxed text-base-content/80">
							Create a new Solid project in the current directory.
						</p>
						<CodeBlock
							title="Terminal"
							code={createProjectCmd}
							language="bash"
						/>
					</section>

					<div class="mx-auto h-px w-full max-w-2xl bg-linear-to-r from-transparent via-primary/30 to-transparent" />

					<section class="space-y-3">
						<h2 class="text-xl font-semibold text-base-content">
							2. Install Tailwind CSS and daisyUI
						</h2>
						<p class="text-sm leading-relaxed text-base-content/80">
							From your project root, install Tailwind CSS and daisyUI.
						</p>
						<CodeBlock
							title="Terminal"
							code={installDepsCmd}
							language="bash"
						/>

						<p class="pt-1 text-sm leading-relaxed text-base-content/80">
							Add Tailwind CSS to your Vite config:
						</p>
						<CodeBlock
							title="vite.config.js"
							code={viteConfigCode}
							language="typescript"
						/>

						<p class="pt-1 text-sm leading-relaxed text-base-content/80">
							Put Tailwind CSS and daisyUI in your CSS file (and remove old
							styles):
						</p>
						<CodeBlock
							title="src/index.css"
							code={cssCode}
							language="css"
						/>
					</section>

					<div class="mx-auto h-px w-full max-w-2xl bg-linear-to-r from-transparent via-primary/30 to-transparent" />

					<section class="space-y-3">
						<h2 class="text-xl font-semibold text-base-content">
							3. Use Mēpuru components
						</h2>
						<p class="text-sm leading-relaxed text-base-content/80">
							Add components by copying their code from the docs—open a
							component page, use the copy button on the code block, and paste
							into your project (e.g.
							{" "}
							<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-sm">
								src/components/ui/button.tsx
							</code>
							).
						</p>
						<CodeBlock
							title="src/components/ui/button.tsx"
							code={buttonComponentCode}
							language="tsx"
						/>
					</section>

					<section class="rounded-xl border border-base-300 bg-base-200/50 p-4">
						<p class="text-sm text-base-content/70">
							<span class="font-medium text-base-content">Coming soon:</span>
							{" "}
							CLI and package install so you can add components without
							copy-pasting.
						</p>
					</section>
				</div>
			</article>
		</main>
	)
}
