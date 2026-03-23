import { A } from "@solidjs/router"
import { Component, House, ListMinus } from "lucide-solid"
import { ArticleCodeBlock } from "~/components/docs/code/article-code-block"
import { ComponentInstallationTabs } from "~/components/docs/component-installation-tabs"
import { ComponentShowcase } from "~/components/docs/component-showcase"
import { DocSectionDivider } from "~/components/docs/doc-section-divider"
import { PropsTable } from "~/components/docs/props-table"
import { PageLayout } from "~/components/layout/page-layout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "~/components/ui/breadcrumb"

const breadcrumbComponentCode = `import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "~/lib/cn"

function Breadcrumb(props: Readonly<JSX.IntrinsicElements["div"]>) {
	const [local, rest] = splitProps(props, ["class"])

	return (
		<div class={cn("breadcrumb text-sm", local.class)} {...rest} />
	)
}

function BreadcrumbList(props: Readonly<JSX.IntrinsicElements["ul"]>) {
	return <ul {...props} />
}

function BreadcrumbItem(props: Readonly<JSX.IntrinsicElements["li"]>) {
	return <li {...props} />
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbList }
`

const breadcrumbDemoCode = `import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "~/components/ui/breadcrumb"
import { A } from "@solidjs/router"

export function BreadcrumbDemo() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem><A href="#">Home</A></BreadcrumbItem>
				<BreadcrumbItem><A href="#">Components</A></BreadcrumbItem>
				<BreadcrumbItem>Breadcrumb</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
`

const breadcrumbWithIconCode = `import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "~/components/ui/breadcrumb"
import { A } from "@solidjs/router"

export function BreadcrumbWithIcons() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem class="flex items-center gap-1">
					<House class="size-4" />
					<A href="#">Home</A>
				</BreadcrumbItem>

				<BreadcrumbItem class="flex items-center gap-1">
					<Component class="size-4" />
					<A href="#">Component</A>
				</BreadcrumbItem>

				<BreadcrumbItem class="flex items-center gap-1">
					<ListMinus class="size-4" />
					Breadcrumb
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
`

const breadcrumbsWithMaxWidthCode = `import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "~/components/ui/breadcrumb"
import { A } from "@solidjs/router"

export function BreadcrumbWithMaxWidth() {
	return (
		<Breadcrumb class="max-w-xs">
			<BreadcrumbList>
				<BreadcrumbItem class="flex items-center gap-1">
					<A href="#">Home</A>
				</BreadcrumbItem>

				<BreadcrumbItem class="flex items-center gap-1">
					<A href="#">Dashboard</A>
				</BreadcrumbItem>

				<BreadcrumbItem class="flex items-center gap-1">
					<A href="#">Components</A>
				</BreadcrumbItem>

				<BreadcrumbItem class="flex items-center gap-1">
					Breadcrumb
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
`

const breadcrumbsProps = [
	{
		description: "Breadcrumb max-width",
		prop: "maxWidth",
		type: "string"
	},
	{
		description: "Additional CSS classes",
		prop: "class",
		type: "string"
	}
]

export default function BreadcrumbPage() {
	return (
		<PageLayout
			title="Breadcrumb"
			description="Displays the path to the current resource using a hierarchy of links."
			sourceFilePath="src/components/ui/breadcrumb.tsx"
		>
			<ComponentShowcase
				id="breadcrumb-demo"
				name="breadcrumb-demo"
				code={breadcrumbDemoCode}
				preview={(
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem><A href="#">Home</A></BreadcrumbItem>
							<BreadcrumbItem><A href="#">Components</A></BreadcrumbItem>
							<BreadcrumbItem>Breadcrumb</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				)}
			/>

			<DocSectionDivider />

			<ComponentInstallationTabs
				cliComponent="breadcrumb"
				name="breadcrumb-install"
			>
				<ArticleCodeBlock
					code={breadcrumbComponentCode}
					language="tsx"
					name="components/ui/breadcrumb.tsx"
					expand
				/>
			</ComponentInstallationTabs>

			<DocSectionDivider />

			<section class="mt-10 space-y-8">
				<ComponentShowcase
					code={breadcrumbWithIconCode}
					id="breadcrumb-with-icons"
					name="breadcrumb-with-icons"
					preview={(
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem class="flex items-center gap-1">
									<House class="size-4" />
									<A href="#">Home</A>
								</BreadcrumbItem>

								<BreadcrumbItem class="flex items-center gap-1">
									<Component class="size-4" />
									<A href="#">Component</A>
								</BreadcrumbItem>

								<BreadcrumbItem class="flex items-center gap-1">
									<ListMinus class="size-4" />
									Breadcrumb
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					)}
					title="Breadcrumbs with icons"
				/>

				<ComponentShowcase
					code={breadcrumbsWithMaxWidthCode}
					id="breadcrumbs-with-max-width"
					name="breadcrumbs-with-max-width"
					preview={(
						<Breadcrumb class="max-w-xs">
							<BreadcrumbList>
								<BreadcrumbItem class="flex items-center gap-1">
									<A href="#">Home</A>
								</BreadcrumbItem>

								<BreadcrumbItem class="flex items-center gap-1">
									<A href="#">Dashboard</A>
								</BreadcrumbItem>

								<BreadcrumbItem class="flex items-center gap-1">
									<A href="#">Components</A>
								</BreadcrumbItem>

								<BreadcrumbItem class="flex items-center gap-1">
									Breadcrumb
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					)}
					title="Breadcrumbs with max-width"
				/>
			</section>

			<DocSectionDivider />

			<PropsTable
				data={breadcrumbsProps}
				daisyHref="https://daisyui.com/components/breadcrumb/"
			/>
		</PageLayout>
	)
}
