# Docs system

Single source of truth for the docs site. Scale to 50+ components without mess.

## Component page standard

Every component doc page must follow this flow so developers get clear, copy-paste-ready instructions.

1. **Introduction** – Brief description of the component (one or two sentences). Use `DocPageLayout` `title` and `description`.
2. **Installation** – Clear instructions: which file to create (e.g. `src/components/ui/button.tsx`) and a single code block with the full component source. Use `<ComponentCode name="..."><CodeBlock code={...} language="tsx" expand /></ComponentCode>` and, when available, `sourceCode` + `sourceFilePath` on `DocPageLayout` for page-level copy actions.
3. **Usage** – Minimal, copy-pasteable examples via `<ComponentDemo>` (Preview | Code tabs). One primary "Usage" demo, then optional variants (sizes, states, etc.).
4. **Properties** – A `<PropsTable data={[...]} />` with `prop`, `type`, `default` (optional), `description`. Add a short note as `children` when relevant (e.g. polymorphic props, native attributes).

### Beta readiness checklist (per page)

- [ ] Copy-to-project path is clearly defined (e.g. "Create `src/components/ui/button.tsx` and paste the code below").
- [ ] Code blocks are clean and free of unnecessary comments.
- [ ] Tone is professional, concise, and developer-friendly.

## Registry (`registry.ts`)

- **docSections** – Top-level doc nav (Introduction, Installation, Components).
- **componentDocs** – One entry per component: `slug`, `name`, `description`, optional `category`.
- **componentHref(entry)** – Full URL for a component doc.

**Adding a component:** Add one object to `componentDocs`. Create the route file `src/routes/components/[slug].tsx` under the components layout. Sidebar and Components list update automatically.

**Grouping at scale:** Use `category` on entries (e.g. `"Forms"`, `"Overlay"`) and group the list by category when you have many components.

## Patterns

1. **Preview | Code** – Use `<ComponentDemo name="unique-name" preview={...} code="..." />`; tab state is internal. For other tab groups use `<Tabs value={tab} onChange={setTab} tabs={...} />` with parent-owned state.
2. **Page-level file actions** – Pass `sourceCode` and `sourceFilePath` to `DocPageLayout` to show **Copy source**, **Copy Markdown**, **Open in ChatGPT**, and **Open in Claude** for the entire file (not per code block). Optional `githubUrl` adds “View on GitHub”.
3. **DocPageLayout** – Wrap the page in `<DocPageLayout title="..." description="..." sourceCode={...} sourceFilePath="...">` for consistent hero, file actions, and width.

## File layout

- `src/lib/docs/` – Registry and shared doc data.
- `src/components/docs/` – Doc-only UI: `ComponentDemo`, `DocPageLayout`, `PropsTable`, `ComponentCode`.
- `src/components/ui/code-block.tsx` – Code block with optional AI actions.
- `src/routes/components/*.tsx` – Component doc routes (Button, Card, Input, etc.).
