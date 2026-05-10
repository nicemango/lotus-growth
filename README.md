# Lotus Growth

[![CI](https://github.com/nicemango/lotus-growth/actions/workflows/ci.yml/badge.svg)](https://github.com/nicemango/lotus-growth/actions/workflows/ci.yml)

**English** | [中文](#中文)

Lotus Growth is an open-source starter kit for building a growth agent.

开源增长 Agent 启动套件，帮独立开发者和小团队把增长变成可持续执行的工作流。

![Lotus Growth landing page screenshot](./docs/assets/lotus-growth-screenshot.png)

It helps founders, indie hackers, and small teams turn growth from scattered ideas into a repeatable operating loop:

- listen for high-signal conversations
- plan channel-specific actions
- draft useful posts and replies
- require human approval before public actions
- keep enough memory for tomorrow's growth work to improve

This repository is intentionally clean. It ships with examples, not real accounts, private runtime state, cookies, browser profiles, or historical campaign logs.

## Why This Exists

Most growth work fails because it lives in chat history, spreadsheets, and random notes. A growth agent should not be a spam bot. It should be an operator that helps you decide what to do next, draft carefully, remember what happened, and keep a steady cadence.

Lotus Growth gives you a small foundation for that system.

## Quick Start

Run it without cloning the repository:

```bash
mkdir my-growth-agent
cd my-growth-agent
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main init
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main demo
```

Run individual commands the same way:

```bash
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main init
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main status
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main plan
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main draft "What changed after using a daily growth queue"
```

After the npm package is published, the shorter package name will work:

```bash
pnpm dlx lotus-growth init
pnpm dlx lotus-growth demo
pnpm add -g lotus-growth
lotus-growth plan
```

## What You Get

- A minimal Node.js CLI: `lotus-growth`
- An `init` command that creates editable local config
- Example project, agent, and account configuration
- A simple growth planning loop
- A sample draft generator
- Tests for the core planning behavior
- A static landing page in `website/`
- Docs for adapting the agent to your own growth workflow

## Project Site

The static project site lives in [`website/`](./website). It is deployed with GitHub Pages from the `main` branch.

## Example

See [`examples/solo-founder-saas`](./examples/solo-founder-saas) for a concrete setup for a solo founder growing a SaaS product on X and Reddit.

## Core Loop

```text
Project context
  -> Account and channel constraints
  -> Next growth tasks
  -> Draft or research artifact
  -> Human review
  -> Runtime note
  -> Better next plan
```

## Commands

```bash
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main init
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main demo
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main status
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main plan
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main draft "Your topic"
```

For local development after cloning:

```bash
pnpm install
pnpm demo
pnpm test
```

## Configuration

Start with the files in `config/`:

- `project.example.json`: product positioning and current growth goal
- `agent.example.json`: action limits and guardrails
- `accounts.example.json`: channel/account metadata without credentials

Copy them to your own runtime config when you build a private deployment. Do not commit real cookies, access tokens, private messages, or platform session data.

## Safety Principles

Lotus Growth is designed around human-in-the-loop growth:

- No public posting without review
- No hidden scraping or platform bypassing
- No link-first spam
- No fake personas
- No committing private runtime state

## Landing Page

Open `website/index.html` in a browser to view the project landing page.

## Roadmap

- Runtime memory file with safe local defaults
- Approval queue for public drafts
- Platform adapters for X, Reddit, LinkedIn, and newsletters
- Browser-assisted research mode
- LLM provider adapters
- Example deployment guide

## Contributing

Contributions are welcome. Start with [`CONTRIBUTING.md`](./CONTRIBUTING.md), and prefer small changes that improve first-run success, documentation clarity, or safe growth workflows.

## Releases

See [`docs/release.md`](./docs/release.md) for the npm release checklist.

## License

MIT

---

## 中文

**Lotus Growth 是一个开源的增长 Agent Starter Kit。**

它适合独立开发者、创业者和小团队，把增长工作从零散想法变成一个可以每天推进的操作闭环：

- 发现高信号对话和机会
- 规划不同渠道的增长动作
- 生成有用的帖子、回复和草稿
- 在公开发布前保留人工审核
- 记录结果，让第二天的计划更好

这个仓库刻意保持干净：只包含示例配置和开源代码，不包含真实账号、私有运行状态、cookie、浏览器 profile 或历史增长记录。

## 为什么做这个项目

很多增长工作失败，不是因为没有想法，而是因为它散落在聊天记录、表格和临时笔记里。

一个好的增长 Agent 不应该是自动 spam 机器人，而应该是一个增长操作员：帮助你判断下一步做什么，谨慎地产出草稿，记住发生了什么，并保持稳定节奏。

Lotus Growth 提供的是这套系统的最小开源基础。

## 快速开始

不需要下载代码，可以直接用 `pnpm` 运行：

```bash
mkdir my-growth-agent
cd my-growth-agent
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main init
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main demo
```

也可以单独运行命令：

```bash
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main init
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main status
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main plan
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main draft "用每日增长队列后发生了什么变化"
```

等 npm 包发布后，可以使用更短的命令：

```bash
pnpm dlx lotus-growth init
pnpm dlx lotus-growth demo
pnpm add -g lotus-growth
lotus-growth plan
```

## 你会得到什么

- 一个最小 Node.js CLI：`lotus-growth`
- `init` 命令，用来生成可编辑的本地配置
- 项目、Agent、账号配置示例
- 一个简单的增长计划循环
- 一个帖子/回复草稿生成器
- 核心规划逻辑测试
- `website/` 里的静态介绍页
- 用于改造成自己增长工作流的文档

## 项目介绍页

静态介绍页位于 [`website/`](./website)，通过 GitHub Pages 从 `main` 分支部署。

## 示例

可以参考 [`examples/solo-founder-saas`](./examples/solo-founder-saas)，里面给了一个独立开发者用 X 和 Reddit 推进 SaaS 增长的具体配置。

## 核心闭环

```text
项目上下文
  -> 账号和渠道约束
  -> 下一批增长任务
  -> 草稿或研究产物
  -> 人工审核
  -> 运行记录
  -> 更好的下一轮计划
```

## 配置说明

从 `config/` 里的示例文件开始：

- `project.example.json`：产品定位和当前增长目标
- `agent.example.json`：动作上限和安全规则
- `accounts.example.json`：渠道和账号元数据，不包含凭据

如果你做私有部署，可以复制成自己的运行配置。不要提交真实 cookie、access token、私信、平台 session 或浏览器状态。

## 安全原则

Lotus Growth 默认是 human-in-the-loop 的增长工具：

- 不自动发布公开内容
- 不绕过平台规则
- 不做链接优先的 spam
- 不伪造人设
- 不把私有运行状态提交进 git

## 路线图

- 安全的本地运行记忆文件
- 公开草稿审批队列
- X、Reddit、LinkedIn、newsletter 等平台适配器
- 浏览器辅助研究模式
- LLM provider adapter
- 示例部署指南

## 参与贡献

欢迎贡献。先看 [`CONTRIBUTING.md`](./CONTRIBUTING.md)。当前最欢迎的是能提升首次运行成功率、文档清晰度和安全增长工作流的小改动。

## 发布

npm 发布流程见 [`docs/release.md`](./docs/release.md)。

## License

MIT
