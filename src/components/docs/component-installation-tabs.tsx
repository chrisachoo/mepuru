import type { JSX } from "solid-js"
import { createSignal } from "solid-js"
import { InlineCode } from "~/components/docs/inline-code"
import { Tabs } from "~/components/ui/tabs"
import { Badge } from "../ui/badge"

type ComponentInstallationTabsProps = {
	name: string
	cliComponent: string
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
						content: (
							<div class="relative overflow-hidden rounded-xl border border-primary/20 bg-linear-to-br from-primary/10 via-base-200/60 to-base-200/40 p-6 shadow-sm">
								<div
									aria-hidden
									class="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-primary/15 blur-3xl"
								/>
								<div
									aria-hidden
									class="pointer-events-none absolute -bottom-8 -left-8 size-28 rounded-full bg-secondary/10 blur-2xl"
								/>
								<div class="relative flex flex-col gap-5">
									<div class="flex flex-wrap items-center gap-2">
										<Badge variant="primary">
											Coming soon
										</Badge>
										<Badge size="sm">{props.cliComponent}</Badge>
									</div>

									<div class="space-y-2">
										<h3 class="text-lg font-semibold tracking-tight text-base-content">
											No CLI yet — same flow as Manual
										</h3>
										<p class="max-w-prose text-sm leading-relaxed text-base-content/75">
											A one-shot install command is not available for
											{" "}
											<InlineCode>{props.cliComponent}</InlineCode>
											{" "}
											yet. Switch to the
											{" "}
											<span class="font-medium text-base-content">Manual</span>
											{" "}
											tab for the source; it is the same two-step workflow
											summarized here.
										</p>
									</div>

									<div class="rounded-lg border border-base-300/80 bg-base-100/60 p-4">
										<p class="mb-3 text-xs font-semibold uppercase tracking-wide text-base-content/50">
											How Manual install works
										</p>
										<ol class="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-base-content/80 marker:font-semibold marker:text-base-content">
											<li>
												Copy and paste the code from the
												{" "}
												<span class="font-medium text-base-content">Manual</span>
												{" "}
												tab into your project (use the path shown on the code
												block, e.g.
												{" "}
												<InlineCode>
													components/ui/
													{props.cliComponent}
													.tsx
												</InlineCode>
												).
											</li>
											<li>
												Update the import paths to match your project setup (e.g.
												{" "}
												<InlineCode>~/lib/cn</InlineCode>
												,
												{" "}
												<InlineCode>~/lib/polymorphic</InlineCode>
												). You also need
												{" "}
												<InlineCode>class-variance-authority</InlineCode>
												,
												{" "}
												<InlineCode>clsx</InlineCode>
												, and
												{" "}
												<InlineCode>tailwind-merge</InlineCode>
												{" "}
												for
												{" "}
												<InlineCode>cn</InlineCode>
												—details stay with the code on Manual so nothing drifts
												out of sync.
											</li>
										</ol>
									</div>
								</div>
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
