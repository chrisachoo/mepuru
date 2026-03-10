import { A } from "@solidjs/router"
import { Moon, Sun } from "lucide-solid"
import { createMemo, createSignal, onCleanup, onMount, Show } from "solid-js"
import { Button } from "~/components/ui/button"
import { Divider } from "~/components/ui/divider"
import { MapleLeaf } from "~/components/ui/maple-leaf"
import { useColorMode } from "~/hooks/use-color-mode"
import { cn } from "~/lib/cn"

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
		"bg-base-100/80 backdrop-blur shadow-xs": isScrolled(),
		"bg-transparent": !isScrolled()
	}))

	return (
		<div
			class={cn(
				"sticky top-0 z-50 w-full transition-shadow duration-100 print:hidden",
				headerClasses()
			)}
		>
			<nav
				class="navbar flex w-full items-center justify-between px-6"
				aria-label="navigation"
			>
				<A
					href="/"
					class="font-semibold text-amber-500"
				>
					<MapleLeaf />
				</A>

				<div class="flex items-center gap-8">
					<div class="hidden gap-8 text-sm md:flex">
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
					</div>

					<Divider
						orientation="horizontal"
						class="hidden md:block"
					/>

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
									fallback={
										<Moon class="animate-theme-icon h-[1.2rem] w-[1.2rem]" />
									}
								>
									<Sun class="animate-theme-icon h-[1.2rem] w-[1.2rem]" />
								</Show>
							</span>
							<span class="sr-only">Toggle theme</span>
						</Button>

						<Button
							aria-label="visit github repo"
							class="btn-circle"
							variant="ghost"
						>
							<svg
								class="size-4 shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
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
				</div>
			</nav>
		</div>
	)
}
