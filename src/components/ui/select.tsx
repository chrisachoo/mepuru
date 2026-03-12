import type { JSX } from "solid-js"
import { For, splitProps } from "solid-js"
import { cn } from "~/lib/cn"

export type SelectProps = JSX.IntrinsicElements["select"] & {
	class?: string
	error?: boolean
	options: Array<{ value: string; label: string }>
}

function Select(props: SelectProps) {
	const [local, rest] = splitProps(props, [
		"class",
		"error",
		"options",
		"children"
	])

	return (
		<select
			class={cn(
				"select-bordered select w-full rounded-lg focus:outline focus:outline-2 focus:outline-offset-2",
				local.error && "select-error",
				local.class
			)}
			aria-invalid={local.error ?? undefined}
			{...rest}
		>
			{local.children}
			<For each={local.options}>
				{(opt) => <option value={opt.value}>{opt.label}</option>}
			</For>
		</select>
	)
}

export { Select }
