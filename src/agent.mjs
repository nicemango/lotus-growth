const DEFAULT_NOW = "now";

export function buildStatus({ project, agent, accounts }) {
  const activeAccounts = accounts.accounts.filter((account) => account.status === "active");

  return {
    project: project.name,
    positioning: project.positioning,
    agent: agent.name,
    activeAccounts: activeAccounts.length,
    weeklyGoal: project.weeklyGoal,
    guardrails: agent.guardrails
  };
}

export function planNextActions({ project, agent, accounts, now = DEFAULT_NOW }) {
  return accounts.accounts
    .filter((account) => account.status === "active")
    .flatMap((account) => [
      {
        id: `${account.id}:listen`,
        platform: account.platform,
        accountId: account.id,
        type: "research",
        title: `Find 3 high-signal conversations on ${account.platform}`,
        reason: `Support "${project.weeklyGoal}" without posting too early.`,
        due: now
      },
      {
        id: `${account.id}:draft`,
        platform: account.platform,
        accountId: account.id,
        type: "draft",
        title: `Draft one useful ${account.platform} contribution`,
        reason: `Match the ${account.voice} voice and keep within public-action guardrails.`,
        due: now
      }
    ])
    .slice(0, agent.maxDailyActions);
}

export function createDraft({ project, account, topic }) {
  const angle = topic || project.weeklyGoal;
  const cta = project.callToAction || "Ask a specific question and invite replies.";

  return {
    platform: account.platform,
    accountId: account.id,
    title: `${project.name}: ${angle}`,
    body: [
      `Observation: ${angle}`,
      "",
      `Useful note: teams usually get better results when growth work is captured as repeatable tasks instead of scattered ideas.`,
      "",
      `Practical move: write down the trigger, the channel, the draft, the approval rule, and the follow-up check before publishing.`,
      "",
      cta
    ].join("\n")
  };
}
