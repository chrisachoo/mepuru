import { DocPageLayout } from "~/components/docs/doc-page-layout"
import { ComponentShowcase } from "~/components/docs/showcase"
import {
	FieldDescription,
	FieldLegend,
	Fieldset
} from "~/components/ui/fieldset"
import { Input } from "~/components/ui/input"

const fieldsetDemoCode = `import { FieldDescription, FieldLegend, Fieldset } from "~/components/ui/fieldset"

function FormField() {

	return (
		<form class="grid space-y-4">
			<Fieldset>
				<FieldLegend>Username: </FieldLegend>
				<Input type="text" id="username" name="username" placeholder="Username" />
				<FieldDescription>Optional</FieldDescription>
			</Fieldset>

			<Fieldset>
				<FieldLegend>Password:</FieldLegend>
				<Input type="password" id="password" name="name" placeholder="Password" autocomplete="new-password" />
				<FieldDescription>Optional</FieldDescription>
			</Fieldset>
		</form>
	)
}
`

export default function FieldsetPage() {
	return (
		<DocPageLayout
			title="Fieldset"
			description="Fieldset is a container for grouping related form elements. It includes fieldset-legend as a title and label as a description."
		>
			<ComponentShowcase
				code={fieldsetDemoCode}
				id="usage"
				name="card-usage-demo"
				title="Usage"
				preview={
					<form class="grid w-full space-y-4">
						<Fieldset>
							<FieldLegend>Username: </FieldLegend>
							<Input
								type="text"
								id="username"
								name="username"
								placeholder="Username"
							/>
							<FieldDescription>Optional</FieldDescription>
						</Fieldset>

						<Fieldset>
							<FieldLegend>Password:</FieldLegend>
							<Input
								type="password"
								id="password"
								name="name"
								placeholder="Password"
								autocomplete="new-password"
							/>
							<FieldDescription>Optional</FieldDescription>
						</Fieldset>
					</form>
				}
			/>
		</DocPageLayout>
	)
}
