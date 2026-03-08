/* eslint-disable solid/no-innerhtml */
import { useNavigate } from "@solidjs/router"
import { Accessibility, Code, Leaf, Zap } from "lucide-solid"
import { codeToHtml } from "shiki"
import { createResource, For, Show } from "solid-js"
import { Button } from "~/components/ui/button"
import { Card, CardBody, CardDescription, CardTitle } from "~/components/ui/card"

const cards = [
	{
		description: "Predictable components that stay easy to understand and customize.",
		icon: Zap,
		title: "Simple by design"
	},
	{
		description: "Designed around Solid’s reactive primitives for fast UI.",
		icon: Leaf,
		title: "Built for Solid"
	},
	{
		description: "Components follow MDN and WAI-ARIA guidance.",
		icon: Accessibility,
		title: "Accessible"
	},
	{
		description: "Clean APIs, polymorphic patterns, lightweight design.",
		icon: Code,
		title: "Developer friendly"
	}
] as const

const cardDelayClasses = [
	"animate-fade-in-delay-1",
	"animate-fade-in-delay-2",
	"animate-fade-in-delay-3",
	"animate-fade-in-delay-4"
] as const

const code = `export function Button<T extends ValidComponent = "button">(
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

export default function HomePage() {
	const navigate = useNavigate()
	const [highlighted] = createResource(() =>
		codeToHtml(code, {
			lang: "tsx",
			theme: "github-dark-dimmed"
		})
	)

	return (
		<main class="min-h-screen bg-base-100 w-full relative overflow-x-hidden bg-dot-grid">

			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="h-130 w-225 bg-primary/10 blur-3xl rounded-full mt-24 animate-pulse" />
			</div>

			<section class="py-24 relative">
				<div class="mx-auto w-full max-w-7xl px-6 space-y-20">

					<div class="mx-auto flex max-w-2xl flex-col items-center text-center space-y-6 animate-fade-in">
						<span class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
							Built for Solid
						</span>
						<div class="space-y-4">
							<h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
								Simple UI components for
								{" "}
								<span class="text-gradient-primary">Solid</span>
							</h1>

							<p class="text-lg text-base-content/70 max-w-xl mx-auto leading-relaxed">
								Mēpuru is a lightweight component library focused on
								simplicity, accessibility, and a predictable developer
								experience.
							</p>
						</div>

						<div class="grid grid-cols-1 md:grid-cols-2 md:max-w-80 items-center justify-center gap-3 pt-2">
							<Button variant="primary" class="w-full" onClick={() => navigate("/docs/components", { replace: true })}>
								Components
							</Button>
							<Button variant="outline" class="w-full" onClick={() => navigate("/docs/quickstart", { replace: true })}>
								Quickstart
							</Button>
						</div>
					</div>

					<div class="h-px w-full max-w-2xl mx-auto bg-linear-to-r from-transparent via-primary/30 to-transparent" />

					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<For each={cards}>
							{(card, index) => {
								const Icon = card.icon

								return (
									<Card
										size="sm"
										class={`transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 border border-base-300/80 ${cardDelayClasses[index()] ?? ""}`}
									>
										<CardBody class="space-y-3 items-center text-center">
											<div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/10">
												<Icon class="size-5 text-primary" />
											</div>

											<CardTitle class="text-base">{card.title}</CardTitle>

											<CardDescription class="text-base-content/80">
												{card.description}
											</CardDescription>
										</CardBody>
									</Card>
								)
							}}
						</For>
					</div>

					<div class="w-full flex flex-col lg:flex-row gap-8 items-center pt-6">

						<div class="space-y-5 max-w-md animate-fade-in">
							<h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
								Designed for clarity
							</h2>

							<p class="text-base-content/70 text-lg leading-relaxed">
								Mēpuru components prioritize readability and predictable
								behavior. Every component is built with Solid’s reactive
								primitives and minimal abstraction.
							</p>

							<Button variant="primary">
								Browse components
							</Button>
						</div>

						<div class="rounded-xl overflow-hidden border border-base-300 bg-base-200/80 shadow-lg shadow-base-content/5 animate-fade-in">
							<div class="flex items-center gap-2 px-4 py-3 border-b border-base-300 bg-base-300/50">
								<span class="size-3 rounded-full bg-error/80" />
								<span class="size-3 rounded-full bg-warning/80" />
								<span class="size-3 rounded-full bg-success/80" />
								<span class="ml-2 text-sm text-base-content/60 font-medium">
									button.tsx
								</span>
							</div>
							<div class="p-4 overflow-x-auto text-sm [&_pre]:m-0! [&_pre]:bg-transparent! [&_pre]:p-0!">
								<Show
									when={highlighted()}
									fallback={(
										<pre class="font-mono text-base-content/60">
											<code>{code.trim()}</code>
										</pre>
									)}
								>
									{html => <div innerHTML={html()} />}
								</Show>
							</div>
						</div>

					</div>

				</div>
			</section>
		</main>
	)
}
