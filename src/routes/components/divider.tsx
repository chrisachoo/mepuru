import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import { Divider } from "~/components/ui/divider"

const dividerComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX, ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const dividerVariants = cva("divider", {
	defaultVariants: {
		orientation: "vertical"
	},
	variants: {
		color: {
			accent: "divider-accent",
			error: "divider-error",
			info: "divider-info",
			neutral: "divider-neutral",
			primary: "divider-primary",
			secondary: "divider-secondary",
			success: "divider-success",
			warning: "divider-warning"
		},
		orientation: {
			horizontal: "divider-horizontal",
			vertical: "divider-vertical"
		},
		placement: {
			end: "divider-end",
			start: "divider-start"
		}
	}
})

type DividerProps = {
	class?: string
} & VariantProps<typeof dividerVariants>

function Divider<T extends ValidComponent = "div">(
	props: PolymorphicProps<T, DividerProps>
) {
	const [local, others] = splitProps(props, [
		"class",
		"color",
		"orientation",
		"placement",
		"children"
	])

	return (
		<div
			class={cn(
				dividerVariants({
					color: local.color,
					orientation: local.orientation,
					placement: local.placement
				}),
				local.class
			)}
			{...(others as JSX.IntrinsicElements["div"])}
		>
			{local.children}
		</div>
	)
}

export { Divider, dividerVariants }
export type { DividerProps }
`

const dividerDemoCode = `import { Divider } from "~/components/ui/divider"

export function DividerDemo() {
  return (
		<div class="w-full max-w-sm rounded-2xl border bg-base-100 p-4 text-sm">
			<div class="flex flex-col gap-1">
				<div class="leading-none font-medium">Design</div>
				<div class="text-base-content/80">
					The Foundation for your Design System
				</div>
			</div>

			<Divider />

			<div>
				A set of beautifully designed components that you can customize,
				extend, and build on.
			</div>
		</div>
  )
}
`

const dividerVerticalDemoCode = `import { Divider } from "@/components/ui/divider"

export function DividerVertical() {
  return (
    <div class="flex h-5 items-center gap-4 text-sm">
      <div>Blog</div>
      <Divider orientation="vertical" />
      <div>Docs</div>
      <Divider orientation="vertical" />
      <div>Source</div>
    </div>
  )
}
`

const dividerResponsiveDemoCode = `import { Divider } from "@/components/ui/divider"

export function DividerResponsive() {
  return (
    <div class="flex w-full flex-col lg:flex-row">
      <div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
      <Divider class="lg:divider-horizontal">OR</Divider>
      <div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
    </div>
  )
}
`

const dividerProps = [
	{
		description: "Color of the divider",
		prop: "color",
		type: `"accent" | "error" | "info" | "neutral" | "primary" | "secondary" | "success" | "warning"`
	},
	{
		description: "Orientation of the divider",
		prop: "orientation",
		type: `"horizontal" | "vertical"`
	},
	{
		description: "Placement of the divider",
		prop: "placement",
		type: `"start" | "end"`
	}
]

export default function DividerPage() {
	return (
		<PageLayout
			title="Divider"
			description="Visually or semantically separates content."
		>
			<ComponentShowcase
				code={dividerDemoCode}
				id="divider"
				name="divider"
				preview={(
					<div class="w-full max-w-sm rounded-2xl border bg-base-100 p-4 text-sm">
						<div class="flex flex-col gap-1">
							<div class="leading-none font-medium">Design</div>
							<div class="text-base-content/80">
								The Foundation for your Design System
							</div>
						</div>

						<Divider />

						<div>
							A set of beautifully designed components that you can customize,
							extend, and build on.
						</div>
					</div>
				)}
			/>

			<DocSectionDivider />

			<ComponentInstallationTabs
				cliComponent="divider"
				name="divider-install"
			>
				<ArticleCodeBlock
					code={dividerComponentCode}
					language="tsx"
					name="components/ui/divider.tsx"
					expand
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={dividerVerticalDemoCode}
					id="divider-vertical"
					name="divider-vertical"
					title="Vertical divider"
					preview={(
						<div class="flex h-5 items-center text-sm">
							<div>Blog</div>
							<Divider orientation="vertical" />
							<div>Docs</div>
							<Divider orientation="vertical" />
							<div>Source</div>
						</div>
					)}
				/>

				<ComponentShowcase
					code={dividerResponsiveDemoCode}
					id="responsive-divider"
					name="responsive-divider"
					title="Responsive (lg:divider-horizontal)"
					preview={(
						<div class="flex w-full flex-col lg:flex-row">
							<div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
							<Divider class="lg:divider-horizontal">OR</Divider>
							<div class="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
						</div>
					)}
				/>

				<ComponentShowcase
					code={dividerResponsiveDemoCode}
					id="divider-positions"
					name="divider-positions"
					title="Divider in different positions"
					preview={(
						<div class="flex w-full max-w-sm flex-col">
							<Divider placement="start">Start</Divider>
							<Divider>Default</Divider>
							<Divider placement="end">End</Divider>
						</div>
					)}
				/>

			</section>

			<DocSectionDivider />

			<PropsTable
				data={dividerProps}
				daisyHref="https://daisyui.com/components/divider/"
			/>
		</PageLayout>
	)
}
