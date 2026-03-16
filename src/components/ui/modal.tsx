import type { JSX, ValidComponent } from "solid-js"
import type { PolymorphicProps } from "~/lib/polymorphic"
import { splitProps } from "solid-js"
import { Dynamic } from "solid-js/web"
import { cn } from "~/lib/cn"

function Modal(props: Readonly<JSX.IntrinsicElements["dialog"]>) {
	const [local, rest] = splitProps(props, ["class", "ref"])

	return (
		<dialog
			ref={local.ref}
			class={cn("modal", local.class)}
			{...rest}
		/>
	)
}

function ModalTrigger<T extends ValidComponent = "button">(
	props: PolymorphicProps<T>
) {
	const [local, rest] = splitProps(props, ["as"])

	const Component = () => local.as ?? "button"

	return (
		<Dynamic
			component={Component()}
			{...rest}
		/>
	)
}

function ModalContent(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<div
			class={cn("modal-box", local.class)}
			{...rest}
		/>
	)
}

function ModalTitle(props: Readonly<JSX.IntrinsicElements["h3"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<h3
			class={cn("text-lg font-bold", local.class)}
			{...rest}
		/>
	)
}

function ModalDescription(props: Readonly<JSX.IntrinsicElements["p"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<p
			class={cn("py-4", local.class)}
			{...rest}
		/>
	)
}

function ModalFooter(props: Readonly<JSX.IntrinsicElements["form"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<form
			method="dialog"
			class={cn("modal-action", local.class)}
			{...rest}
		/>
	)
}

function ModalBackdrop() {
	return (
		<form
			method="dialog"
			class="modal-backdrop"
		>
			<button>close</button>
		</form>
	)
}

export {
	Modal,
	ModalBackdrop,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalTitle,
	ModalTrigger
}
