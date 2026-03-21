#!/usr/bin/env bun
/* eslint-disable no-console -- CLI success output */
/**
 * Copy a single file from this repo's `src/components/ui/<name>.tsx` into the user's project.
 * Usage: bun run copy-component <name> [destination-dir]
 * Example: bun run copy-component button ./src/components/ui
 */
import { copyFile, mkdir } from "node:fs/promises"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const repoRoot = resolve(fileURLToPath(new URL("..", import.meta.url)))
const uiDir = join(repoRoot, "src/components/ui")

const componentName = process.argv[2]?.replace(/\.tsx$/i, "")
const destArg = process.argv[3]

if (!componentName) {
	console.error(
		"Usage: bun run copy-component <component-name> [destination-dir]\n"
		+ "Example: bun run copy-component accordion ./src/components/ui"
	)
	process.exit(1)
}

const sourcePath = join(uiDir, `${componentName}.tsx`)
const destDir = resolve(process.cwd(), destArg ?? "./src/components/ui")
const destPath = join(destDir, `${componentName}.tsx`)

try {
	await mkdir(dirname(destPath), { recursive: true })
	await copyFile(sourcePath, destPath)
	console.log(`Copied ${sourcePath}\n  → ${destPath}`)
}
catch (e) {
	const msg = e instanceof Error ? e.message : String(e)
	console.error(`Failed: ${msg}`)
	process.exit(1)
}
