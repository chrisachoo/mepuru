import type { VariantProps } from "class-variance-authority"
import type { JSX, ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const cardVariants = cva("card w-full bg-base-100 card-border", {
	defaultVariants: {
		size: "default"
	},
	variants: {
		size: {
			default: "card-md",
			lg: "card-lg",
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
	const [local, rest] = splitProps(props, ["class", "children", "size"])
	return (
		<div
			class={cn(cardVariants({ size: local.size }), local.class)}
			data-slot="card"
			{...rest}
		>
			<div class="card-body">{local.children}</div>
		</div>
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
		<div
			class="card-body"
			data-slot="card-body"
			{...rest}
		>
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
		<figure
			data-slot="card-figure"
			{...rest}
		>
			<img
				src={local.src}
				alt={local.alt}
				class={cn("h-full w-full object-cover")}
			/>
		</figure>
	)
}
