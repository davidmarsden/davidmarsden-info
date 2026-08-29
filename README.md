# davidmarsden.info

Version-controlled customisation layer for David Marsden's personal Micro.blog site at [davidmarsden.info](https://davidmarsden.info/).

## Purpose

The repository records the site's deliberate Hugo/Micro.blog overrides, project documentation, and implementation history. It does **not** mirror every exported post or every upstream Bayou/plugin file.

## Base setup

- Host: Micro.blog
- Base theme: Bayou 1.2.4 by Matt Langford
- Hugo: 0.91
- Primary social/blog domain: `davidmarsden.info`

See `docs/CURRENT-SETUP.md` and `docs/PLUGINS.md` for the preserved baseline.

## Roadmap

See `docs/ROADMAP.md` for the current site-development plan. Phase 1 (Favourite Photos) is complete; Phase 2 covers core navigation plus the About and Archive revamps.

## Current site state

The homepage redesign is complete, merged to `main`, and live. The repository now includes:

- a custom personal hub at `/`;
- a custom content type for `/blog/`;
- a latest-posts blog page linking through to the full archive;
- a curated Favourite Photos showcase at `/photos/`;
- homepage and site-specific styling in `static/custom.css`.

`main` should be treated as the current source of truth for the live customisation layer.

The earlier redesign work was tested on `davidmarsden-test.micro.blog`, but production and test were later found to share the same custom Bayou theme. The test site must therefore not be treated as an isolated staging environment until it has its own cloned custom theme.

## Safety / rollback

The branch `pre-homepage-redesign-2026-08-27` preserves the known-good pre-redesign state.

Raw Micro.blog exports are intentionally kept outside this repository.
