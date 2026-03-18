import type { JSX, ValidComponent } from "solid-js"

/**
 * Props for polymorphic components. T can be any HTML element or ValidComponent.
 * Element props (including ref) come from JSX.IntrinsicElements[T], so spreading
 * rest onto the root element works without type assertions when T is an intrinsic element.
 */
export type PolymorphicProps<
	T extends ValidComponent = "div",
	P = object
> = P & {
	as?: T
	children?: JSX.Element
} & (T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : object)
