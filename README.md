# davidmarsden.info

Version-controlled customisations and implementation notes for [davidmarsden.info](https://davidmarsden.info/), a Micro.blog site using the Bayou theme.

## Purpose

This repository records the parts of the site that are deliberately customised, together with enough documentation to understand, reproduce, test, and safely change them.

It is **not** a full copy of the Micro.blog export, the Bayou theme, installed plug-ins, or the site's post archive.

## Current baseline

Captured: 2026-08-27

- Hosting/publishing: Micro.blog
- Base theme: Bayou 1.2.4 by Matt Langford
- Hugo: 0.91
- Primary domain: `davidmarsden.info`
- Micro.blog/Fediverse identity: retained on the existing domain

The baseline was taken from Micro.blog's **Export theme and Markdown** ZIP before work began on a new personal homepage/hub.

## What is version controlled here

Only local overrides and project documentation are maintained here. The upstream Bayou theme and plug-in-generated files remain dependencies rather than being copied into this repository.

Current local overrides:

- `static/custom.css`
- `layouts/_default/baseof.html`
- `layouts/partials/microhook-head.html`
- `layouts/partials/microhook-intro.html`
- `layouts/partials/sidebar.html`

See `docs/CURRENT-SETUP.md` for the baseline inventory and `docs/PLUGINS.md` for installed plug-ins.

## Planned work

The next phase is to make `davidmarsden.info` the front door to David's various sites and projects while preserving the existing Micro.blog domain, social identity, post URLs, feeds, and archive.

Development should happen on a branch and be tested on a Micro.blog test/preview blog before changes are applied to the live site.

See `docs/HOMEPAGE-PLAN.md`.

## Backups

The raw Micro.blog export ZIP and `.bar` archive should be kept separately as preservation backups. They are intentionally not committed here.
