import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

function Table(props: Readonly<JSX.IntrinsicElements["table"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<table
			class={cn("table", local.class)}
			{...rest}
		/>
	)
}

function TableContainer(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<div
			class={cn(
				"overflow-x-auto rounded-box border border-base-content/5 bg-base-100",
				local.class
			)}
			{...rest}
		/>
	)
}

function TableHeader(props: Readonly<JSX.IntrinsicElements["thead"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<thead
			class={cn(local.class)}
			{...rest}
		/>
	)
}

function TableBody(props: Readonly<JSX.IntrinsicElements["tbody"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<tbody
			class={cn(local.class)}
			{...rest}
		/>
	)
}

function TableFooter(props: Readonly<JSX.IntrinsicElements["tfoot"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<tfoot
			class={cn(local.class)}
			{...rest}
		/>
	)
}

function TableHead(props: Readonly<JSX.IntrinsicElements["th"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<th
			class={cn(local.class)}
			{...rest}
		/>
	)
}

function TableRow(props: Readonly<JSX.IntrinsicElements["tr"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<tr
			class={cn(local.class)}
			{...rest}
		/>
	)
}

function TableCell(props: Readonly<JSX.IntrinsicElements["td"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<td
			class={cn(local.class)}
			{...rest}
		/>
	)
}

function TableCaption(props: Readonly<JSX.IntrinsicElements["caption"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<caption
			class={cn("text-muted-foreground mt-4 text-sm", local.class)}
			{...rest}
		/>
	)
}

export {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow
}
