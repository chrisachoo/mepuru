import { createSignal } from "solid-js"

export function useCopyFeedback() {
	const [copied, setCopied] = createSignal(false)
	const [justCopied, setJustCopied] = createSignal(false)

	const copy = async (text: string) => {
		await navigator.clipboard.writeText(text.trim())
		setCopied(true)
		setJustCopied(true)
		setTimeout(() => setJustCopied(false), 300)
		setTimeout(() => setCopied(false), 2000)
	}

	return { copied, copy, justCopied }
}
