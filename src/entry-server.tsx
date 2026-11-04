// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server"

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta
						name="description"
						content="Mēpuru UI — Simple, predictable, and accessible UI components for Solid. Built with reactive primitives and styled with DaisyUI."
					/>
					<meta
						name="keywords"
						content="solid, solidjs, ui, components, daisyui, tailwind, accessible, reactive"
					/>
					<meta
						name="theme-color"
						content="#3b82f6"
					/>
					<meta
						name="og:title"
						property="og:title"
						content="Mēpuru UI — Simple UI for Solid"
					/>
					<meta
						name="og:description"
						property="og:description"
						content="A lightweight Solid component library focused on simplicity, accessibility, and predictable developer experience."
					/>
					<meta
						name="og:type"
						property="og:type"
						content="website"
					/>
					<meta
						name="og:url"
						property="og:url"
						content="https://chrisachoo.github.io/mepuru"
					/>
					<meta
						name="twitter:card"
						content="summary_large_image"
					/>
					<meta
						name="twitter:title"
						content="Mēpuru UI — Simple UI for Solid"
					/>
					<meta
						name="twitter:description"
						content="A lightweight component library for Solid with accessibility-first design and reactive primitives."
					/>
					<meta
						name="author"
						content="Chris Mabunda"
					/>
					<meta
						name="version"
						content="0.0.1"
					/>
					<link
						rel="icon"
						href="/favicon.ico"
					/>
					<link
						rel="canonical"
						href="https://chrisachoo.github.io/mepuru"
					/>
					{assets}
				</head>
				<body>
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
))
