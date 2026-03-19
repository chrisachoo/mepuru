import { ComponentCode } from "~/components/docs/component-code"
import { DocDivider } from "~/components/docs/doc-divider"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { InlineCode } from "~/components/docs/inline-code"
import { PropsTable } from "~/components/docs/props-table"
import { ComponentShowcase } from "~/components/docs/showcase"
import { CodeBlock } from "~/components/layout/code-block"
import { Button } from "~/components/ui/button"
import {
	Card,
	CardAction,
	CardBody,
	CardDescription,
	CardFigure,
	CardTitle
} from "~/components/ui/card"

const cardComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX, ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const cardVariants = cva("card w-full bg-base-100 card-border", {
  defaultVariants: { size: "md" },
  variants: {
    size: {
      lg: "card-lg",
      md: "card-md",
      sm: "card-sm",
      xl: "card-xl",
      xs: "card-xs"
    }
  }
})

type CardProps = {
  children: JSX.Element
  class?: string
} & VariantProps<typeof cardVariants>

export function Card<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CardProps>
) {
  const [local, rest] = splitProps(props, ["class", "size"])
  return (
    <div
      class={cn(cardVariants({ size: local.size }), local.class)}
      data-slot="card"
      {...rest}
    />
  )
}

type CardTitleProps = {
  children: JSX.Element | string
  class?: string
}

export function CardTitle<T extends ValidComponent = "h2">(
  props: PolymorphicProps<T, CardTitleProps>
) {
  const [local, rest] = splitProps(props, ["class", "children"])
  return (
    <h2
      class={cn("card-title", local.class)}
      data-slot="card-title"
      aria-level="2"
      {...rest}
    >
      {local.children}
    </h2>
  )
}

type CardDescriptionProps = {
  children: JSX.Element | string
  class?: string
}

export function CardDescription<T extends ValidComponent = "p">(
  props: PolymorphicProps<T, CardDescriptionProps>
) {
  const [local, rest] = splitProps(props, ["class", "children"])
  return (
    <p
      class={cn("text-sm text-primary-content", local.class)}
      data-slot="card-description"
      {...rest}
    >
      {local.children}
    </p>
  )
}

type CardActionProps = {
  children: JSX.Element
  class?: string
}

export function CardAction<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CardActionProps>
) {
  const [local, rest] = splitProps(props, ["class"])
  return (
    <div
      class={cn("card-actions justify-end", local.class)}
      data-slot="card-action"
      {...rest}
    />
  )
}

type CardBodyProps = {
  children: JSX.Element
  class?: string
}

export function CardBody<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CardBodyProps>
) {
  const [local, rest] = splitProps(props, ["class", "children"])
  return (
    <div class="card-body" data-slot="card-body" {...rest}>
      {local.children}
    </div>
  )
}

type CardFigureProps = {
  src: string
  alt: string
  class?: string
}

export function CardFigure<T extends ValidComponent = "figure">(
  props: PolymorphicProps<T, CardFigureProps>
) {
  const [local, rest] = splitProps(props, ["alt", "src", "class"])
  return (
    <figure data-slot="card-figure" {...rest}>
      <img
        src={local.src}
        alt={local.alt}
        class={cn("h-full w-full object-cover")}
      />
    </figure>
  )
}
`

const cardUsageCode = `import {
  Card,
  CardTitle,
  CardDescription,
  CardBody,
  CardAction
} from "~/components/ui/card"

export function CardDemo() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short description or supporting text.</CardDescription>
        <CardAction>
          <button class="btn btn-primary btn-sm">Action</button>
        </CardAction>
      </CardBody>
    </Card>
  )
}
`

const cardWithFigureCode = `import {
  Card,
  CardFigure,
  CardBody,
  CardTitle,
  CardDescription,
  CardAction
} from "~/components/ui/card"

export function CardWithImageDemo() {
  return (
    <Card class="max-w-sm">
      <CardFigure
        src="https://picsum.photos/400/200"
        alt="Card image"
      />
      <CardBody>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description text.</CardDescription>
        <CardAction>
          <button class="btn btn-primary btn-sm">Action</button>
        </CardAction>
      </CardBody>
    </Card>
  )
}
`

const cardSizesCode = `import { Card, CardBody, CardTitle } from "~/components/ui/card"

