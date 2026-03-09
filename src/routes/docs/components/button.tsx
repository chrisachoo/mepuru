import { ArrowUp } from "lucide-solid"
import { CodePreviewTabs } from "~/components/docs/code-preview-tabs"
import { ComponentCode } from "~/components/docs/component-code"
import { ComponentDemo } from "~/components/docs/component-demo"
import { DocDivider } from "~/components/docs/doc-divider"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { DocSection } from "~/components/docs/doc-section"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { Button } from "~/components/ui/button"
import { CodeBlock } from "~/components/ui/code-block"

const buttonComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const buttonVariants = cva("btn", {
  variants: {
    size: { lg: "btn-lg", sm: "btn-sm" },
    variant: {
      destructive: "btn-error",
      ghost: "btn-ghost",
      link: "btn-link",
      outline: "btn-outline",
      primary: "btn-primary",
    },
  },
})

type ButtonProps = {
  class?: string
} & VariantProps<typeof buttonVariants>

function Button<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps>
) {
  const [local, rest] = splitProps(props, ["variant", "size", "class", "children"])
  return (
    <button
      class={cn(
        buttonVariants({ size: local.size, variant: local.variant }),
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
      <Button variant="ghost">Ghost</Button>
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

const buttonDemoCode = `import { ArrowUp } from "lucide-solid"
import { Button } from "~/components/ui/button"

export function ButtonWithIconDemo() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="sm" aria-label="Submit">
        <ArrowUp class="size-4" />
      </Button>
    </div>
  )
}`

const buttonProps = [
	{
		description: "Visual style of the button",
		prop: "variant",
		type: `"primary" | "outline" | "ghost" | "link" | "destructive"`
	},
	{
		description: "Button size",
		prop: "size",
		type: "sm | lg"
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
			<DocSection
				title="Usage"
				id="usage"
				description="Import the component and use it with variant and size props. See how it works with icons and other props."
			>
				<CodePreviewTabs
					code={buttonDemoCode}
					name="button-demo-code"
					preview={(
						<div class="flex flex-wrap items-center gap-3">
							<Button variant="outline">Button</Button>
							<Button variant="outline" size="sm" aria-label="Submit">
								<ArrowUp class="size-4" />
							</Button>
						</div>
					)}
				/>
			</DocSection>

			<DocDivider />

			<ComponentCode name="button-install">
				<CodeBlock
					title="src/components/ui/button.tsx"
					code={buttonComponentCode}
					language="tsx"
				/>
			</ComponentCode>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<ComponentDemo
					name="button-variants-demo"
					href="#button-variants"
					title="Button variants"
					code={buttonVariantsCode}
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

				<ComponentDemo
					name="button-sizes-demo"
					href="#buttons-sizes"
					title="Button sizes"
					code={buttonSizesCode}
					preview={(
						<div class="flex flex-wrap items-center gap-3">
							<Button size="sm">Small</Button>
							<Button>Default</Button>
							<Button size="lg">Large</Button>
						</div>
					)}
				/>
			</section>

			<DocDivider />

			<PropsTable data={buttonProps}>
				<p class="text-base-content/60 text-xs">
					Button is polymorphic: it accepts all native button attributes and
					can be rendered as another element via
					{" "}
					<InlineCode>as</InlineCode>
					{" "}
					(see PolymorphicProps).
				</p>
			</PropsTable>
		</DocPageLayout>
	)
}
