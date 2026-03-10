import type { ParentProps } from "solid-js"

import { MetaProvider, Title } from "@solidjs/meta"
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import "./app.css"

function Head(props: Readonly<ParentProps>) {
	return (
		<MetaProvider>
			<Title>Mepuru — Simple reactive UI for Solid</Title>
			<Suspense>{props.children}</Suspense>
		</MetaProvider>
	)
}

export default function App() {
	return (
		<Router root={props => <Head>{props.children}</Head>}>
			<FileRoutes />
		</Router>
	)
}
