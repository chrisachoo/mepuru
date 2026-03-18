# Contributing to Mēpuru UI

Thanks for wanting to improve Mēpuru UI.

## How to contribute

1. Open an issue for bugs, feature requests, or questions.
2. Fork the repo and create a branch for your change.
3. Submit a PR with a clear description of what you changed and why.

## Development setup

Prerequisites:

- Node is not required, but Bun is.

Commands:

```bash
bun install
bun run dev
```

## Docs standard (important)

Component docs pages follow a specific structure so they stay consistent and copy-paste-ready.

Before submitting a PR that changes docs, review:

- `src/lib/docs/README.md`

## Linting and formatting

Please run the following before opening a PR:

```bash
bun run lint
```

If you need auto-fixes:

```bash
bun run lint:fix
```

To reformat:

```bash
bun run prettier
```

## Testing

This repo currently has no dedicated test runner script. At minimum, please ensure:

- `bun run lint` passes
- `bun run build` completes successfully

## PR checklist

Before you submit:

- The change matches the goal of “simple, accessible, predictable” components
- Docs (if affected) still follow the doc page standard
- No unrelated formatting churn
