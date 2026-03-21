import type { ParentProps } from "solid-js"

import { MetaProvider, Title } from "@solidjs/meta"
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import { PMProvider } from "~/context/pm"
import "./app.css"

function Layout(props: Readonly<ParentProps>) {
	return (
		<MetaProvider>
			<Title>Mepuru — Simple reactive UI for Solid</Title>
			<PMProvider>
				<Suspense>{props.children}</Suspense>
			</PMProvider>
		</MetaProvider>
	)
}

export default function App() {
	return (
		<Router root={props => <Layout>{props.children}</Layout>}>
			<FileRoutes />
		</Router>
	)
}
