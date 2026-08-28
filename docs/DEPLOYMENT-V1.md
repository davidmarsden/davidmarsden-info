# Homepage v1 deployment

## Status

Homepage v1 has been tested and approved on `davidmarsden-test.micro.blog` in light and dark modes.

The repository is the source of record. Merging to `main` does not itself deploy anything to Micro.blog.

## Files to apply to the live Micro.blog custom theme

Copy the following files from `main` after PR #1 is merged:

- `layouts/index.html`
- `content/blog.md`
- `layouts/blog/single.html`
- `layouts/_default/baseof.html`
- `static/custom.css`

Do not replace unrelated live-theme files.

## Pre-deployment safety

- Keep the original Micro.blog theme + Markdown export and `.bar` backup outside GitHub.
- Keep the `pre-homepage-redesign-2026-08-27` branch as the frozen known-good baseline.
- Confirm the live site is still using Bayou 1.2.4 and Hugo 0.91 before applying the v1 files.

## Deployment order

1. Add `content/blog.md`.
2. Add `layouts/blog/single.html`.
3. Replace `layouts/index.html`.
4. Replace `layouts/_default/baseof.html`.
5. Replace `static/custom.css`.
6. Republish the live Micro.blog site.

Applying the files in this order keeps the supporting `/blog/` route in place before the homepage starts linking to it.

## Immediate smoke test

After republishing, verify:

- `/` renders the approved homepage v1.
- `/blog/` shows recent titled and untitled posts.
- `/archive/` works.
- `/about/` works.
- `/photos/` works.
- at least one existing individual post permalink works unchanged.
- `/feed.xml` loads successfully.
- `/feed.json` loads successfully.
- homepage project links open the intended external sites.
- light and dark colour schemes render as expected on mobile and desktop.

## Micro.blog / plug-in sanity checks

Spot-check features that depend on the existing Micro.blog environment rather than the homepage code, including replies/conversation, photo rendering and any commonly used shortcodes or embeds.

## Rollback

If the live build fails or there is unexpected behaviour:

1. Restore the pre-v1 versions of the modified live theme files from the baseline repository branch or original Micro.blog export.
2. Remove `content/blog.md` and `layouts/blog/single.html` if necessary.
3. Republish.
4. Record the failure and fix in GitHub before another live attempt.

No DNS, domain, ActivityPub/Fediverse identity, post permalink or feed configuration changes are part of homepage v1.
