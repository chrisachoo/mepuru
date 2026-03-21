import { ComponentCode } from "~/components/docs/component-code"
import { DocDivider } from "~/components/docs/doc-divider"
import { PropsTable } from "~/components/docs/props-table"
import { ComponentShowcase } from "~/components/docs/showcase"
import { CodeBlock } from "~/components/layout/code-block"
import { PageLayout } from "~/components/layout/page-layout"
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarImage
} from "~/components/ui/avatar"

const avatarComponentCode = `import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"
import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const avatarVariants = cva("", {
	defaultVariants: {
		size: "sm",
		variant: "rounded-full"
	},
	variants: {
		size: {
			lg: "w-24",
			md: "w-18",
			sm: "w-12"
		},
		variant: {
			"heart": "mask mask-heart",
			"hexagon": "mask mask-hexagon-2",
			"ring": "ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2",
			"rounded": "rounded-xl",
			"rounded-full": "rounded-full",
			"squircle": "mask mask-squircle"
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
`

const avatarDemoCode = `import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "~/components/ui/avatar"

export function AvatarDemo() {
	return (
		<div class="flex w-full items-center justify-center gap-4">
			<Avatar>
				<AvatarImage src="https://picsum.photos/id/680/200/300" alt="Milada Vigerova" />
				<AvatarFallback>MV</AvatarFallback>
			</Avatar>

			<AvatarGroup>
				<Avatar>
					<AvatarImage src="https://picsum.photos/id/669/200/300" alt="Luke Pamer" />
					<AvatarFallback>LK</AvatarFallback>
				</Avatar>

				<Avatar>
					<AvatarImage src="https://picsum.photos/id/656/200/300" alt="Jessica Polar" />
					<AvatarFallback>JP</AvatarFallback>
				</Avatar>

				<Avatar>
					<AvatarImage src="https://picsum.photos/id/633/200/300" alt="Doug Robichaud" />
					<AvatarFallback>DR</AvatarFallback>
				</Avatar>
			</AvatarGroup>
		</div>
	)
}
`

const avatarWithGroupCounterCode = `import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "~/components/ui/avatar"

export function AvatarDemo() {
	return (
		<div class="flex w-full items-center justify-center gap-4">
			<AvatarGroup class="-space-x-6">
				<Avatar>
					<AvatarImage src="https://picsum.photos/id/669/200/300" alt="Luke Pamer" />
					<AvatarFallback>LK</AvatarFallback>
				</Avatar>

				<Avatar>
					<AvatarImage src="https://picsum.photos/id/656/200/300" alt="Jessica Polar" />
					<AvatarFallback>JP</AvatarFallback>
				</Avatar>

				<Avatar>
					<AvatarImage src="https://picsum.photos/id/633/200/300" alt="Doug Robichaud" />
					<AvatarFallback>DR</AvatarFallback>
				</Avatar>

				<AvatarFallback>+99</AvatarFallback>
			</AvatarGroup>
		</div>
	)
}
`
const avatarWithRingCode = `import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "~/components/ui/avatar"

export function AvatarDemo() {
	return (
		<div class="flex w-full items-center justify-center gap-4">
			<Avatar variant="ring">
				<AvatarImage src="https://picsum.photos/id/669/200/300" alt="Luke Pamer" />
				<AvatarFallback>LK</AvatarFallback>
			</Avatar>

			<Avatar variant="ring">
				<AvatarImage src="https://picsum.photos/id/656/200/300" alt="Jessica Polar" />
				<AvatarFallback>JP</AvatarFallback>
			</Avatar>
		</div>
	)
}
`
const avatarWithPresenceIndicatorCode = `import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "~/components/ui/avatar"

export function AvatarDemo() {
	return (
		<div class="flex w-full items-center justify-center gap-4">
			<Avatar class="avatar-online">
				<AvatarImage src="https://picsum.photos/id/669/200/300" alt="Luke Pamer" />
				<AvatarFallback>LK</AvatarFallback>
			</Avatar>

			<Avatar class="avatar-offline">
				<AvatarImage src="https://picsum.photos/id/656/200/300" alt="Jessica Polar" />
				<AvatarFallback>JP</AvatarFallback>
			</Avatar>
		</div>
	)
}
`

const avatarProps = [
	{
		description: "Avatar custom sizes",
		prop: "size",
		type: `"sm" | "md" | "lg"`
	},
	{
		default: "circle",
		description: "Avatar variants",
		prop: "variant",
		type: `"heart" | "hexagon" | "ring" | "circle" | "rounded" | "squircle"`
	},
	{
		description: "Button size",
		prop: "size",
		type: `"sm" | "lg"`
	},
	{
		description: "Additional CSS classes",
		prop: "class",
		type: "string"
	}
]

