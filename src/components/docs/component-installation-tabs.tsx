import type { JSX } from "solid-js"
import { createSignal } from "solid-js"
import { InlineCode } from "~/components/docs/inline-code"
import { Tabs } from "~/components/ui/tabs"

type ComponentInstallationTabsProps = {
	name: string
	cliComponent?: string
	children: JSX.Element
}

export function ComponentInstallationTabs(
	props: Readonly<ComponentInstallationTabsProps>
) {
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
						content: props.cliComponent
							? (
									<div class="space-y-3 rounded-lg border border-base-300 bg-base-200/50 p-4">
										<p class="text-sm text-base-content/80">
											From the
											{" "}
											<strong class="font-medium text-base-content">mepuru</strong>
											{" "}
											repo root, copy the UI file into your project (creates
											parent folders if needed):
										</p>
										<pre class="overflow-x-auto rounded-md bg-base-300/40 p-3 font-mono text-xs text-base-content">
											<code>
												bun run copy-component
												{" "}
												{props.cliComponent}
												{" "}
												./src/components/ui
											</code>
										</pre>
										<p class="text-sm text-base-content/70">
											Last argument is the destination directory; defaults to
											{" "}
											<InlineCode>./src/components/ui</InlineCode>
											{" "}
											if omitted. Then fix imports such as
											{" "}
											<InlineCode>~/lib/cn</InlineCode>
											{" "}
											to match your app.
										</p>
									</div>
								)
							: (
									<div class="rounded-lg border border-base-300 bg-base-200/50 p-4">
										<p class="text-sm text-base-content/70">
											<span class="font-medium text-base-content">
												CLI snippet not set for this page.
											</span>
											{" "}
											Use the Manual tab to copy the component source, or run
											{" "}
											<InlineCode>
												bun run copy-component &lt;name&gt; [dest]
											</InlineCode>
											{" "}
											from this repository with a component file under
											{" "}
											<InlineCode>src/components/ui/&lt;name&gt;.tsx</InlineCode>
											.
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
