import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const dropdownVariant = cva("dropdown space-y-1 space-x-1", {
	defaultVariants: {},
	variants: {
		align: {
			bottom: "dropdown-bottom",
			center: "dropdown-center",
			end: "dropdown-end",
			left: "dropdown-left",
			right: "dropdown-right",
			start: "dropdown-start",
			top: "dropdown-top"
		}
	}
})

type DropdownProps = {
	name: JSX.Element
	class?: string
	children?: JSX.Element
} & VariantProps<typeof dropdownVariant> & JSX.IntrinsicElements["div"]

function Dropdown(props: DropdownProps) {
	const [local, rest] = splitProps(props, ["align", "class", "children", "name"])
	return (
		<div class={cn(dropdownVariant({ align: local.align }), local.class)} {...rest}>
			<div
				tabIndex={0}
				role="button"
				class="btn -1"
				aria-expanded="false"
				aria-haspopup="true"
			>
				{local.name}
			</div>

			<ul tabIndex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 min-w-52 p-2 shadow-sm">
				{local.children}
			</ul>
		</div>
	)
}

export type DropdownItemProps = JSX.IntrinsicElements["li"] & {
	class?: string
	onClick?: () => void
}

function DropdownItem(props: DropdownItemProps) {
	const [local, rest] = splitProps(props, ["class", "onClick", "children"])
	return (
		<li {...rest}>
			<a
				role="menuitem"
				href="#"
				class={cn("rounded-md", local.class)}
				onClick={(e) => {
					e.preventDefault()
					local.onClick?.()
					const trigger = e.currentTarget.closest(".dropdown")?.querySelector("[role=button]")
					if (trigger instanceof HTMLElement)
						trigger.focus()
				}}
			>
				{local.children}
			</a>
		</li>
	)
}

export { Dropdown, DropdownItem }
