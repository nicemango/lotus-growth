import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export async function loadJson(path) {
  const raw = await readFile(path, "utf8");
  return JSON.parse(raw);
}

export async function loadProjectConfig(cwd) {
  return loadJson(resolve(cwd, "config/project.example.json"));
}

export async function loadAgentConfig(cwd) {
  return loadJson(resolve(cwd, "config/agent.example.json"));
}

export async function loadAccountsConfig(cwd) {
  return loadJson(resolve(cwd, "config/accounts.example.json"));
}
