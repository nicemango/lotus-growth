import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { initializeProjectConfig } from "../src/init.mjs";

test("initializeProjectConfig creates editable config files", async () => {
  const cwd = await mkdtemp(join(tmpdir(), "lotus-growth-init-"));

  try {
    const result = await initializeProjectConfig(cwd);
    const project = JSON.parse(await readFile(join(cwd, "config/project.json"), "utf8"));
    const agent = JSON.parse(await readFile(join(cwd, "config/agent.json"), "utf8"));
    const accounts = JSON.parse(await readFile(join(cwd, "config/accounts.json"), "utf8"));

    assert.deepEqual(result.created.sort(), [
      "config/accounts.json",
      "config/agent.json",
      "config/project.json"
    ]);
    assert.equal(project.name, "Your Product");
    assert.equal(agent.name, "lotus-growth-agent");
    assert.equal(accounts.accounts.length, 2);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});

test("initializeProjectConfig does not overwrite existing user config", async () => {
  const cwd = await mkdtemp(join(tmpdir(), "lotus-growth-init-existing-"));

  try {
    await mkdir(join(cwd, "config"));
    await writeFile(join(cwd, "config/project.json"), JSON.stringify({ name: "Existing Product" }));

    const result = await initializeProjectConfig(cwd);
    const project = JSON.parse(await readFile(join(cwd, "config/project.json"), "utf8"));

    assert.equal(project.name, "Existing Product");
    assert.deepEqual(result.skipped, ["config/project.json"]);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});
