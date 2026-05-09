#!/usr/bin/env node

import { runCli } from "../src/cli.mjs";

await runCli(process.argv.slice(2), {
  stdout: process.stdout,
  stderr: process.stderr,
  cwd: process.cwd()
});
