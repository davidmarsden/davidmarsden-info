# Micro.blog GitHub sync

The maintained Hugo overrides in this repository can be loaded into Micro.blog directly from GitHub instead of copying individual templates by hand.

## Why this is a plug-in, not a full theme

The live site still depends on the Bayou theme. This repository contains only David's site-specific overrides and assets; it is not a complete standalone Hugo theme.

For that reason this repository deliberately includes `plugin.json` but **does not** include `theme.toml`.

Micro.blog treats a plug-in with `theme.toml` as a full theme and may disable the currently installed full theme. Adding one here would therefore risk replacing Bayou with an incomplete set of templates.

As a normal GitHub-backed plug-in, these templates are layered on top of Bayou instead.

## One-time installation

In Micro.blog:

1. Open **Design → Edit Custom Themes**.
2. Choose **New Plug-in**.
3. Give it a name such as **davidmarsden.info site overrides**.
4. Use this repository as the clone URL:
   `https://github.com/davidmarsden/davidmarsden-info`
5. Make sure the selected site is `davidmarsden.info`.
6. Add the plug-in.
7. Keep Bayou installed as the site's full theme.
8. Republish the site and smoke-test the homepage, individual posts, Library, Reviews, Writing, Archive, Photos, feeds and light/dark presentation.

The existing manually maintained custom-theme copies should then be removed or reduced so that the same template is not being overridden in two places. The GitHub-backed plug-in should become the canonical source for files under `layouts/`, `static/` and `data/`.

## Updating from GitHub

After a PR is merged to `main`:

1. Open the GitHub-backed plug-in in **Design → Edit Custom Themes**.
2. Use Micro.blog's reload/refresh-from-GitHub control.
3. Republish the site.
4. Run the relevant smoke tests.

Micro.blog's reload updates existing files and adds new files from GitHub. It may not remove a file that was deleted from the repository, so deletions should be checked explicitly in Micro.blog.

## What is synced

The plug-in is intended to own site customisation such as:

- `layouts/`
- `static/`
- `data/`
- any plug-in configuration explicitly added to this repository

Repository documentation such as `docs/`, `CHANGELOG.md` and development notes is not part of the live-site contract.

## What remains Micro.blog content

Posts and standalone Pages remain content managed by Micro.blog rather than theme source.

Standalone Pages should be created and owned in Micro.blog rather than supplied from this plug-in's `content/` directory. The GitHub plug-in should own templates, static assets and data, while Micro.blog owns the page records and their permalinks.

For example, the custom Reviews presentation expects a Micro.blog Page at `/reviews/`; the plug-in supplies the template logic, not the Page itself.

## Safe workflow

The preferred workflow is now:

`branch → PR → review → merge → reload GitHub plug-in in Micro.blog → rebuild → smoke test`

This replaces the old workflow of manually copying each changed template into Micro.blog.

If a change breaks production, reload a known-good Git commit or temporarily remove the GitHub-backed plug-in and restore the previous custom-theme overrides.
