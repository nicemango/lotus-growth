#!/usr/bin/env node
import { spawn } from 'node:child_process';
import readline from 'node:readline';

function askHidden(question) {
  return new Promise((resolve) => {
    const input = process.stdin;
    const output = process.stdout;
    const rl = readline.createInterface({ input, output, terminal: true });

    const originalWrite = output.write.bind(output);
    output.write = (chunk, encoding, callback) => {
      const text = String(chunk);
      if (text.includes(question)) {
        return originalWrite(chunk, encoding, callback);
      }
      if (typeof callback === 'function') callback();
      return true;
    };

    rl.question(question, (answer) => {
      output.write = originalWrite;
      rl.close();
      output.write('\n');
      resolve(answer.trim());
    });
  });
}

const otp = process.env.NPM_CONFIG_OTP || await askHidden('npm publish OTP: ');

if (!/^\d{6}$/.test(otp)) {
  console.error('Expected a 6-digit npm OTP.');
  process.exit(1);
}

const publish = spawn(
  'npm',
  ['publish', '--access', 'public', '--registry=https://registry.npmjs.org/'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      NPM_CONFIG_OTP: otp,
    },
  },
);

publish.on('exit', (code, signal) => {
  if (signal) {
    console.error(`npm publish terminated by ${signal}`);
    process.exit(1);
  }
  process.exit(code ?? 1);
});
