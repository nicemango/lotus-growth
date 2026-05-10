import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { loadAgentConfig, loadProjectConfig } from "../src/config.mjs";

test("loadProjectConfig falls back to package example config outside the repo", async () => {
  const cwd = await mkdtemp(join(tmpdir(), "lotus-growth-empty-"));

  try {
    const config = await loadProjectConfig(cwd);

    assert.equal(config.name, "Your Product");
    assert.match(config.weeklyGoal, /painful workflow/);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});

test("loadAgentConfig prefers user config when present", async () => {
  const cwd = await mkdtemp(join(tmpdir(), "lotus-growth-custom-"));

  try {
    await mkdir(join(cwd, "config"));
    await writeFile(join(cwd, "config/agent.json"), JSON.stringify({
      name: "custom-agent",
      maxDailyActions: 1,
      guardrails: ["Review every post."]
    }));

    const config = await loadAgentConfig(cwd);

    assert.equal(config.name, "custom-agent");
    assert.equal(config.maxDailyActions, 1);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});
