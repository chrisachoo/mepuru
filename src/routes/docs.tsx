import type { RouteSectionProps } from "@solidjs/router"
import { Link, Meta, MetaProvider, Title } from "@solidjs/meta"
import { RoutesLayout } from "~/components/layout/routes-layout"

export default function DocsLayout(props: Readonly<RouteSectionProps>) {
	return (
		<MetaProvider>
			<div>
				<Title>Documentation — Mēpuru</Title>
				<Link
					rel="canonical"
					href="https://chrisachoo.github.io/mepuru/docs"
				/>
				<Meta
					name="description"
					content="Learn how to use Mēpuru components in your Solid projects. Installation guides, best practices, and component documentation."
				/>
				<Meta
					name="og:title"
					property="og:title"
					content="Documentation — Mēpuru UI"
				/>
				<Meta
					name="og:description"
					property="og:description"
					content="Complete guides and documentation for Mēpuru's Solid component library."
				/>
				<Meta
					name="og:type"
					property="og:type"
					content="website"
				/>
				<Meta
					name="og:url"
					property="og:url"
					content="https://chrisachoo.github.io/mepuru/docs"
				/>
			</div>
			<RoutesLayout>{props.children}</RoutesLayout>
		</MetaProvider>
	)
}
