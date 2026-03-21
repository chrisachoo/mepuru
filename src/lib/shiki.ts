import { createHighlighter } from "shiki"

export const DOC_CODE_LANGS = [
	"bash",
	"css",
	"javascript",
	"tsx",
	"typescript"
] as const

export type DocCodeLang = (typeof DOC_CODE_LANGS)[number]

const DOC_THEME = "tokyo-night" as const

let highlighter: Awaited<ReturnType<typeof createHighlighter>>

export async function getShiki() {
	if (!highlighter) {
		highlighter = await createHighlighter({
			langs: [...DOC_CODE_LANGS],
			themes: [DOC_THEME]
		})
	}
	return highlighter
}

export async function highlight(code: string, lang: DocCodeLang = "tsx") {
	const shiki = await getShiki()
	return shiki.codeToHtml(code, {
		lang,
		theme: DOC_THEME
	})
}