export default function AvatarPage() {
	return (
		<PageLayout
			title="Avatar"
			description="User or entity image with optional fallback. Uses daisyUI avatar classes."
		>
			<ComponentShowcase
				id="usage"
				name="button-demo-code"
				code={avatarDemoCode}
				preview={(
					<div class="flex w-full items-center justify-center gap-4">
						<Avatar>
							<AvatarImage
								src="https://picsum.photos/id/680/200/300"
								alt="Milada Vigerova"
							/>
							<AvatarFallback>MV</AvatarFallback>
						</Avatar>

						<AvatarGroup>
							<Avatar>
								<AvatarImage
									src="https://picsum.photos/id/669/200/300"
									alt="Luke Pamer"
								/>
								<AvatarFallback>LK</AvatarFallback>
							</Avatar>

							<Avatar>
								<AvatarImage
									src="https://picsum.photos/id/656/200/300"
									alt="Jessica Polar"
								/>
								<AvatarFallback>JP</AvatarFallback>
							</Avatar>

							<Avatar>
								<AvatarImage
									src="https://picsum.photos/id/633/200/300"
									alt="Doug Robichaud"
								/>
								<AvatarFallback>DR</AvatarFallback>
							</Avatar>
						</AvatarGroup>
					</div>
				)}
			/>

			<DocDivider />

			<ComponentCode name="button-install">
				<CodeBlock
					code={avatarComponentCode}
					language="tsx"
					name="components/ui/avatar.tsx"
					expand
				/>
			</ComponentCode>

			<DocDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					title="Avatar group with counter"
					id="avatar-group-with-counter"
					name="avatar-group-with-counter"
					code={avatarWithGroupCounterCode}
					preview={(
						<div class="flex w-full items-center justify-center gap-4">
							<AvatarGroup class="-space-x-6">
								<Avatar>
									<AvatarImage
										src="https://picsum.photos/id/669/200/300"
										alt="Luke Pamer"
									/>
									<AvatarFallback>LK</AvatarFallback>
								</Avatar>

								<Avatar>
									<AvatarImage
										src="https://picsum.photos/id/656/200/300"
										alt="Jessica Polar"
									/>
									<AvatarFallback>JP</AvatarFallback>
								</Avatar>

								<Avatar>
									<AvatarImage
										src="https://picsum.photos/id/633/200/300"
										alt="Doug Robichaud"
									/>
									<AvatarFallback>DR</AvatarFallback>
								</Avatar>

								<AvatarFallback>+99</AvatarFallback>
							</AvatarGroup>
						</div>
					)}
				/>

				<ComponentShowcase
					title="Avatar with ring"
					id="avatar-with-ring"
					name="avatar-with-ring"
					code={avatarWithRingCode}
					preview={(
						<div class="flex w-full items-center justify-center gap-4">
							<Avatar variant="ring">
								<AvatarImage
									src="https://picsum.photos/id/669/200/300"
									alt="Luke Pamer"
								/>
								<AvatarFallback>LK</AvatarFallback>
							</Avatar>

							<Avatar variant="ring">
								<AvatarImage
									src="https://picsum.photos/id/656/200/300"
									alt="Jessica Polar"
								/>
								<AvatarFallback>JP</AvatarFallback>
							</Avatar>
						</div>
					)}
				/>

				<ComponentShowcase
					title="Avatar with presence indicator"
					id="avatar-with-presence-indicator"
					name="avatar-with-presence-indicator"
					code={avatarWithPresenceIndicatorCode}
					preview={(
						<div class="flex w-full items-center justify-center gap-4">
							<Avatar class="avatar-online">
								<AvatarImage
									src="https://picsum.photos/id/669/200/300"
									alt="Luke Pamer"
								/>
								<AvatarFallback>LK</AvatarFallback>
							</Avatar>

							<Avatar class="avatar-offline">
								<AvatarImage
									src="https://picsum.photos/id/656/200/300"
									alt="Jessica Polar"
								/>
								<AvatarFallback>JP</AvatarFallback>
							</Avatar>
						</div>
					)}
				/>
			</section>

			<DocDivider />

			<PropsTable
				data={avatarProps}
				daisyHref="https://daisyui.com/components/avatar/"
			/>
		</PageLayout>
	)
}
