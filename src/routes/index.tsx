/* eslint-disable solid/no-innerhtml */
import { useNavigate } from "@solidjs/router"
import { Accessibility, Code, Leaf, Zap } from "lucide-solid"
import { codeToHtml } from "shiki"
import { createResource, For, Show } from "solid-js"
import { Header } from "~/components/layout/header"
import { Button } from "~/components/ui/button"
import {
	Card,
	CardBody,
	CardDescription,
	CardTitle
} from "~/components/ui/card"

const cards = [
	{
		description:
			"Predictable components that stay easy to understand and customize.",
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
		<>
			<Header />
			<main class="bg-dot-grid relative min-h-screen w-full overflow-x-hidden bg-base-100">
				<div class="pointer-events-none absolute inset-0 flex justify-center">
					<div class="mt-24 h-130 w-225 animate-pulse rounded-full bg-primary/10 blur-3xl" />
				</div>

				<section class="relative py-24">
					<div class="mx-auto w-full max-w-7xl space-y-20 px-6">
						<div class="animate-fade-in mx-auto flex max-w-2xl flex-col items-center space-y-6 text-center">
							<span class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
								Built for Solid
							</span>
							<div class="space-y-4">
								<h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
									Simple UI components for
									{" "}
									<span class="text-gradient-primary">Solid</span>
								</h1>

								<p class="mx-auto max-w-xl text-lg leading-relaxed text-base-content/70">
									Mēpuru is a lightweight component library focused on
									simplicity, accessibility, and a predictable developer
									experience.
								</p>
							</div>

							<div class="grid grid-cols-1 items-center justify-center gap-3 pt-2 md:max-w-80 md:grid-cols-2">
								<Button
									variant="primary"
									class="w-full"
									onClick={() =>
										navigate("/docs/components", { replace: true })}
								>
									Components
								</Button>
								<Button
									variant="outline"
									class="w-full"
									onClick={() =>
										navigate("/docs/quickstart", { replace: true })}
								>
									Quickstart
								</Button>
							</div>
						</div>

						<div class="mx-auto h-px w-full max-w-2xl bg-linear-to-r from-transparent via-primary/30 to-transparent" />

						<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
							<For each={cards}>
								{(card, index) => {
									const Icon = card.icon

									return (
										<Card
											size="sm"
											class={`border border-base-300/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 ${cardDelayClasses[index()] ?? ""}`}
										>
											<CardBody class="items-center space-y-3 text-center">
												<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/10">
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

						<div class="flex w-full flex-col items-center gap-8 pt-6 lg:flex-row">
							<div class="animate-fade-in max-w-md space-y-5">
								<h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
									Designed for clarity
								</h2>

								<p class="text-lg leading-relaxed text-base-content/70">
									Mēpuru components prioritize readability and predictable
									behavior. Every component is built with Solid’s reactive
									primitives and minimal abstraction.
								</p>

								<Button variant="primary">Browse components</Button>
							</div>

							<div class="animate-fade-in overflow-hidden rounded-xl border border-base-300 bg-base-200/80 shadow-lg shadow-base-content/5">
								<div class="flex items-center gap-2 border-b border-base-300 bg-base-300/50 px-4 py-3">
									<span class="size-3 rounded-full bg-error/80" />
									<span class="size-3 rounded-full bg-warning/80" />
									<span class="size-3 rounded-full bg-success/80" />
									<span class="ml-2 text-sm font-medium text-base-content/60">
										button.tsx
									</span>
								</div>
								<div class="overflow-x-auto p-4 text-sm [&_pre]:m-0! [&_pre]:bg-transparent! [&_pre]:p-0!">
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
		</>
	)
}
