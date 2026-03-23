import { StatsBlockPreview } from "~/components/blocks/stats-block-preview"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { PageLayout } from "~/components/layout/page-layout"
import { statsBlockCode } from "~/data/blocks/stats"

export default function StatsBlockPage() {
	return (
		<PageLayout
			title="Stats"
			description="A responsive stats row: vertical on small screens, horizontal from the lg breakpoint. Uses ~/components/ui/stats over daisyUI stat classes."
		>
			<ComponentShowcase
				code={statsBlockCode}
				id="stats-block"
				name="block-stats"
				title="Stats block"
				preview={(
					<div class="max-w-sm">
						<StatsBlockPreview />
					</div>
				)}
			>
				Switch to JSX to copy the full example, including the responsive direction
				prop.
			</ComponentShowcase>
		</PageLayout>
	)
}
