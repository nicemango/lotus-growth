# Solo Founder SaaS Example

This example shows how a solo founder might configure Lotus Growth for a small SaaS product.

## Scenario

- Product: a lightweight SaaS tool for turning customer calls into product notes
- Channels: X and Reddit
- Goal: learn which workflow pains show up repeatedly before publishing product-heavy posts
- Safety: draft first, review before public posting

## Try It

From the project root:

```bash
node ./bin/lotus-growth.mjs plan
```

To use these files as your local config, copy them into a working directory:

```bash
mkdir my-saas-growth
mkdir -p my-saas-growth/config
cp examples/solo-founder-saas/*.json my-saas-growth/config/
cd my-saas-growth
pnpm dlx https://codeload.github.com/nicemango/lotus-growth/tar.gz/main plan
```

## Why This Example Matters

The point is not to automate posting. The point is to keep the founder focused on listening, drafting, reviewing, and learning from responses.
