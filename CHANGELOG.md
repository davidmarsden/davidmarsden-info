# Changelog

Significant changes to the site customisation layer are recorded here.

## 2026-08-28

### Homepage hub v1 approved for live deployment

- Replaced the chronological homepage on the test site with a personal hub at `/`.
- Added `/blog/` as a separate recent-posts page using a custom `blog` content type.
- Kept `/archive/` as the full historical archive.
- Added the approved homepage sections for writing/local democracy, football worlds, music, things I build and About.
- Added Blog to the main navigation and retained Archive and Photos.
- Preserved the existing Manchester United colour palette with responsive light/dark styling.
- Tested titled and untitled posts successfully on `davidmarsden-test.micro.blog`.
- Removed pagination from the custom `/blog/` page after Micro.blog returned a nil paginator; `/blog/` now shows the latest 20 posts and links to the archive.
- Added `docs/DEPLOYMENT-V1.md` with the live deployment order, smoke tests and rollback procedure.
- No DNS, domain, ActivityPub/Fediverse identity, permalink or feed configuration changes are part of v1.

## 2026-08-27

### Baseline captured

- Recorded the existing `davidmarsden.info` custom theme layer before homepage redesign work.
- Confirmed Bayou 1.2.4 as the base theme and Hugo 0.91 as the current Hugo version.
- Preserved the five local overrides currently differing from or extending the upstream theme.
- Added a documented plug-in inventory and a redacted site configuration reference.
- No live-site behaviour changed as part of this baseline capture.
