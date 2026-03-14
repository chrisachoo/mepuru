import type { JSX } from "solid-js"
import { A, useLocation } from "@solidjs/router"
import { For } from "solid-js"
import { Header } from "~/components/layout/header"
import { LinkItem } from "~/components/ui/link-item"
import { linkItems } from "~/constants"
import { MapleLeaf } from "../ui/maple-leaf"

function Aside(props: Readonly<{ children: JSX.Element }>) {
	return (
		<aside class="h-full w-72 bg-base-100">
			<nav class="navbar sticky top-0 z-50 w-full bg-base-100 shadow-xs transition-shadow duration-100 print:hidden">
				<div class="flex-1 px-2">
					<A
						href="/"
						class="text-amber-400"
					>
						<MapleLeaf />
					</A>
				</div>
			</nav>

			<div class="space-y-2 px-4 py-8">{props.children}</div>

			<footer class="navbar sticky bottom-0 z-50 w-full border-t border-base-300 bg-base-100 transition-shadow duration-100 print:hidden">
				<p class="px-2 text-center text-xs text-base-content/50">
					Mēpuru · Simple UI for Solid
				</p>
			</footer>
		</aside>
	)
}

export function RoutesLayout(props: Readonly<{ children: JSX.Element }>) {
	const { pathname } = useLocation()

	return (
		<div class="drawer h-full lg:drawer-open">
			<input
				id="sidebar-drawer"
				type="checkbox"
				class="drawer-toggle hidden"
			/>

			<div class="drawer-content">
				<Header />
				<div class="scroll-p-20 overflow-y-auto scroll-smooth">
					<div class="relative max-w-[100vw] px-6 py-16 xl:pe-2">
						{props.children}
					</div>
				</div>
			</div>

			<div class="scrollbar-none drawer-side z-40 scroll-p-20 scroll-smooth border-r border-base-300">
				<label
					for="sidebar-drawer"
					aria-label="close sidebar"
					class="drawer-overlay"
				/>

				<Aside>
					<For each={linkItems}>
						{(item) => (
							<div class="grid space-y-2">
								<div class="flex items-center gap-2 px-2">
									<div class="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
										<item.icon class="size-4" />
									</div>

									<span class="text-sm font-semibold tracking-tight text-base-content capitalize">
										{item.path}
									</span>
								</div>

								<ul class="menu w-full px-4 py-0">
									<For each={item.group}>
										{(link) => (
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
				</Aside>
			</div>
		</div>
	)
}
