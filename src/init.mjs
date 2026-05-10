import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const CONFIG_FILES = [
  ["config/project.example.json", "config/project.json"],
  ["config/agent.example.json", "config/agent.json"],
  ["config/accounts.example.json", "config/accounts.json"]
];

export async function initializeProjectConfig(cwd) {
  const created = [];
  const skipped = [];

  await mkdir(resolve(cwd, "config"), { recursive: true });

  for (const [source, target] of CONFIG_FILES) {
    const sourcePath = resolve(packageRoot, source);
    const targetPath = resolve(cwd, target);

    try {
      await copyFile(sourcePath, targetPath, 0x1);
      created.push(target);
    } catch (error) {
      if (error.code !== "EEXIST") {
        throw error;
      }

      skipped.push(target);
    }
  }

  return { created, skipped };
}
