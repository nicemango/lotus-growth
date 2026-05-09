# Open Source Checklist

Before publishing your fork:

- Remove real account handles and profile URLs.
- Remove cookies, tokens, browser profiles, and session files.
- Remove private campaign logs and private drafts.
- Keep runtime data under `runtime/` and make sure it is ignored by git.
- Replace product-specific positioning with examples.
- Run `npm test`.
- Review `README.md` for private names, links, and internal strategy.

Recommended public repository contents:

- source code
- tests
- example configuration
- docs
- static landing page
- license

Recommended private-only contents:

- real account configs
- LLM provider keys
- browser storage state
- platform cookies
- campaign history
- unpublished drafts
- growth strategy notes
