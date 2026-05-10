# Contributing to Lotus Growth

Thanks for considering a contribution.

Lotus Growth is intentionally small. The project should stay useful for founders and small teams before it becomes a large automation platform.

## What We Want

- Clearer first-run experience
- Better examples for real growth workflows
- Safer human-in-the-loop review patterns
- Small CLI improvements
- Tests for planning, config loading, and initialization behavior
- Documentation that helps users adapt the starter kit without committing private data

## What We Avoid For Now

- Auto-posting without human review
- Browser automation that bypasses platform rules
- Heavy dashboards before the CLI loop is useful
- Databases, daemons, queues, or hosted services before they are necessary
- Committing real account handles, cookies, tokens, session data, or private campaign logs

## Local Development

```bash
pnpm install
pnpm test
npm pack --dry-run
```

Try the CLI locally:

```bash
pnpm demo
pnpm plan
pnpm draft "Your topic"
```

## Pull Request Checklist

- Keep the change small and focused.
- Add or update tests when behavior changes.
- Update README or docs when user-facing behavior changes.
- Run `pnpm test`.
- Run `npm pack --dry-run` for packaging-related changes.

## 中文说明

Lotus Growth 当前阶段优先保持轻量。最欢迎的贡献是：让首次运行更顺、示例更真实、文档更清晰、安全边界更明确。

暂时不优先做自动发帖、复杂 dashboard、数据库、daemon、平台化 adapter 或绕过平台规则的浏览器自动化。
