import type { JSX, ValidComponent } from "solid-js"

export type PolymorphicProps<
	T extends ValidComponent = "div",
	P = object
> = P & {
	as?: T
	children?: JSX.Element
} & (T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : object)
