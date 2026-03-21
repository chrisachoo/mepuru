import type { JSX, ValidComponent } from "solid-js"

/**
 * Props for polymorphic components.
 *
 * @template T Element or component to render via `as` (defaults to "div")
 * @template P Additional custom props
 *
 * - `as` switches the rendered element/component
 * - `children` is standard JSX content
 * - If `T` is an intrinsic element (e.g. "button"), its native props
 *   (including `ref`) are automatically included
 */
export type PolymorphicProps<
	T extends ValidComponent = "div",
	P = object
> = P & {
	as?: T
	children?: JSX.Element
} & (T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : object)
