import { A, useLocation } from "@solidjs/router"
import { Menu } from "lucide-solid"
import { createSignal, For, onCleanup, onMount, Show } from "solid-js"
import { LinkItem } from "~/components/docs/link-item"
import { MapleLeaf } from "~/components/layout/maple-leaf"
import { ToggleTheme } from "~/components/layout/toggle-theme"
import { linkItems } from "~/constants"
import { cn } from "~/lib/cn"

export function Header(props: Readonly<{ shouldShowLogo?: boolean }>) {
	const { pathname } = useLocation()

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

	return (
		<div
			class={cn(
				"drawer sticky top-0 z-50 w-full transition-shadow duration-100 print:hidden",
				isScrolled()
					? "bg-base-100/80 shadow-xs backdrop-blur"
					: "bg-transparent"
			)}
		>
			<input
				id="navbar-drawer"
				type="checkbox"
				class="drawer-toggle"
			/>
			<div class="drawer-content flex flex-col">
				<div class="navbar w-full">
					<div class="flex-none lg:hidden">
						<label
							for="navbar-drawer"
							aria-label="open sidebar"
							class="btn btn-square btn-ghost"
						>
							<Menu />
						</label>
					</div>

					<Show when={props.shouldShowLogo}>
						<div class="flex-1 px-2">
							<A
								href="/"
								class="text-amber-400"
							>
								<MapleLeaf />
							</A>
						</div>
					</Show>

					<div class="flex w-full justify-end">
						<div class="hidden flex-none lg:block">
							<ul class="menu menu-horizontal">
								<For
									each={[
										{ href: "/docs/install/", path: "Docs" },
										{ href: "/components/", path: "Components" }
									]}
								>
									{item => (
										<li>
											<A
												activeClass="text-primary"
												class="link"
												href={item.href}
												preload
											>
												{item.path}
											</A>
										</li>
									)}
								</For>
							</ul>
						</div>

						<div class="flex items-center gap-2">
							<ToggleTheme />

							<button
								aria-label="Visit GitHub repository"
								class="btn btn-square btn-ghost"
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
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="drawer-side">
				<label
					for="navbar-drawer"
					aria-label="close sidebar"
					class="drawer-overlay"
				/>

				<div class="min-h-full w-80 bg-base-200 p-4">
					<For each={linkItems}>
						{item => (
							<div class="grid space-y-1">
								<div class="flex items-center gap-2 px-2">
									<div class="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
										<item.icon class="size-4" />
									</div>
									<span class="text-sm font-semibold tracking-tight text-base-content capitalize">
										{item.path}
									</span>
								</div>
								<ul class="menu">
									<For each={item.group}>
										{link => (
											<LinkItem
												href={link.href}
												label={link.label}
												pathname={pathname}
											/>
										)}
									</For>
								</ul>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	)
}
