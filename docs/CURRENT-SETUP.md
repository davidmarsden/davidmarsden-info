# Current setup

Baseline captured from Micro.blog on 2026-08-27 before work began on the new personal homepage/hub, with later operational notes added as they were discovered.

## Platform

- Site: `https://davidmarsden.info/`
- Hosting/publishing: Micro.blog
- Base theme: Bayou 1.2.4
- Upstream theme: `MattSLangford/Bayou-Theme`
- Hugo: 0.91
- Pagination: 10
- RSS limit: 25
- Default language: English

## Local overrides kept in this repository

These files are part of the current site-specific custom layer and should be treated as source:

- `static/custom.css`
- `layouts/_default/baseof.html`
- `layouts/partials/microhook-head.html`
- `layouts/partials/microhook-intro.html`
- `layouts/index.html`
- `layouts/blog/single.html`
- `content/blog.md`

The former local `layouts/partials/sidebar.html` override was removed during the homepage redesign. The separate **Sidebar for Bayou** plug-in was also removed on 2026-08-29 after confirming it was independently injecting the remaining blogroll/recommendations sidebar.

## Upstream Bayou files not copied here

The Micro.blog export also contains the active Bayou theme. Core files that match upstream Bayou are deliberately not maintained here until we intentionally override them.

`layouts/_default/baseof.html` is an exception: the live export differed from upstream and is therefore preserved here.

## Generated/plugin-owned files

The export merges files supplied by installed Micro.blog plug-ins into the Hugo tree. Those are recorded as dependencies in `PLUGINS.md`, not copied here as maintained source.

If a plug-in template is deliberately customised in future, that override should then be added to this repository and documented.

## Content and data

The raw export also includes posts and generated data such as bookshelves, collections and blogrolls. Those are preservation/research material rather than theme source and are intentionally excluded from this repository.

The untouched Micro.blog export ZIP and `.bar` archive should be retained separately.

## Test-site caveat discovered 2026-08-29

`davidmarsden.info` and `davidmarsden-test.micro.blog` were found to be using the same custom Bayou theme. Editing that shared custom theme therefore changed both sites at once.

The test blog must **not** be treated as an isolated staging environment while it shares the production custom theme. Before using it for risky theme experiments, give it a separate cloned custom theme.

## Safe development rule

1. Keep this GitHub repository as the documented source of truth.
2. Make meaningful changes on a dedicated branch/PR where practical.
3. Test theme changes only against a genuinely separate test custom theme.
4. Check homepage, `/blog/`, archive, posts, feeds, navigation, mobile rendering and light/dark appearance as relevant.
5. Apply approved changes to the production custom theme deliberately and record material changes here or in `CHANGELOG.md`.