export function CardSizesDemo() {
  return (
    <div class="flex flex-wrap gap-4">
      <Card size="xs">
        <CardBody>
          <CardTitle>Extra small</CardTitle>
        </CardBody>
      </Card>
      <Card size="sm">
        <CardBody>
          <CardTitle>Small</CardTitle>
        </CardBody>
      </Card>
      <Card size="md">
        <CardBody>
          <CardTitle>Default</CardTitle>
        </CardBody>
      </Card>
      <Card size="lg">
        <CardBody>
          <CardTitle>Large</CardTitle>
        </CardBody>
      </Card>
    </div>
  )
}
`

const cardProps = [
	{
		default: "md",
		description: "Card size variant",
		prop: "size",
		type: `"xs" | "sm" | "md" | "lg" | "xl"`
	},
	{ description: "Additional CSS classes", prop: "class", type: "string" },
	{ description: "Card content (slots)", prop: "children", type: "JSX.Element" }
]

export default function CardPage() {
	return (
		<DocPageLayout
			title="Card"
			description="Content container built with daisyUI card classes. Compose Card, CardTitle, CardDescription, CardBody, CardAction, and CardFigure for flexible layouts."
			sourceCode={cardComponentCode}
			sourceFilePath="src/components/ui/card.tsx"
		>
			<ComponentShowcase
				code={cardUsageCode}
				id="usage"
				name="card-usage-demo"
				preview={(
					<div class="flex w-full items-center justify-center">
						<Card class="max-w-96">
							<CardBody>
								<CardTitle>Card title</CardTitle>
								<CardDescription>
									Short description or supporting text.
								</CardDescription>
								<CardAction>
									<Button>Action</Button>
								</CardAction>
							</CardBody>
						</Card>
					</div>
				)}
			/>

			<DocDivider />

			<ComponentCode name="card-install">
				<CodeBlock
					code={cardComponentCode}
					language="tsx"
					name="components/ui/card.tsx"
					expand
				/>
			</ComponentCode>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={cardWithFigureCode}
					id="card-with-figure"
					name="card-with-figure-demo"
					title="With figure"
					preview={(
						<div class="flex w-full items-center justify-center">
							<Card class="max-w-96">
								<CardFigure
									src="https://picsum.photos/400/200"
									alt="Card image"
								/>
								<CardBody>
									<CardTitle>Title</CardTitle>
									<CardDescription>Description text.</CardDescription>
									<CardAction>
										<Button variant="primary">Action</Button>
									</CardAction>
								</CardBody>
							</Card>
						</div>
					)}
				/>

				<ComponentShowcase
					code={cardSizesCode}
					id="card-sizes"
					name="card-sizes-demo"
					title="Sizes"
					preview={(
						<div class="flex w-full flex-col items-center justify-center gap-4">
							<Card
								size="xs"
								class="max-w-96"
							>
								<CardBody>
									<CardTitle>Extra small</CardTitle>
									<CardDescription>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									</CardDescription>
									<CardAction>
										<Button variant="primary">Action</Button>
									</CardAction>
								</CardBody>
							</Card>
							<Card
								size="sm"
								class="max-w-96"
							>
								<CardBody>
									<CardTitle>Small</CardTitle>
									<CardDescription>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									</CardDescription>
									<CardAction>
										<Button variant="primary">Action</Button>
									</CardAction>
								</CardBody>
							</Card>
							<Card
								size="md"
								class="max-w-96"
							>
								<CardBody>
									<CardTitle>Default</CardTitle>
									<CardDescription>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									</CardDescription>
									<CardAction>
										<Button variant="primary">Action</Button>
									</CardAction>
								</CardBody>
							</Card>
						</div>
					)}
				/>

				<ComponentShowcase
					code={cardWithFigureCode}
					id="card-with-image-overlay"
					name="card-with-image-overlay"
					title="Card with image overlay"
					preview={(
						<div class="flex w-full items-center justify-center">
							<Card class="image-full w-96 bg-base-100 shadow-sm">
								<CardFigure
									src="https://picsum.photos/400/200"
									alt="Card image"
								/>
								<CardBody>
									<CardTitle>Title</CardTitle>
									<CardDescription>Description text.</CardDescription>
									<CardAction>
										<Button variant="primary">Action</Button>
									</CardAction>
								</CardBody>
							</Card>
						</div>
					)}
				/>
			</section>

			<DocDivider />

			<PropsTable data={cardProps} daisyHref="https://daisyui.com/components/card/">
				<p class="mt-2 text-xs text-base-content/60">
					<strong>Subcomponents:</strong>
					{" "}
					<InlineCode>CardTitle</InlineCode>
					,
					{" "}
					<InlineCode>CardDescription</InlineCode>
					,
					<InlineCode>CardBody</InlineCode>
					,
					<InlineCode>CardAction</InlineCode>
					,
					<InlineCode>CardFigure</InlineCode>
					{" "}
					(requires
					{" "}
					<InlineCode>src</InlineCode>
					{" "}
					and
					<InlineCode>alt</InlineCode>
					). All are polymorphic and accept native attributes.
				</p>
			</PropsTable>
		</DocPageLayout>
	)
}
