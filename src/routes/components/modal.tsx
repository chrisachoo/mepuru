import { createSignal } from "solid-js"
import { ComponentDemo } from "~/components/docs/component-demo"
import { DocDivider } from "~/components/docs/doc-divider"
import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { Button } from "~/components/ui/button"
import {
	Card,
	CardAction,
	CardBody,
	CardDescription,
	CardTitle
} from "~/components/ui/card"
import {
	Modal,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalTitle,
	ModalTrigger
} from "~/components/ui/modal"

const modalDemoCode = `import { 
Modal, 
ModalContent, 
ModalDescription, 
ModalFooter, 
ModalTitle, 
ModalTrigger 
} from "~/components/ui/modal"

function ModalDemo() {
	return (
		<Modal id="my_modal_2" open={opened()}>
			<ModalTrigger onClick={() => setOpened(prev => !prev)}>Open modal</ModalTrigger>
			<ModalContent>
				<ModalTitle>Hello!</ModalTitle>
				<ModalDescription>Press ESC key or click the button below to close</ModalDescription>
			</ModalContent>
			<ModalFooter>
				<Button>Close</Button>
			</ModalFooter>
		</Modal>
	)
}
`

export default function ModalPage() {
	const [opened, setOpened] = createSignal<boolean>(false)
	// let dialog!: HTMLDialogElement

	return (
		<DocPageLayout
			title="Modal"
			description="Opens a menu when the trigger is clicked. Uses daisyUI dropdown
						classes and CVA for alignment. Visibility is controlled by CSS
						(focus)."
		>
			<ComponentDemo
				code={modalDemoCode}
				id="usage"
				name="input-usage-demo"
				preview={
					<div>
						<ModalTrigger>
							<Button
								variant="outline"
								onClick={() => setOpened((prev) => !prev)}
							>
								Open modal
							</Button>
						</ModalTrigger>
						<Modal open={opened()}>
							<ModalContent>
								<ModalTitle>Hello!</ModalTitle>
								<ModalDescription>
									Press ESC key or click the button below to close
								</ModalDescription>
								<ModalFooter>
									<Button>Close</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</div>
				}
			/>

			<div>
				<Card class="w-96">
					<CardBody>
						<CardTitle>Xsmall Card</CardTitle>
						<CardDescription>
							A card component has a figure, a body part, and inside body there
							are title and actions parts
						</CardDescription>
						<CardAction>
							<Button>Buy Now</Button>
						</CardAction>
					</CardBody>
				</Card>
			</div>

			<DocDivider />
		</DocPageLayout>
	)
}
