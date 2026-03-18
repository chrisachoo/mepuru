import { DocPageLayout } from "~/components/docs/doc-page-layout"

export default function TextareaPage() {
	return (
		<DocPageLayout
			title="Textarea"
			description="Multi-line text input. Uses daisyUI textarea classes and native textarea behavior."
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
						Create{" "}
						<code class="rounded bg-base-300 px-1.5 py-0.5 font-mono text-sm">
							src/components/ui/textarea.tsx
						</code>{" "}
						and paste the source from this page when available.
					</p>
				</section>
			</section>
		</DocPageLayout>
	)
}
