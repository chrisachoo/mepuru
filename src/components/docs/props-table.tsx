import type { ColumnDef } from "@tanstack/solid-table"
import type { JSX } from "solid-js"
import {
	createSolidTable,
	flexRender,
	getCoreRowModel
} from "@tanstack/solid-table"
import { For } from "solid-js"

type PropRow = {
	prop: string
	type: string
	default?: string
	description: string
}

const columns: ColumnDef<PropRow>[] = [
	{
		accessorKey: "prop",
		cell: info => (
			<span class="font-mono text-primary">{info.getValue<string>()}</span>
		),
		header: "Prop"
	},
	{
		accessorKey: "type",
		header: "Type"
	},
	{
		accessorKey: "default",
		cell: info => (
			<span class="text-base-content/60">{info.getValue<string>() ?? "—"}</span>
		),
		header: "Default"
	},
	{
		accessorKey: "description",
		header: "Description"
	}
]

type PropsTableProps = {
	data: PropRow[]
	polymorphic?: boolean
	children?: JSX.Element
	credit?: JSX.Element
}

export function PropsTable(props: Readonly<PropsTableProps>) {
	const table = createSolidTable({
		columns,
		get data() {
			return props.data
		},
		getCoreRowModel: getCoreRowModel()
	})

	return (
		<section class="mt-10 space-y-4">
			<div class="space-y-2 pb-2">
				<h2 class="text-xl font-semibold text-base-content">Props</h2>
				<div class="text-xs leading-relaxed opacity-80">{props.credit}</div>
			</div>

			<div class="overflow-x-auto rounded-xl border border-base-300">
				<table class="table-pin-rows table w-full text-sm">
					<thead>
						<For each={table.getHeaderGroups()}>
							{headerGroup => (
								<tr class="border-base-300 bg-base-200/80">
									<For each={headerGroup.headers}>
										{header => (
											<th class="text-left font-semibold text-base-content">
												{flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
											</th>
										)}
									</For>
								</tr>
							)}
						</For>
					</thead>

					<tbody>
						<For each={table.getRowModel().rows}>
							{row => (
								<tr class="border-base-300">
									<For each={row.getVisibleCells()}>
										{cell => (
											<td class="text-base-content/80">
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</td>
										)}
									</For>
								</tr>
							)}
						</For>
					</tbody>
				</table>
			</div>

			{props.children}
		</section>
	)
}
