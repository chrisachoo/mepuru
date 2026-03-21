import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { InlineCode } from "~/components/docs/inline-code"
import { PackageInstallTabs } from "~/components/docs/install/package-install-tabs"
import { PageLayout } from "~/components/layout/page-layout"

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
		<PageLayout
			title="Install daisyUI for Solid"
			description="How to install Tailwind CSS and daisyUI in a Solid project. Mēpuru
						components rely on both—set them up, then copy component code from
						the docs."
		>
			<div class="mt-10 space-y-10">
				<section class="space-y-3">
					<h2 class="text-xl font-semibold text-base-content">
						1. Create a new Solid project
					</h2>
					<p class="text-sm leading-relaxed text-base-content/80">
						Create a new Solid project in the current directory.
					</p>

					<PackageInstallTabs
						name="create-new-solid-project"
						pkg="create solid@latest my-app"
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

					<PackageInstallTabs
						name="install-tailwind-css-and-daisyui"
						pkg="tailwindcss@latest @tailwindcss/vite@latest daisyui@latest"
					/>

					<p class="pt-1 text-sm leading-relaxed text-base-content/80">
						Add Tailwind CSS to your Vite config:
					</p>
					<ArticleCodeBlock
						name="vite.config.js"
						code={viteConfigCode}
						language="typescript"
					/>

					<p class="pt-1 text-sm leading-relaxed text-base-content/80">
						Put Tailwind CSS and daisyUI in your CSS file (and remove old
						styles):
					</p>
					<ArticleCodeBlock
						name="src/index.css"
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
						Add components by copying their code from the docs—open a component
						page, use the copy button on the code block, and paste into your
						project (e.g.
						{" "}
						<InlineCode>&quot;src/components/ui/button.tsx&quot;</InlineCode>
						).
					</p>
					<ArticleCodeBlock
						name="components/ui/button.tsx"
						code={buttonComponentCode}
						language="tsx"
					/>
				</section>

				<section class="rounded-xl border border-base-300 bg-base-200/50 p-4">
					<p class="text-sm text-base-content/70">
						<span class="font-medium text-base-content">Coming soon:</span>
						{" "}
						CLI
						and package install so you can add components without copy-pasting.
					</p>
				</section>
			</div>
		</PageLayout>
	)
}
