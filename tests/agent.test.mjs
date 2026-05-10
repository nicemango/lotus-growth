import assert from "node:assert/strict";
import test from "node:test";
import { buildStatus, createDraft, planNextActions } from "../src/agent.mjs";

const context = {
  project: {
    name: "Test Product",
    positioning: "Helps builders turn scattered growth work into a repeatable loop.",
    weeklyGoal: "Validate growth agent demand",
    callToAction: "What would you automate first?"
  },
  agent: {
    name: "lotus-growth-agent",
    maxDailyActions: 2,
    guardrails: ["Human approval before public posts."]
  },
  accounts: {
    accounts: [
      {
        id: "founder-x",
        platform: "x",
        status: "active",
        voice: "clear"
      },
      {
        id: "reddit-warmup",
        platform: "reddit",
        status: "paused",
        voice: "community-first"
      }
    ]
  }
};

test("buildStatus summarizes active growth setup", () => {
  assert.deepEqual(buildStatus(context), {
    project: "Test Product",
    positioning: "Helps builders turn scattered growth work into a repeatable loop.",
    agent: "lotus-growth-agent",
    activeAccounts: 1,
    weeklyGoal: "Validate growth agent demand",
    guardrails: ["Human approval before public posts."]
  });
});

test("planNextActions creates bounded tasks for active accounts", () => {
  const tasks = planNextActions({ ...context, now: "today" });

  assert.equal(tasks.length, 2);
  assert.equal(tasks[0].id, "founder-x:listen");
  assert.equal(tasks[1].type, "draft");
  assert.equal(tasks[0].due, "today");
});

test("createDraft turns project and account context into a usable draft", () => {
  const draft = createDraft({
    project: context.project,
    account: context.accounts.accounts[0],
    topic: "Use a tiny daily queue"
  });

  assert.equal(draft.platform, "x");
  assert.match(draft.body, /Use a tiny daily queue/);
  assert.match(draft.body, /What would you automate first/);
});

test("createDraft reports a clear error when no active account is available", () => {
  assert.throws(
    () => createDraft({ project: context.project, account: null }),
    /No active account/
  );
});
