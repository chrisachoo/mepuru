export default function IntroductionPage() {
	return (
		<main class="min-h-screen w-full bg-base-100 relative overflow-x-hidden bg-dot-grid">
			<div class="pointer-events-none absolute inset-0 flex justify-center">
				<div class="h-80 w-96 bg-primary/10 blur-3xl rounded-full mt-12 animate-pulse" />
			</div>

			<article class="relative mx-auto w-full max-w-4xl px-6 py-16">
				<div class="space-y-3 animate-fade-in">
					<h1 class="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
						Introduction
					</h1>
					<p class="text-lg text-base-content/70 leading-relaxed">
						Welcome to the documentation for Mēpuru. Mēpuru is a simple UI library for Solid.
					</p>
				</div>
			</article>
		</main>
	)
}
