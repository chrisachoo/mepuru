import type { RouteSectionProps } from "@solidjs/router"
import { Link, Meta, MetaProvider, Title } from "@solidjs/meta"
import { RoutesLayout } from "~/components/layout/routes-layout"

export default function BlocksLayout(props: Readonly<RouteSectionProps>) {
	return (
		<MetaProvider>
			<div>
				<Title>Blocks · Mēpuru</Title>
				<Link
					rel="canonical"
					href="/blocks/"
				/>
				<Meta
					name="description"
					content="Composed UI examples built with Mēpuru components—dashboards, forms, pricing, and more."
				/>
			</div>
			<RoutesLayout>{props.children}</RoutesLayout>
		</MetaProvider>
	)
}
