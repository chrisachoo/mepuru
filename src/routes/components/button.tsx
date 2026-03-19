import { ArrowRight, Heart, ShoppingCart } from "lucide-solid"
import { ComponentCode } from "~/components/docs/component-code"
import { DocDivider } from "~/components/docs/doc-divider"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { ComponentShowcase } from "~/components/docs/showcase"
import { CodeBlock } from "~/components/layout/code-block"
import { Button } from "~/components/ui/button"

const buttonComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const buttonVariants = cva("btn", {
  variants: {
    color: {
      accent: "btn-accent",
      default: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary"
    },
    size: {
      lg: "btn-lg",
      sm: "btn-sm"
    },
    variant: {
      destructive: "btn-error",
      ghost: "btn-ghost",
      light: "btn-soft",
      link: "btn-link",
      outline: "btn-outline ",
      primary: "btn-primary"
    }
  }
})

type ButtonProps = {
  class?: string
} & VariantProps<typeof buttonVariants>

function Button<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps>
) {
  const [local, rest] = splitProps(props, [
    "variant",
    "size",
    "class",
    "children",
    "color"
  ])
  return (
    <button
      class={cn(
        buttonVariants({
          color: local.color,
          size: local.size,
          variant: local.variant
        }),
        local.class
      )}
      {...rest}
    >
      {local.children}
    </button>
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
`

const buttonVariantsCode = `import { Button } from "~/components/ui/button"

export function ButtonDemo() {
  return (
		<div class="flex flex-wrap items-center gap-3">
			<Button variant="primary">Primary</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="destructive">Destructive</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="link">Link</Button>
		</div>
  )
}`

const buttonSizesCode = `import { Button } from "~/components/ui/button"

export function ButtonSizesDemo() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`

const buttonSoftCode = `import { Button } from "~/components/ui/button"
	export function SoftButton() {
		return (
			<div class="flex flex-wrap items-center gap-3">
				<Button variant="light">Default</Button>
				<Button variant="light" color="primary">Primary</Button>
				<Button variant="light" color="secondary">Secondary</Button>
			</div>
		)
	}
`

const buttonDemoCode = `import { ArrowRight, Heart, ShoppingCart } from "lucide-solid"
import { Button } from "~/components/ui/button"

export function ButtonWithIconDemo() {
  return (
    <div class="flex flex-wrap items-center gap-3">
				<Button variant="outline">
					Button
					<ArrowRight class="size-4" />
				</Button>
				<Button variant="outline" size="sm" class="btn-square" aria-label="Submit">
					<ShoppingCart class="size-4" />
				</Button>
				<Button variant="outline" size="sm" class="btn-circle" aria-label="Submit">
					<Heart class="size-4" />
				</Button>
    </div>
  )
}`

const buttonProps = [
	{
		description: "Visual style of the button",
		prop: "variant",
		type: `"primary" | "outline" | "light" | "ghost" | "link" | "destructive"`
	},
	{
		description: "Color when used with variant (e.g. light)",
		prop: "color",
		type: `"default" | "primary" | "secondary" | "accent"`
	},
	{
		description: "Button size",
		prop: "size",
		type: `"sm" | "lg"`
	},
	{
		description: "Additional CSS classes",
		prop: "class",
		type: "string"
	},
	{
		description: "Button label or content",
		prop: "children",
		type: "JSX.Element"
	}
]

export default function ButtonPage() {
	return (
		<DocPageLayout
			title="Button"
			description="Displays a button with variants and sizes. Built with daisyUI and class-variance-authority."
			sourceCode={buttonComponentCode}
			sourceFilePath="src/components/ui/button.tsx"
		>
			<ComponentShowcase
				code={buttonDemoCode}
				id="usage"
				name="button-demo-code"
				preview={(
					<div class="flex flex-wrap items-center gap-3">
						<Button variant="outline">
							Button
							<ArrowRight class="size-4" />
						</Button>
						<Button
							variant="outline"
							size="sm"
							class="btn-square"
							aria-label="Submit"
						>
							<ShoppingCart class="size-4" />
						</Button>
						<Button
							variant="outline"
							size="sm"
							class="btn-circle"
							aria-label="Submit"
						>
							<Heart class="size-4" />
						</Button>
					</div>
				)}
			/>

			<DocDivider />

			<ComponentCode name="button-install">
				<CodeBlock
					code={buttonComponentCode}
					language="tsx"
					name="components/ui/button.tsx"
					expand
				/>
			</ComponentCode>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={buttonVariantsCode}
					id="button-variants"
					name="button-variants-demo"
					title="Button variants"
					preview={(
						<div class="flex flex-wrap items-center gap-3">
							<Button variant="primary">Primary</Button>
							<Button variant="outline">Outline</Button>
							<Button variant="destructive">Destructive</Button>
							<Button variant="ghost">Ghost</Button>
							<Button variant="link">Link</Button>
						</div>
					)}
				/>

				<ComponentShowcase
					code={buttonSizesCode}
					id="buttons-sizes"
					name="button-sizes-demo"
					title="Button sizes"
					preview={(
						<div class="flex flex-wrap items-center gap-3">
							<Button size="sm">Small</Button>
							<Button>Default</Button>
							<Button size="lg">Large</Button>
						</div>
					)}
				/>

				<ComponentShowcase
					code={buttonSoftCode}
					id="soft-buttons"
					name="soft-buttons"
					title="Soft buttons"
					preview={(
						<div class="flex flex-wrap items-center gap-3">
							<Button variant="light">Default</Button>
							<Button
								variant="light"
								color="primary"
							>
								Primary
							</Button>
							<Button
								variant="light"
								color="secondary"
							>
								Secondary
							</Button>
						</div>
					)}
				/>
			</section>

			<DocDivider />

			<PropsTable data={buttonProps} daisyHref="https://daisyui.com/components/button/">
				<p class="text-xs text-base-content/60">
					Button is polymorphic: it accepts all native button attributes and can
					be rendered as another element via
					{" "}
					<InlineCode>as</InlineCode>
					{" "}
					(see
					PolymorphicProps).
				</p>
			</PropsTable>
		</DocPageLayout>
	)
}
