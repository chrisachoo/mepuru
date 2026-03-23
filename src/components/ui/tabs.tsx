import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"

import { cva } from "class-variance-authority"
import { For } from "solid-js"
import { cn } from "~/lib/cn"

const tabsVariants = cva("tabs", {
	defaultVariants: {
		size: "md",
		variant: "lift"
	},
	variants: {
		size: {
			large: "tabs-lg",
			md: "tabs-md",
			sm: "tabs-sm",
			xl: "tabs-xl",
			xs: "tabs-xs"
		},
		variant: {
			border: "tabs-border",
			box: "tabs-box",
			lift: "tabs-lift"
		}
	}
})

type TabItem = {
	value: string
	label: string
	content: JSX.Element
}

type TabsProps = {
	name: string
	tabs: TabItem[]
	value: string
	onChange: (value: string) => void
	class?: string
} & VariantProps<typeof tabsVariants>

function Tabs(props: Readonly<TabsProps>) {
	return (
		<div
			class={cn(
				tabsVariants({ size: props.size, variant: props.variant }),
				props.class
			)}
			role="tablist"
		>
			<For each={[...props.tabs]}>
				{tab => (
					<>
						<input
							type="radio"
							name={props.name}
							value={tab.value}
							aria-label={tab.label}
							checked={props.value === tab.value}
							onInput={() => props.onChange(tab.value)}
							class="tab"
							role="tab"
						/>
						<div
							class="tab-content rounded-b-lg border border-t-0 border-base-300 bg-base-100 p-4"
							role="tabpanel"
						>
							{tab.content}
						</div>
					</>
				)}
			</For>
		</div>
	)
}

export { Tabs, tabsVariants }
