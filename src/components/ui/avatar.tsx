import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const avatarVariants = cva("", {
	defaultVariants: {
		size: "sm"
	},
	variants: {
		size: {
			lg: "w-24",
			md: "w-18",
			sm: "w-12"
		},
		variant: {
			heart: "mask mask-heart",
			hexagon: "mask mask-hexagon-2",
			ring: "ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2",
			squircle: "mask mask-squircle"
		}
	}
})

type AvatarProps = JSX.IntrinsicElements["div"] &
	VariantProps<typeof avatarVariants>

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
			<div class="w-24 rounded-full bg-neutral text-neutral-content">
				<span
					class={cn("text-3xl", local.class)}
					{...rest}
				>
					{props.children}
				</span>
			</div>
		</div>
	)
}

export { Avatar, AvatarFallback, AvatarGroup, AvatarImage }
