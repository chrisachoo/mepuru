import type { JSX } from "solid-js"
import type { PackageManager } from "~/lib/package-manager"
import { createContext, createSignal, onMount, useContext } from "solid-js"
import {
	PACKAGE_MANAGER_STORAGE_KEY,
	parsePackageManager
} from "~/lib/package-manager"

const PMContext = createContext<{
	packageManager: () => PackageManager
	setPackageManager: (value: PackageManager) => void
}>()

const DEFAULT_PACKAGE_MANAGER: PackageManager = "pnpm"

export function PMProvider(props: Readonly<{ children: JSX.Element }>) {
	const [packageManager, setPackageManagerSignal]
		= createSignal<PackageManager>(DEFAULT_PACKAGE_MANAGER)

	onMount(() => {
		const stored = parsePackageManager(
			localStorage.getItem(PACKAGE_MANAGER_STORAGE_KEY) ?? ""
		)
		if (stored)
			setPackageManagerSignal(stored)
	})

	const setPackageManager = (value: PackageManager) => {
		localStorage.setItem(PACKAGE_MANAGER_STORAGE_KEY, value)
		setPackageManagerSignal(value)
	}

	return (
		<PMContext.Provider value={{ packageManager, setPackageManager }}>
			{props.children}
		</PMContext.Provider>
	)
}

export function usePackageManager() {
	const ctx = useContext(PMContext)

	if (!ctx)
		throw new Error("usePackageManager must be used within PMProvider")

	return ctx
}
