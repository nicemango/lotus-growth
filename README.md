# Lotus Growth

Lotus Growth is an open-source starter kit for building a growth agent.

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
pnpm dlx github:nicemango/lotus-growth demo
```

Run individual commands the same way:

```bash
pnpm dlx github:nicemango/lotus-growth status
pnpm dlx github:nicemango/lotus-growth plan
pnpm dlx github:nicemango/lotus-growth draft "What changed after using a daily growth queue"
```

After the npm package is published, the shorter package name will work:

```bash
pnpm dlx lotus-growth demo
pnpm add -g lotus-growth
lotus-growth plan
```

## What You Get

- A minimal Node.js CLI: `lotus-growth`
- Example project, agent, and account configuration
- A simple growth planning loop
- A sample draft generator
- Tests for the core planning behavior
- A static landing page in `website/`
- Docs for adapting the agent to your own growth workflow

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
pnpm dlx github:nicemango/lotus-growth demo
pnpm dlx github:nicemango/lotus-growth status
pnpm dlx github:nicemango/lotus-growth plan
pnpm dlx github:nicemango/lotus-growth draft "Your topic"
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

## License

MIT
