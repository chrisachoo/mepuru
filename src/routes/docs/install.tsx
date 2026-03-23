import { A } from "@solidjs/router"
import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { InlineCode } from "~/components/docs/inline-code"
import { PackageInstallTabs } from "~/components/docs/install/package-install-tabs"
import { PageLayout } from "~/components/layout/page-layout"
import {
	Alert,
	AlertDescription,
	AlertTitle
} from "~/components/ui/alert"
import {
	Card,
	CardBody,
	CardDescription,
	CardTitle
} from "~/components/ui/card"
import { Divider } from "~/components/ui/divider"

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
				<Alert variant="info">
					<AlertTitle>Prerequisites</AlertTitle>
					<AlertDescription>
						Mēpuru targets Solid with Vite. You will add Tailwind v4, the
						daisyUI plugin, then paste components from the docs. For inspiration,
						see composed examples on
						{" "}
						<A
							class="link font-semibold"
							href="/blocks/"
						>
							Blocks
						</A>
						.
					</AlertDescription>
				</Alert>

				<Card class="border-base-300/80 bg-base-200/40">
					<CardBody class="gap-3">
						<CardTitle class="text-base">Checklist</CardTitle>
						<CardDescription>
							Before you dive in, make sure you can run the dev server and edit
							your CSS entry.
						</CardDescription>
						<ul class="list-inside list-disc space-y-1 text-sm text-base-content/80">
							<li>Node or Bun available on your PATH</li>
							<li>A git repo (optional but recommended)</li>
							<li>Familiarity with Solid components and JSX</li>
						</ul>
					</CardBody>
				</Card>

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

				<Divider />

				<section class="rounded-xl border border-base-300 bg-base-200/50 p-5">
					<p class="text-sm leading-relaxed text-base-content/75">
						<span class="font-semibold text-base-content">Coming soon:</span>
						{" "}
						CLI and package install so you can scaffold components without
						copy-pasting. Until then, the
						{" "}
						<A
							class="link font-medium"
							href="/docs/intro/"
						>
							Introduction
						</A>
						{" "}
						walkthrough and
						{" "}
						<A
							class="link font-medium"
							href="/blocks/"
						>
							Blocks
						</A>
						{" "}
						page keep the experience feeling polished.
					</p>
				</section>
			</div>
		</PageLayout>
	)
}
