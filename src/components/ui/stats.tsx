import type { VariantProps } from "class-variance-authority"
import type { JSX } from "solid-js"

import { cva } from "class-variance-authority"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

const statsVariants = cva("stats shadow", {
	defaultVariants: {
		direction: "horizontal"
	},
	variants: {
		direction: {
			horizontal: "stats-horizontal",
			responsive: "stats-vertical lg:stats-horizontal",
			vertical: "stats-vertical"
		}
	}
})

type StatsProps = {
	children: JSX.Element
	class?: string
} & VariantProps<typeof statsVariants>
& Omit<JSX.IntrinsicElements["div"], "children" | "class">

function Stats(props: Readonly<StatsProps>) {
	const [local, rest] = splitProps(props, ["class", "direction", "children"])
	return (
		<div
			class={cn(statsVariants({ direction: local.direction }), local.class)}
			data-slot="stats"
			{...rest}
		>
			{local.children}
		</div>
	)
}

function Stat(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])
	return (
		<div
			class={cn("stat", local.class)}
			data-slot="stat"
			{...rest}
		>
			{local.children}
		</div>
	)
}

function StatTitle(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])
	return (
		<div
			class={cn("stat-title", local.class)}
			{...rest}
		>
			{local.children}
		</div>
	)
}

function StatValue(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])
	return (
		<div
			class={cn("stat-value", local.class)}
			{...rest}
		>
			{local.children}
		</div>
	)
}

function StatDesc(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])
	return (
		<div
			class={cn("stat-desc", local.class)}
			{...rest}
		>
			{local.children}
		</div>
	)
}

function StatFigure(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])
	return (
		<div
			class={cn("stat-figure", local.class)}
			{...rest}
		>
			{local.children}
		</div>
	)
}

function StatActions(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class", "children"])
	return (
		<div
			class={cn("stat-actions", local.class)}
			{...rest}
		>
			{local.children}
		</div>
	)
}

export { Stat, StatActions, StatDesc, StatFigure, Stats, statsVariants, StatTitle, StatValue }
export type { StatsProps }
