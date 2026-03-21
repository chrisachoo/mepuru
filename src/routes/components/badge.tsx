import { BadgeCheck, BookmarkIcon } from "lucide-solid"
import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import { Badge } from "~/components/ui/badge"

const badgeComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const badgeVariants = cva("badge", {
	variants: {
		size: {
			lg: "badge-lg",
			md: "badge-md",
			sm: "badge-sm",
			xl: "badge-xl",
			xs: "badge-xs"
		},
		variant: {
			accent: "badge-accent",
			destructive: "badge-error",
			ghost: "badge-ghost",
			info: "badge-info",
			light: "badge-soft",
			neutral: "badge-neutral",
			outline: "badge-outline",
			primary: "badge-primary",
			secondary: "badge-secondary",
			success: "badge-success",
			warning: "badge-warning"
		}
	}
})

type BadgeProps = JSX.IntrinsicElements["span"]
	& VariantProps<typeof badgeVariants>

export function Badge(props: Readonly<BadgeProps>) {
	const [local, rest] = splitProps(props, ["class", "variant", "size"])

	return (
		<span
			class={cn(badgeVariants({ size: local.size, variant: local.variant }), local.class)}
			{...rest}
		/>
	)
}
`

const badgeDemoCode = `import { Badge } from "~/components/ui/badge"

export function BadgeDemo() {
  return (
		<div class="flex w-full flex-wrap justify-center gap-2">
			<Badge class="badge-soft">Badge</Badge>
			<Badge class="badge-soft badge-primary" variant="primary">Primary</Badge>
			<Badge class="badge-soft" variant="destructive">Destructive</Badge>
			<Badge class="badge-soft" variant="outline">Outline</Badge>
		</div>
  )
}
`

const badgeVariantsCode = `import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  )
}
`

const badgeSizesCode = `import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  )
}
`

const badgeWithIconCode = `import { Badge } from "@/components/ui/badge"
import { BadgeCheck, BookmarkIcon } from "lucide-react"

export function BadgeWithIconLeft() {
  return (
		<div class="flex flex-wrap gap-2">
			<Badge variant="secondary">
				<BadgeCheck class="size-4" />
				Verified
			</Badge>
			<Badge variant="outline">
				Bookmark
				<BookmarkIcon class="size-4" />
			</Badge>
		</div>
  )
}
`

const badgeProps = [
	{
		description: "Badge variants",
		prop: "size",
		type: `"default" | "primary" | "secondary" | "destructive" | "outline" | "ghost"`
	},
	{
		description: "Badge custom sizes",
		prop: "size",
		type: `"xs" | "sm" | "md" | "lg" | "xl`
	},
	{
		description: "Additional CSS classes",
		prop: "class",
		type: "string"
	}
]

export default function BadgePage() {
	return (
		<PageLayout
			title="Badge"
			description="Displays a badge or a component that looks like a badge."
		>

			<ComponentShowcase
				id="badge"
				name="Badge"
				code={badgeDemoCode}
				preview={(
					<div class="flex w-full flex-wrap justify-center gap-2">
						<Badge class="badge-soft">Badge</Badge>
						<Badge class="badge-soft badge-primary" variant="primary">Primary</Badge>
						<Badge class="badge-soft" variant="destructive">Destructive</Badge>
						<Badge class="badge-soft" variant="outline">Outline</Badge>
					</div>
				)}
			/>

			<DocSectionDivider />

			<ComponentInstallationTabs name="badge-install">
				<ArticleCodeBlock
					code={badgeComponentCode}
					language="tsx"
					name="components/ui/badge.tsx"
					expand
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={badgeVariantsCode}
					id="badge-with-variant-colors"
					name="badge-with-variant-colors"
					preview={(
						<div class="flex flex-wrap items-center gap-2">
							<Badge>Default</Badge>
							<Badge variant="primary">Primary</Badge>
							<Badge variant="destructive">Destructive</Badge>
							<Badge variant="outline">Outline</Badge>
							<Badge variant="ghost">Ghost</Badge>
						</div>
					)}
					title="Badge variants"
				/>

				<ComponentShowcase
					code={badgeSizesCode}
					id="badge-sizes"
					name="badge-sizes"
					preview={(
						<div class="flex flex-wrap items-center gap-2">
							<Badge size="xs" variant="light">Xsmall</Badge>
							<Badge size="sm" variant="light">Small</Badge>
							<Badge size="md" variant="light">Medium</Badge>
							<Badge size="lg" variant="light">Large</Badge>
							<Badge size="xl" variant="light">Xlarge</Badge>
						</div>
					)}
					title="Badge sizes"
				/>

				<ComponentShowcase
					code={badgeWithIconCode}
					id="badge-with-icon"
					name="badge-with-icon"
					preview={(
						<div class="flex flex-wrap gap-2">
							<Badge variant="primary">
								<BadgeCheck class="size-4" />
								Verified
							</Badge>
							<Badge variant="outline">
								Bookmark
								<BookmarkIcon class="size-4" />
							</Badge>
						</div>
					)}
					title="Badge with icon"
				/>
			</section>

			<DocSectionDivider />

			<PropsTable
				data={badgeProps}
				daisyHref="https://daisyui.com/components/badge/"
			/>
		</PageLayout>
	)
}
