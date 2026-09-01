# Category audit and reader-facing taxonomy

Audit completed and manually curated by David in Micro.blog by 2026-09-01.

The category system is now intentional rather than driven by broad keyword or post-length filters. Categories may overlap, but each should have a clear editorial purpose.

## Reader-facing writing subjects

The compact subject grid on `/writing/` currently surfaces:

- **Politics** — local democracy, government, development, accountability and wider politics.
- **Music** — listening, making music, Hovercraft and related writing.
- **Football** — football, Soccer Manager worlds and the surrounding culture.
- **Family** — personal and family-life writing.
- **Food** — food, cooking, eating out and the domestic/social stories around it.
- **Health** — health, care, wellbeing and related reflections.

These are entry points, not an exhaustive classification of everything on the site. The full category taxonomy remains available through the Archive.

## Editorial categories

- **Longform** — manually assigned to posts David considers proper/substantial writing. It is an editorial judgement, not a word-count or title test. It powers Recent longform on `/writing/`.
- **Selected Writing** — manually curated recommendation pool. `/writing/` displays a random six from this category on each static site rebuild.

`Microposts` is no longer required as an active editorial category. The custom Bayou homepage runs correctly with its built-in Micropost/Longform counts set to `0 / 0`, so the old length-based filters are unnecessary.

## Curated collections

Some categories are deliberately collections rather than broad subjects. They can be used as content sources for card sections elsewhere on the site.

Examples include:

- **Favourite Photos** — the photo showcase selection.
- **Trees** — intentionally curated tree photographs/posts; no automatic `tree` keyword filter.
- **The Story of My Life** — personal archive collection, surfaced on the About page.
- **Letters from America** — a themed collection of actual letters and postcards from America.

This collection pattern is intentionally reusable: Micro.blog owns membership and category intros; Hugo decides where and how selected collections are presented.

## Filters

Default rule: **automate deterministic metadata; curate meaning manually.**

Do not use broad ordinary-word filters such as `tree`, `home`, `kid`, `son` or `lad` to infer subjects. Do not use Micro.blog's short/long post-length filters to assign `Microposts` or `Longform`.

A narrow proper-noun/project filter may still be reasonable when it is effectively unambiguous, but the preferred default is no subject filter unless repeated manual use proves one is worthwhile.

## Principles going forward

1. Categories should exist because their editorial purpose is understood.
2. Subject, editorial-marker and collection categories may overlap on the same post.
3. `Longform` is manual and means proper writing, regardless of length or title.
4. `Selected Writing` is a curated pool, not a fixed six-post feature list.
5. Collections can power page-specific shelves/cards without becoming primary navigation.
6. Large post counts do not automatically make a category useful; editorial coherence matters more than volume.
7. Prefer an existing meaningful category over inventing a near-duplicate.
8. Keep Micro.blog as the content/category editor and the custom theme as the presentation layer.
