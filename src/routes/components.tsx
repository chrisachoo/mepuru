import type { RouteSectionProps } from "@solidjs/router"
import { Link, Meta, MetaProvider, Title } from "@solidjs/meta"
import { RoutesLayout } from "~/components/layout/routes-layout"

export default function ComponentsLayout(props: Readonly<RouteSectionProps>) {
	return (
		<MetaProvider>
			<div>
				<Title>Components — Mēpuru</Title>
				<Link
					rel="canonical"
					href="https://chrisachoo.github.io/mepuru/components"
				/>
				<Meta
					name="description"
					content="Browse Mēpuru's accessible Solid UI components. Simple, predictable, and copy-paste ready components built with reactive primitives."
				/>
				<Meta
					name="og:title"
					property="og:title"
					content="Components — Mēpuru UI"
				/>
				<Meta
					name="og:description"
					property="og:description"
					content="Explore accessible Solid components designed for simplicity and developer experience."
				/>
				<Meta
					name="og:type"
					property="og:type"
					content="website"
				/>
				<Meta
					name="og:url"
					property="og:url"
					content="https://chrisachoo.github.io/mepuru/components"
				/>
			</div>
			<RoutesLayout>{props.children}</RoutesLayout>
		</MetaProvider>
	)
}
