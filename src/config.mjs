import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function loadFirstJson(paths) {
  const errors = [];

  for (const path of paths) {
    try {
      return await loadJson(path);
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }

      errors.push(path);
    }
  }

  throw new Error(`No config file found. Checked: ${errors.join(", ")}`);
}

export async function loadJson(path) {
  const raw = await readFile(path, "utf8");
  return JSON.parse(raw);
}

export async function loadProjectConfig(cwd) {
  return loadFirstJson([
    resolve(cwd, "config/project.json"),
    resolve(cwd, "config/project.example.json"),
    resolve(packageRoot, "config/project.example.json")
  ]);
}

export async function loadAgentConfig(cwd) {
  return loadFirstJson([
    resolve(cwd, "config/agent.json"),
    resolve(cwd, "config/agent.example.json"),
    resolve(packageRoot, "config/agent.example.json")
  ]);
}

export async function loadAccountsConfig(cwd) {
  return loadFirstJson([
    resolve(cwd, "config/accounts.json"),
    resolve(cwd, "config/accounts.example.json"),
    resolve(packageRoot, "config/accounts.example.json")
  ]);
}
