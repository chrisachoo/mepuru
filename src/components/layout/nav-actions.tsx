import { Moon, Sun } from "lucide-solid"
import { Show } from "solid-js"
import { Button } from "~/components/ui/button"
import { useColorMode } from "~/hooks/use-color-mode"

export function NavActions() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<div class="flex items-center gap-2">
			<Button
				aria-label="Toggle theme"
				class="btn-circle"
				onClick={toggleColorMode}
				variant="ghost"
			>
				<span class="inline-flex h-[1.2rem] w-[1.2rem] items-center justify-center">
					<Show
						when={colorMode() === "light"}
						fallback={<Moon class="animate-theme-icon h-[1.2rem] w-[1.2rem]" />}
					>
						<Sun class="animate-theme-icon h-[1.2rem] w-[1.2rem]" />
					</Show>
				</span>
				<span class="sr-only">Toggle theme</span>
			</Button>

			<Button
				aria-label="Visit GitHub repository"
				class="btn-circle"
				variant="ghost"
			>
				<svg
					class="size-4 shrink-0"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<g
						stroke-linejoin="round"
						stroke-linecap="round"
						stroke-width="2"
						fill="none"
						stroke="currentColor"
					>
						<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
					</g>
				</svg>
			</Button>
		</div>
	)
}
