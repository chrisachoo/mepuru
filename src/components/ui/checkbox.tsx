import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

export type CheckboxProps = Omit<JSX.IntrinsicElements["input"], "type"> & {
	class?: string
	label?: JSX.Element
	error?: boolean
}

function Checkbox(props: CheckboxProps) {
	const [local, rest] = splitProps(props, ["class", "label", "error", "id"])
	const id = () =>
		local.id ?? `checkbox-${Math.random().toString(36).slice(2, 9)}`
	return (
		<div class={cn("form-control", local.class)}>
			<label
				class="label cursor-pointer justify-start gap-3"
				for={id()}
			>
				<input
					type="checkbox"
					id={id()}
					class={cn("checkbox rounded", local.error && "checkbox-error")}
					aria-invalid={local.error ?? undefined}
					aria-describedby={local.error ? `${id()}-error` : undefined}
					{...rest}
				/>
				{local.label != null && <span class="label-text">{local.label}</span>}
			</label>
		</div>
	)
}

export { Checkbox }
