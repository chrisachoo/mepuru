import { A } from "@solidjs/router"
import { ExternalLink } from "lucide-solid"

export function DaisyCredit(props: Readonly<{ href: string }>) {
	return (
		<p class="flex items-start gap-2 text-xs text-base-content/70 leading-relaxed">
			<ExternalLink class="size-4 shrink-0 opacity-60"/>
			<span>
				This component is built with DaisyUI classes. For all available styles,
				variants, and customization options, refer to the
				{" "}
				<A class="link font-medium text-primary" preload href={props.href}>
					DaisyUI documentation
				</A>
				.
			</span>
		</p>
	)
}
