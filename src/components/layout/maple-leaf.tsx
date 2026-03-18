import { cn } from "~/lib/cn"

export function MapleLeaf(props: Readonly<{ class?: string }>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 2 24 16"
			class={cn("size-10 block", props.class)}
			aria-hidden
		>
			<path
				fill="currentColor"
				opacity="0.95"
				d="M12 2v8l-6 12h4l2-4 2 4h4L12 10V2z"
			/>
			<path
				fill="currentColor"
				opacity="0.75"
				d="M12 8L6 6l2 6 4-2-2-2z"
			/>
			<path
				fill="currentColor"
				opacity="0.65"
				d="M12 8l6-2-2 6-4-2 2-2z"
			/>
			<path
				d="M12 8 C12 10 12 12 12 16"
				fill="none"
				stroke="currentColor"
				stroke-width="1.15"
				stroke-linecap="round"
				opacity="0.55"
			/>
		</svg>
	)
}
