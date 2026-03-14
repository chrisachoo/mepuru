import { Moon, Sun } from "lucide-solid"
import { Show } from "solid-js"
import { Button } from "~/components/ui/button"
import { useColorMode } from "~/hooks/use-color-mode"

export function ToggleTheme() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Button
			aria-label="Toggle theme"
			class="btn btn-square btn-ghost"
			onClick={toggleColorMode}
		>
			<span class="inline-flex size-4 items-center justify-center">
				<Show
					when={colorMode() === "light"}
					fallback={<Moon class="animate-theme-icon size-4" />}
				>
					<Sun class="animate-theme-icon size-4" />
				</Show>
			</span>
			<span class="sr-only">Toggle theme</span>
		</Button>
	)
}
