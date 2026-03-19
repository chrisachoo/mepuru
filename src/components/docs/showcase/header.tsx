import { A } from "@solidjs/router"
import { Hash } from "lucide-solid"
import { Show } from "solid-js"
import { cn } from "~/lib/cn"

export function Header(props: Readonly<{ id: string, title?: string }>) {
	return (
		<Show when={props.title}>
			<div class="flex items-center gap-2 pb-2 text-sm font-bold">
				<A
					href={`#${props.id}`}
					aria-label="Link to heading"
					class={cn(
						"inline-grid size-6 place-content-center rounded-sm border border-primary/5 bg-base-100 text-base-content/50",
						"hover:border-primary/10 hover:bg-primary/10 hover:text-base-content hover:shadow-sm hover:shadow-base-200"
					)}
					onClick={(e) => {
						e.preventDefault()
						e.stopPropagation()
						e.currentTarget.scrollIntoView({ behavior: "smooth" })
					}}
				>
					<Hash class="size-3" />
				</A>

				<h3 class="text-lg font-semibold">{props.title}</h3>
			</div>
		</Show>
	)
}
