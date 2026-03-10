export default function IntroductionPage() {
	return (
		<main class="bg-dot-grid relative min-h-screen w-full overflow-x-hidden bg-base-100">
			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="mt-12 h-80 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
			</div>

			<article class="relative mx-auto w-full max-w-3xl px-6 py-16">
				<div class="animate-fade-in space-y-3">
					<h1 class="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
						Introduction
					</h1>
					<p class="text-lg leading-relaxed text-base-content/70">
						Welcome to the documentation for Mēpuru. Mēpuru is a simple UI
						library for Solid.
					</p>
				</div>
			</article>
		</main>
	)
}
