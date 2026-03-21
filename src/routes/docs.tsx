import type { RouteSectionProps } from "@solidjs/router"
import { Link, Meta, MetaProvider, Title } from "@solidjs/meta"
import { RoutesLayout } from "~/components/layout/routes-layout"

export default function DocsLayout(props: Readonly<RouteSectionProps>) {
	return (
		<MetaProvider>
			<div>
				<Title>Documents</Title>
				<Link
					rel="canonical"
					href="http://solidjs.com/"
				/>
				<Meta
					name="example"
					content="whatever"
				/>
			</div>
			<RoutesLayout>{props.children}</RoutesLayout>
		</MetaProvider>
	)
}
