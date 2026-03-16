import { DocPageLayout } from "~/components/docs/doc-page-layout"

export default function AvatarPage() {
	return (
		<DocPageLayout
			title="Avatar"
			description="User or entity image with optional fallback. Uses daisyUI avatar classes."
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
							src/components/ui/avatar.tsx
						</code>{" "}
						and paste the source from this page when available.
					</p>
				</section>
			</section>
		</DocPageLayout>
	)
}
