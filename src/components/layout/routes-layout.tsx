import type { JSX } from "solid-js"
import { useLocation } from "@solidjs/router"
import { For } from "solid-js"
import { LinkItem } from "~/components/ui/link-item"
import { linkItems } from "~/constants"

export function RoutesLayout(props: Readonly<{ children: JSX.Element }>) {
	const { pathname } = useLocation()

	return (
		<main class="h-screen overflow-hidden">
			<div class="drawer lg:drawer-open h-full">
				<input id="sidebar-drawer" type="checkbox" class="drawer-toggle hidden" />

				{/* MAIN CONTENT */}
				<div class="drawer-content flex h-full min-h-0 flex-col items-center justify-center">
					<div class="scroll-smooth scroll-p-20 h-full w-full overflow-y-auto">
						<div class="bg-base-100 flex justify-center rounded-sm">
							<div class="relative max-w-[100vw] px-6 pb-16 xl:pe-2">
								{props.children}
							</div>
						</div>
					</div>
				</div>

				{/* SIDEBAR */}
				<div
					class="drawer-side z-40 px-2 py-4"
					style={{ "scroll-behavior": "smooth", "scroll-padding-top": "5rem" }}
				>
					<label for="sidebar-drawer" aria-label="close sidebar" class="drawer-overlay" />

					<aside class="bg-base-100 min-h-screen w-80">
						<div class="space-y-8">
							<div class="space-y-2">
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

											<ul class="menu w-full px-4 py-0">
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

							<div class="w-full shrink-0 border-t border-base-200 py-4 mt-8">
								<p class="px-2 text-center text-xs text-base-content/50">
									Mēpuru · Simple UI for Solid
								</p>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</main>
	)
}