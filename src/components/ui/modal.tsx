import type { JSX } from "solid-js"
import { Show, splitProps } from "solid-js"
import { cn } from "~/lib/cn"

export type ModalProps = {
	open: boolean
	onClose: () => void
	class?: string
	/** Content of the modal */
	children?: JSX.Element
	/** Accessible title (required for dialog) */
	title?: string
	/** If set, renders as a dialog with role="dialog" and focus trap semantics */
	role?: "alertdialog" | "dialog"
}

function Modal(props: ModalProps) {
	const [local, _rest] = splitProps(props, [
		"open",
		"onClose",
		"class",
		"children",
		"title",
		"role"
	])
	return (
		<Show when={local.open}>
			<div
				class="fixed inset-0 z-50 flex items-center justify-center p-4"
				role="presentation"
			>
				{/* Backdrop */}
				<button
					type="button"
					class="absolute inset-0 bg-black/50 transition-opacity"
					aria-label="Close modal"
					onClick={(e) => {
						e.currentTarget.blur()
						local.onClose()
					}}
				/>
				<div
					role={local.role ?? "dialog"}
					aria-modal="true"
					aria-labelledby={local.title ? "modal-title" : undefined}
					class={cn(
						"modal relative z-10 max-h-[90vh] w-full max-w-lg overflow-auto rounded-lg bg-base-100 shadow-xl",
						local.class
					)}
					onClick={(e) => e.stopPropagation()}
				>
					<div class="modal-box">
						<Show when={local.title}>
							<h2
								id="modal-title"
								class="text-lg font-semibold"
							>
								{local.title}
							</h2>
						</Show>
						{local.children}
					</div>
				</div>
			</div>
		</Show>
	)
}

export { Modal }
