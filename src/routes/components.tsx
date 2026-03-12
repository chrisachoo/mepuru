import type { RouteSectionProps } from "@solidjs/router"
import { Link, Meta, MetaProvider, Title } from "@solidjs/meta"
import { Header } from "~/components/layout/header"
import { RoutesLayout } from "~/components/layout/routes-layout"

export default function ComponentsLayout(props: Readonly<RouteSectionProps>) {
	return (
		<MetaProvider>
			<div class="Components">
				<Title>Components</Title>
				<Link
					rel="canonical"
					href="http://solidjs.com/"
				/>
				<Meta
					name="example"
					content="whatever"
				/>
			</div>
			<Header />
			<RoutesLayout>{props.children}</RoutesLayout>
		</MetaProvider>
	)
}
