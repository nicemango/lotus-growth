# Lotus Growth

Lotus Growth is an open-source starter kit for building a growth agent.

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

```bash
git clone https://github.com/your-name/lotus-growth.git
cd lotus-growth
npm install
npm run demo
```

Try individual commands:

```bash
npm run status
npm run plan
npm run draft -- "What changed after using a daily growth queue"
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
npm run demo
npm run status
npm run plan
npm run draft
npm test
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
