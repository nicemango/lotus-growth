# Launch Round 1

Goal: validate whether people understand Lotus Growth, trust the human-in-the-loop boundary, and can run the GitHub tarball quick start.

This round intentionally skips npm. Use the GitHub tarball command until the first feedback cycle proves the positioning and install path.

## Primary Links

- GitHub: https://github.com/nicemango/lotus-growth
- Website: https://nicemango.github.io/lotus-growth/
- Promotion kit: ../PROMOTION.md
- Feedback log: ./launch-feedback.md

## Quick Start To Share

```bash
mkdir my-growth-agent
cd my-growth-agent
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main init
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main demo
```

## Round 1 Success Signals

- 5 thoughtful comments from builders or founders.
- 3 people can explain what Lotus Growth does after reading the README or website.
- 2 people run the tarball quick start or ask a concrete install question.
- 1 GitHub issue or feature request from someone outside the project.
- Repeated confusion is clear enough to turn into a README or CLI improvement.

## Channels

### Day 1: Warm Network

- Post the Chinese short announcement from `PROMOTION.md` to a warm audience.
- Send direct feedback requests to 5 people who build products, open-source tools, or founder-led growth workflows.
- Ask one narrow question: "Can you understand what this does in 30 seconds?"

### Day 2: X / Twitter

- Post the short English version first.
- If there is engagement, publish the thread.
- Reply with context, not more links.

### Day 3: Hacker News

- Submit the Show HN copy only if the README and website feedback from Day 1/2 is not confusing.
- Watch for objections around spam, agent hype, and install friction.

### Day 4: Indie Hackers or SideProject

- Share the workflow problem, not only the repository.
- Ask what part of founder-led growth is most painful.

### Day 5: Chinese Technical Post

- Publish the Juejin/V2EX style post from `PROMOTION.md`.
- Link to `docs/how-it-works.md` for people who want implementation context.

### Day 6: Consolidate

- Convert repeated confusion into README, website, or CLI changes.
- Do not add large features yet.

### Day 7: Decide Next Experiment

- Pick one improvement from feedback and ship it.
- Decide whether npm publishing is still necessary before Product Hunt.

## Direct Feedback Request

```text
我刚开源了一个增长 Agent starter kit。

它不是自动发帖工具，而是把增长动作变成一个 human-in-the-loop 的每日工作流：找对话、规划动作、生成草稿、人工审核、记录反馈。

你不用跑代码，帮我看 30 秒就行：
1. 你能不能看懂它解决什么问题？
2. 你会不会担心它像 spam 工具？
3. 如果你要用，第一步最希望它帮你做什么？

GitHub: https://github.com/nicemango/lotus-growth
官网: https://nicemango.github.io/lotus-growth/
```

## Do Not Do Yet

- Do not auto-post to communities.
- Do not DM strangers with links.
- Do not launch Product Hunt.
- Do not add heavy browser automation.
- Do not treat views as validation.
- Do not continue blocking launch on npm.

