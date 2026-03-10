import type { ParentProps } from "solid-js"

import { GlobalDrawerContent } from "~/components/layout/global-drawer-content"
import { Header } from "~/components/layout/header"
import { APP_DRAWER_ID } from "~/constants"

export function AppLayout(props: Readonly<ParentProps>) {
	return (
		<div class="drawer min-h-screen w-full">
			<input
				id={APP_DRAWER_ID}
				type="checkbox"
				class="drawer-toggle"
				autocomplete="off"
				aria-label="Toggle menu"
			/>
			<div class="drawer-content flex min-h-screen flex-col bg-base-100">
				<Header
					mobileDrawerId={APP_DRAWER_ID}
				/>
				{props.children}
			</div>

			<div class="drawer-side z-50 lg:hidden">
				<label
					for={APP_DRAWER_ID}
					aria-label="Close menu"
					class="drawer-overlay"
				>
					<span class="sr-only">Close menu</span>
				</label>
				<GlobalDrawerContent />
			</div>
		</div>
	)
}
