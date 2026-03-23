import { HeroSectionPreview } from "~/components/blocks/hero-section-preview"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { PageLayout } from "~/components/layout/page-layout"
import { heroSectionBlockCode } from "~/data/blocks/hero-section"

export default function HeroSectionBlockPage() {
	return (
		<PageLayout
			title="Hero section"
			description="A daisyUI-style hero with gradient overlay, built from Badge and Button. Copy from the JSX tab like the component docs."
		>
			<ComponentShowcase
				code={heroSectionBlockCode}
				id="hero-section-block"
				name="block-hero-section"
				title="Hero block"
				preview={<HeroSectionPreview />}
			/>
		</PageLayout>
	)
}
