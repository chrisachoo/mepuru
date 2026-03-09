import type { JSX } from "solid-js"
import { createSignal } from "solid-js"
import { InlineCode } from "~/components/docs/inline-code"
import { Tabs } from "~/components/ui/tabs"

type ComponentCodeProps = {
	name: string
	children: JSX.Element
}

export function ComponentCode(props: Readonly<ComponentCodeProps>) {
	const [installTab, setInstallTab] = createSignal("manual")

	return (
		<section class="mt-10 space-y-4">
			<h2 class="text-xl font-semibold text-base-content">Installation</h2>
			<Tabs
				name={props.name}
				value={installTab()}
				onChange={setInstallTab}
				tabs={[
					{
						content: (
							<div class="space-y-4">
								<p class="text-sm text-base-content/80">
									Copy and paste the following code into your project.
								</p>

								{props.children}

								<p class="text-sm text-base-content/80">
									Update the import paths to match your project (e.g.
									{" "}
									<InlineCode>~/lib/cn</InlineCode>
									,
									{" "}
									<InlineCode>~/lib/polymorphic</InlineCode>
									). You also need
									{" "}
									<InlineCode>class-variance-authority</InlineCode>
									{" "}
									and
									{" "}
									<InlineCode>clsx</InlineCode>
									{" "}
									+
									{" "}
									<InlineCode>tailwind-merge</InlineCode>
									{" "}
									for
									{" "}
									<InlineCode>cn</InlineCode>
									.
								</p>
							</div>
						),
						label: "Manual",
						value: "manual"
					},
					{
						content: (
							<div class="rounded-lg border border-base-300 bg-base-200/50 p-4">
								<p class="text-sm text-base-content/70">
									<span class="font-medium text-base-content">Coming soon.</span>
									{" "}
									Use the Manual tab to copy the component code until the CLI is available.
								</p>
							</div>
						),
						label: "CLI",
						value: "cli"
					}
				]}
			/>
		</section>
	)
}
