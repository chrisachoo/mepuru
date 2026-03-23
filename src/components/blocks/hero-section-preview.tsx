import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"

export function HeroSectionPreview() {
	return (
		<div class="hero min-h-[22rem] rounded-box bg-base-200">
			<div class="hero-overlay bg-linear-to-b from-primary/25 to-base-200/90" />
			<div class="hero-content z-10 text-center">
				<div class="max-w-lg space-y-4">
					<Badge variant="primary">Mēpuru</Badge>
					<h2 class="text-4xl font-bold tracking-tight text-base-content">
						Ship interfaces faster
					</h2>
					<p class="text-base-content/70">
						Copy blocks, wire Solid signals, and keep every pixel under your
						control.
					</p>
					<div class="flex flex-wrap justify-center gap-2">
						<Button variant="primary">Start building</Button>
						<Button variant="outline">View docs</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
