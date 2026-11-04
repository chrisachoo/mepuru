import { solidStart } from "@solidjs/start/config"
import tailwindcss from "@tailwindcss/vite"

import { defineConfig } from "vite"

export default defineConfig({
	build: {
		rollupOptions: {
			input: "./index.html"
		}
	},
	plugins: [solidStart({ ssr: false }), tailwindcss()]
})
