import { A } from "@solidjs/router"
import { Menu } from "lucide-solid"
import {
	createMemo,
	createSignal,
	For,
	onCleanup,
	onMount,
	Show
} from "solid-js"
import { NavActions } from "~/components/layout/nav-actions"
import { Divider } from "~/components/ui/divider"
import { MapleLeaf } from "~/components/ui/maple-leaf"
import { indexNavLinks } from "~/constants"
import { cn } from "~/lib/cn"

export function Header(props: Readonly<{mobileDrawerId?: string}>) {
	const mobileDrawerId = () => props.mobileDrawerId
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
				aria-label="Main navigation"
			>
				<div class="flex items-center gap-3">
					<Show when={mobileDrawerId()}>
						{drawer => (
							<label
								for={drawer()}
								class="drawer-button flex items-center gap-2 md:hidden"
								aria-label="Open menu"
							>
								<Menu
									class="size-5"
									aria-hidden="true"
								/>
								<span class="text-sm font-medium text-base-content">Menu</span>
							</label>
						)}
					</Show>

					<A
						href="/"
						class={cn("font-semibold text-amber-500 hidden md:inline-flex")}
						aria-label="Home"
					>
						<MapleLeaf />
					</A>

					<div class="hidden gap-8 text-sm md:flex">
						<For each={indexNavLinks}>
							{link => (
								<A
									href={link.href}
									activeClass="text-primary"
									class="hover:text-primary"
									preload
								>
									{link.label}
								</A>
							)}
						</For>
					</div>
				</div>

				<div class="flex items-center gap-8">
					<Divider
						orientation="horizontal"
						class="hidden md:block"
					/>
					<NavActions />
				</div>
			</nav>
		</div>
	)
}
