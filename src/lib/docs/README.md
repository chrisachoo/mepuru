# Docs system

Single source of truth for the docs site. Scale to 50+ components without mess.

## Registry (`registry.ts`)

- **docSections** – Top-level doc nav (Introduction, Installation, Components).
- **componentDocs** – One entry per component: `slug`, `name`, `description`, optional `category`.
- **componentHref(entry)** – Full URL for a component doc.

**Adding a component:** Add one object to `componentDocs`. Create the route file `src/routes/docs/components/[slug].tsx`. Sidebar and Components list update automatically.

**Grouping at scale:** Use `category` on entries (e.g. `"Forms"`, `"Overlay"`) and group the list by category when you have many components.

## Patterns

1. **Preview | Code** – Use `<ComponentDemo name="unique-name" preview={...} code="..." />`; tab state is internal. For other tab groups use `<Tabs value={tab} onChange={setTab} tabs={...} />` with parent-owned state.
2. **Page-level file actions** – Pass `sourceCode` and `sourceFilePath` to `DocPageLayout` to show **Copy source**, **Copy Markdown**, **Open in ChatGPT**, and **Open in Claude** for the entire file (not per code block). Optional `githubUrl` adds “View on GitHub”.
3. **DocPageLayout** – Wrap the page in `<DocPageLayout title="..." description="..." sourceCode={...} sourceFilePath="...">` for consistent hero, file actions, and width.

## File layout

- `src/lib/docs/` – Registry and shared doc data.
- `src/components/docs/` – Doc-only UI: `ComponentDemo`, `DocPageLayout`.
- `src/components/ui/code-block.tsx` – Code block with optional AI actions.
- `src/routes/docs/` – Routes; component pages under `docs/components/*.tsx`.
