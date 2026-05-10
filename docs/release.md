# Release Guide

This guide keeps the release path small and repeatable.

## 1. Verify

```bash
pnpm run release:check
```

This runs:

- `pnpm test`
- `npm pack --dry-run`

## 2. Confirm npm Login

```bash
npm whoami
```

If this prints nothing or fails, log in first:

```bash
npm login
```

## 3. Confirm Package Name

```bash
npm view lotus-growth name version --json
```

If the package has not been published yet, npm returns 404. That is expected before the first release.

## 4. Publish

```bash
npm publish --access public
```

After publishing, verify:

```bash
pnpm dlx lotus-growth init
pnpm dlx lotus-growth demo
```

## 5. Update README

After the npm package is live, make the short command the primary quick start:

```bash
pnpm dlx lotus-growth init
pnpm dlx lotus-growth demo
```

Keep the GitHub tarball command only as a fallback.
