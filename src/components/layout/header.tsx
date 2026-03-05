import { A } from "@solidjs/router"
import { Moon, Sun } from "lucide-solid"
import { createMemo, createSignal, onCleanup, onMount, Show } from "solid-js"
import { Button } from "~/components/ui/button"
import { Divider } from "~/components/ui/divider"
import { MapleLeaf } from "~/components/ui/maple-leaf"
import { useColorMode } from "~/hooks/use-color-mode"

export function Header() {
	const { colorMode, toggleColorMode } = useColorMode()
	const [isScrolled, setIsScrolled] = createSignal(false)

	onMount(() => {
		const wrap = document.createElement("div")
		wrap.setAttribute("aria-hidden", "true")
		wrap.style.cssText = "height: 0; overflow: visible; pointer-events: none;"
		const sentinel = document.createElement("div")
		sentinel.style.cssText = "height: 1px; width: 100%;"
		wrap.appendChild(sentinel)
		document.body.prepend(wrap)

		const observer = new IntersectionObserver(
			([entry]) => setIsScrolled(!entry?.isIntersecting),
			{ rootMargin: "10px 0px 0px 0px", threshold: 0 }
		)
		observer.observe(sentinel)

		onCleanup(() => {
			observer.disconnect()
			wrap.remove()
		})
	})

	const headerClasses = createMemo(() => ({
		"bg-base-100/80 backdrop-blur-lg shadow-sm": isScrolled(),
		"bg-transparent": !isScrolled(),
		"sticky top-0 z-50 w-full transition-all duration-300": true
	}))

	return (
		<header classList={headerClasses()}>
			<div class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
				<A href="/" class="flex items-center gap-2 font-semibold text-amber-500">
					<MapleLeaf />
				</A>

				<div class="flex items-center gap-8">
					<div class="gap-8">
						<nav
							class="hidden gap-8 md:flex text-sm"
							aria-label="Main"
						>
							<A
								href="/docs/installation"
								activeClass="text-primary"
								class="hover:text-primary"
								preload
							>
								Docs
							</A>
							<A
								href="/docs/components"
								activeClass="text-primary"
								class="hover:text-primary"
								preload
							>
								Components
							</A>
						</nav>
					</div>
					<Divider orientation="horizontal" />
					<Button
						onClick={toggleColorMode}
						variant="ghost"
						size="sm"
						aria-label="Toggle theme"
						class="size-9 p-0"
					>
						<span class="inline-flex h-[1.2rem] w-[1.2rem] items-center justify-center">
							<Show
								when={colorMode() === "light"}
								fallback={
									<Moon class="h-[1.2rem] w-[1.2rem] animate-theme-icon" />
								}
							>
								<Sun class="h-[1.2rem] w-[1.2rem] animate-theme-icon" />
							</Show>
						</span>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</div>
			</div>
		</header>
	)
}
