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
npm login --registry=https://registry.npmjs.org/
```

If `npm login` opens `registry.npmmirror.com`, your local npm registry is pointing to a mirror. Reset it before logging in:

```bash
npm config set registry https://registry.npmjs.org/ --location=user
npm config delete home --location=user
```

## 3. Confirm Package Name

```bash
npm view lotus-growth name version --json
```

If the package has not been published yet, npm returns 404. That is expected before the first release.

## 4. Publish

```bash
pnpm run release:publish
```

If your npm account requires two-factor authentication for publishing, avoid pasting the OTP into chat or shell history. Run:

```bash
read -s NPM_CONFIG_OTP
pnpm run release:publish
unset NPM_CONFIG_OTP
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
