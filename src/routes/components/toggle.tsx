import { PageLayout } from "~/components/layout/page-layout"

export default function TogglePage() {
	return (
		<PageLayout
			title="Toggle"
			description="On/off switch control. Uses daisyUI toggle classes with native input semantics."
		>
			<section class="space-y-6">
				<section class="space-y-2">
					<h2 class="text-xl font-semibold text-base-content">Introduction</h2>
					<p class="text-sm leading-relaxed text-base-content/80">
						Documentation and copy-paste source will be added when this page is
						ready.
					</p>
				</section>
				<section class="space-y-2">
					<h2 class="text-xl font-semibold text-base-content">Installation</h2>
					<p class="text-sm leading-relaxed text-base-content/80">
						Create
						{" "}
						<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-sm">
							src/components/ui/toggle.tsx
						</code>
						{" "}
						and paste the source from this page when available.
					</p>
				</section>
			</section>
		</PageLayout>
	)
}
