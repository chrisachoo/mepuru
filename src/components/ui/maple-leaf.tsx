import { cn } from "~/lib/cn"

export function MapleLeaf(props: Readonly<{ class?: string }>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			class={cn("size-10", props.class)}
			aria-hidden
		>
			<path
				fill="currentColor"
				d="M12 2v8l-6 12h4l2-4 2 4h4L12 10V2z"
				opacity="0.95"
			/>
			<path
				fill="currentColor"
				d="M12 8L6 6l2 6 4-2-2-2z"
				opacity="0.9"
			/>
			<path
				fill="currentColor"
				d="M12 8l6-2-2 6-4-2 2-2z"
				opacity="0.9"
			/>
		</svg>
	)
}
