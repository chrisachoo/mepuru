import { PageLayout } from "~/components/layout/page-layout"
import { ComponentShowcase } from "~/components/docs/showcase"
import { Textarea } from "~/components/ui/textarea"

const textareaDemoCode = `import { Textarea } from "~/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}
`

export default function TextareaPage() {
	return (
		<PageLayout
			title="Textarea"
			description="Multi-line text input. Uses daisyUI textarea classes and native textarea behavior."
		>
			<ComponentShowcase
				code={textareaDemoCode}
				id="usage"
				name="button-demo-code"
				preview={(
					<Textarea placeholder="Type your message here." />
				)}
			/>
		</PageLayout>
	)
}
