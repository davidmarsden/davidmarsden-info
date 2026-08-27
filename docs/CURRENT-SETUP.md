# Current setup

Baseline captured from Micro.blog on 2026-08-27 before work began on the new personal homepage/hub.

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
- `layouts/partials/sidebar.html`

## Upstream Bayou files not copied here

The Micro.blog export also contains the active Bayou theme. Core files such as these matched upstream Bayou and are deliberately not maintained here until we intentionally override them:

- `layouts/index.html`
- `layouts/_default/list.html`
- `layouts/_default/single.html`
- `layouts/post/single.html`
- `layouts/section/replies.html`
- `static/css/main.css`
- `static/css/all.min.css`
- `static/webfonts/*`
- `i18n/*`
- `theme.toml`
- `config_example.json`

`layouts/_default/baseof.html` is the exception: the live export differs from upstream and is therefore preserved here.

## Generated/plugin-owned files

The export merges files supplied by installed Micro.blog plug-ins into the Hugo tree. Those are recorded as dependencies in `PLUGINS.md`, not copied here as maintained source.

If a plug-in template is deliberately customised in future, that override should then be added to this repository and documented.

## Content and data

The raw export also includes posts and generated data such as bookshelves, collections and blogrolls. Those are preservation/research material rather than theme source and are intentionally excluded from this repository.

The untouched Micro.blog export ZIP and `.bar` archive should be retained separately.

## Safe development rule

Do not edit the live theme first. New work should:

1. start from this baseline;
2. happen on a dedicated branch;
3. be tested on a Micro.blog test/preview blog;
4. be checked for homepage, blog index, post URLs, feeds, navigation and mobile rendering;
5. only then be applied to the live site.
