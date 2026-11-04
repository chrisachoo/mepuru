import { createEffect, createSignal } from "solid-js"

const COLOR_MODE_KEY = "color-mode"

export type ColorMode = "dark" | "light"

function getPreferredColorMode(): ColorMode {
	if (globalThis.window === undefined)
		return "light"
	return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light"
}

function applyColorMode(mode: ColorMode) {
	if (typeof document === "undefined")
		return
	const root = document.documentElement
	root.dataset.theme = mode
	if (mode === "dark") {
		root.classList.add("dark")
	}
	else {
		root.classList.remove("dark")
	}
}

function getStoredOrCurrent(): ColorMode {
	if (globalThis.window === undefined)
		return "light"
	const stored
		= (localStorage.getItem(COLOR_MODE_KEY) as ColorMode | null) ?? undefined
	const currentAttr
		= (document.documentElement.dataset.theme as ColorMode | null) ?? undefined
	return stored ?? currentAttr ?? getPreferredColorMode()
}

export function useColorMode() {
	const [colorMode, setColorMode] = createSignal<ColorMode>("light")

	createEffect(() => {
		if (typeof document === "undefined")
			return
		const mode = getStoredOrCurrent()
		setColorMode(mode)
		applyColorMode(mode)
	})

	function toggleColorMode() {
		if (globalThis.window === undefined)
			return
		const next: ColorMode = colorMode() === "dark" ? "light" : "dark"
		applyColorMode(next)
		localStorage.setItem(COLOR_MODE_KEY, next)
		setColorMode(next)
	}

	return { colorMode, toggleColorMode }
}
