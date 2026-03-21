import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const avatarVariants = cva("", {
	defaultVariants: {
		size: "sm",
		variant: "circle"
	},
	variants: {
		size: {
			lg: "w-24",
			md: "w-18",
			sm: "w-12"
		},
		variant: {
			circle: "rounded-full",
			heart: "mask mask-heart",
			hexagon: "mask mask-hexagon-2",
			ring: "ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2",
			rounded: "rounded-xl",
			squircle: "mask mask-squircle"
		}
	}
})

type AvatarProps = JSX.IntrinsicElements["div"]
	& VariantProps<typeof avatarVariants>

function Avatar(props: Readonly<AvatarProps>) {
	const [local, rest] = splitProps(props, ["class", "size", "variant"])

	return (
		<div class="avatar">
			<div
				class={cn(
					avatarVariants({ size: props.size, variant: props.variant }),
					local.class
				)}
				{...rest}
			/>
		</div>
	)
}

function AvatarImage(props: Readonly<JSX.IntrinsicElements["img"]>) {
	const [local, rest] = splitProps(props, ["src", "alt"])

	return (
		<img
			src={local.src}
			alt={local.alt}
			{...rest}
		/>
	)
}

function AvatarGroup(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<div
			class={cn("avatar-group -space-x-6", local.class)}
			{...rest}
		/>
	)
}

function AvatarFallback(props: Readonly<JSX.IntrinsicElements["span"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<div class="avatar avatar-placeholder">
			<div class="w-12 rounded-full bg-neutral text-neutral-content">
				<span
					class={cn(local.class)}
					{...rest}
				>
					{props.children}
				</span>
			</div>
		</div>
	)
}

export { Avatar, AvatarFallback, AvatarGroup, AvatarImage }
