import { PageLayout } from "~/components/layout/page-layout"

export default function TooltipPage() {
	return (
		<PageLayout
			title="Tooltip"
			description="Hover hints that show short text on focus or hover (styled with daisyUI). Accessibility behavior should follow MDN ARIA and WAI-ARIA Authoring Practices, with native HTML semantics first."
		>
			<section class="space-y-6">
				<section class="space-y-2">
					<h2 class="text-xl font-semibold text-base-content">Introduction</h2>
					<p class="text-sm leading-relaxed text-base-content/80">
						The Tooltip component will provide accessible hover and focus hints.
						When finalizing behavior, follow MDN ARIA and WAI-ARIA Authoring
						Practices; prefer native HTML semantics over ARIA where possible.
					</p>
				</section>

				<section class="space-y-2">
					<h2 class="text-xl font-semibold text-base-content">Installation</h2>
					<p class="text-sm leading-relaxed text-base-content/80">
						Coming soon. Once the component is finalized, you will add
						{" "}
						<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-sm">
							src/components/ui/tooltip.tsx
						</code>
						{" "}
						and paste the source from this page.
					</p>
				</section>

				<section class="space-y-2">
					<h2 class="text-xl font-semibold text-base-content">Usage</h2>
					<p class="text-sm leading-relaxed text-base-content/80">
						Usage examples will be added when the component is available.
					</p>
				</section>

				<section class="space-y-2">
					<h2 class="text-xl font-semibold text-base-content">Properties</h2>
					<p class="text-sm leading-relaxed text-base-content/80">
						Props will be documented when the component is released.
					</p>
				</section>
			</section>
		</PageLayout>
	)
}
