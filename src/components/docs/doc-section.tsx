import type { JSX } from "solid-js"
import { A } from "@solidjs/router"
import { Hash } from "lucide-solid"

type DocSectionProps = {
	title: string
	id: string
	description?: JSX.Element
	children?: JSX.Element
}

export function DocSection(props: Readonly<DocSectionProps>) {
	return (
		<section class="mt-10 space-y-4" id={props.id}>
			<div class="grid space-y-1">
				<div class="flex items-center gap-2 pb-3 text-sm font-bold">
					<A
						href={`#${props.id}`}
						aria-label="Link to heading"
						class="bg-base-100 hover:bg-primary/10 text-base-content/50 hover:text-base-content border-primary/5 hover:border-primary/10 hover:shadow-base-200 inline-grid size-6 place-content-center rounded-sm border hover:shadow-sm"
						onClick={(e) => {
							e.preventDefault()
							e.stopPropagation()
							e.currentTarget.scrollIntoView({ behavior: "smooth" })
						}}
					>
						<Hash class="size-3" />
					</A>
					<h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold text-base-content">
						{props.title}
					</h2>
				</div>

				<p class="text-base-content/80 text-sm leading-relaxed">{props.description}</p>

			</div>

			{props.children}
		</section>
	)
}
