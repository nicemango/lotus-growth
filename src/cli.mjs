import { loadAccountsConfig, loadAgentConfig, loadProjectConfig } from "./config.mjs";
import { buildStatus, createDraft, planNextActions } from "./agent.mjs";

function writeJson(stdout, value) {
  stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

function writeHelp(stdout) {
  stdout.write(`Lotus Growth\n\n`);
  stdout.write(`Usage:\n`);
  stdout.write(`  lotus-growth status    Show project and agent status\n`);
  stdout.write(`  lotus-growth plan      Generate next growth tasks\n`);
  stdout.write(`  lotus-growth draft     Generate a sample post draft\n`);
  stdout.write(`  lotus-growth demo      Print status, plan, and draft\n`);
}

async function loadAll(cwd) {
  const [project, agent, accounts] = await Promise.all([
    loadProjectConfig(cwd),
    loadAgentConfig(cwd),
    loadAccountsConfig(cwd)
  ]);

  return { project, agent, accounts };
}

export async function runCli(args, io) {
  const command = args[0] || "help";

  if (command === "help" || command === "--help" || command === "-h") {
    writeHelp(io.stdout);
    return 0;
  }

  const context = await loadAll(io.cwd);
  const activeAccount = context.accounts.accounts.find((account) => account.status === "active");

  if (command === "status") {
    writeJson(io.stdout, buildStatus(context));
    return 0;
  }

  if (command === "plan") {
    writeJson(io.stdout, planNextActions(context));
    return 0;
  }

  if (command === "draft") {
    writeJson(io.stdout, createDraft({
      project: context.project,
      account: activeAccount,
      topic: args.slice(1).join(" ").trim()
    }));
    return 0;
  }

  if (command === "demo") {
    writeJson(io.stdout, {
      status: buildStatus(context),
      plan: planNextActions(context),
      draft: createDraft({ project: context.project, account: activeAccount })
    });
    return 0;
  }

  io.stderr.write(`Unknown command: ${command}\n`);
  writeHelp(io.stderr);
  return 1;
}
