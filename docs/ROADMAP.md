# davidmarsden.info roadmap

This roadmap records the planned second phase of the davidmarsden.info redesign. The guiding principle is to keep Micro.blog as the publishing/content layer while making the public site feel deliberately edited, personal and easy to explore.

Status legend: **Done** · **In progress** · **Next** · **Later**

## Phase 1 — Favourite Photos — Done

Completed 2026-08-29.

- Turn `/photos/` into a curated showcase rather than a generic photo archive.
- Keep selection/maintenance deliberately lightweight inside Micro.blog.
- Preserve original posts and image context rather than creating a second photo CMS.
- Use a site-specific presentation that fits the redesigned davidmarsden.info visual language.

This phase established the pattern for later curated sections: Micro.blog remains the source of content; the custom theme controls presentation.

## Phase 2 — Core navigation, About and Archive — Done

Completed 2026-08-30 on branch `phase-2-navigation-about-archive`.

Treat these together as an information-architecture pass rather than a collection of unrelated page tweaks.

### 2.1 Main navigation

Final target public navigation:

- About
- Writing
- Photos
- Library
- Archive
- Subscribe

The primary navigation is deliberately defined by the theme rather than exposing every Micro.blog page marked for navigation. Search and other useful utilities remain available without taking equal weight in the primary navigation.

### 2.2 About

`/about/` has been revamped as a proper authored introduction to David and the site, distinct from the short Micro.blog profile biography.

### 2.3 Archive

`/archive/` has been redesigned as the exhaustive historical record rather than a single long undifferentiated list, with year navigation, collapsible yearly sections and optional category browsing.

A Micro.blog/Hugo compatibility quirk required both `layouts/_default/list.archivehtml.html` and a root-level `layouts/list.archivehtml.html` override.

The Archive answers **“find something from the history of the blog”**, while Writing answers **“what should I read?”**

## Phase 3 — Writing hub — Done

Completed 2026-09-01 across branches `phase-3-writing-hub` and `phase-3b-random-selected-collections`.

`/writing/` is the reader-facing route into the written archive.

Implemented:

- **Selected Writing** — a manually curated recommendation pool;
- **Browse by subject** — a compact reader-facing set of categories;
- **Recent longform** — recent posts David has deliberately marked as proper writing;
- clear routes to the latest Blog posts and complete Archive;
- primary navigation now uses `Writing` while `/blog/` remains the chronological recent-posts page;
- Selected Writing displays a random six from the pool on each static site rebuild, allowing older pieces to resurface without manual rotation.

## Phase 4 — Category audit and curated taxonomy — Done

Completed manually in Micro.blog by 2026-09-01.

The historical category set has been reviewed and deliberately curated. Broad automatic subject filters and the old short/long post-length filters are no longer the basis of the taxonomy.

Current rules:

- **Longform** is a manual editorial judgement, not a length/title test;
- **Selected Writing** is a curated recommendation pool;
- subject categories are deliberately assigned rather than inferred from broad words;
- collection categories such as **Favourite Photos**, **Trees**, **The Story of My Life** and **Letters from America** are valid curated content sources in their own right;
- the custom Bayou homepage works with its built-in Micropost/Longform counts set to `0 / 0`, so technical length buckets are not required.

See `docs/CATEGORY-AUDIT.md` for the working model.

## Phase 4.5 — Collections integration — Done

Completed 2026-09-01 on branch `phase-3b-random-selected-collections`.

Curated Micro.blog categories can now act as reusable content sources for contextual card sections across the site.

Implemented:

- reusable `collection-cards.html` partial;
- shared collection-card styling;
- **The Story of My Life** appears as a four-card section on `/about/`;
- category membership and category intro text remain managed in Micro.blog;
- Hugo controls placement and presentation.

Future candidates such as **Letters from America** can use the same pattern where they add genuine context rather than clutter.

## Phase 5 — Library — Next

Keep `/library/` and the existing Micro.blog Bookshelves data/plugin as the content source.

Later, give it a site-specific presentation rather than replacing the underlying system. Possible sections include:

- Currently reading;
- Recently finished;
- Favourite/notable books;
- selected shelves such as Fiction, Non-fiction and Kids;
- route to the complete finished-reading collection.

## Phase 6 — Secondary utilities — Later

Review useful secondary destinations such as:

- Search;
- Blogroll;
- On This Day;
- other surviving utility/experimental pages.

Keep worthwhile rabbit holes without allowing them to crowd the primary navigation. A footer or small Explore area may be a better home for these.

## Phase 7 — Homepage integration — Later

Only after the destination pages are strong, add restrained homepage teasers such as:

- selected writing;
- favourite photographs;
- currently reading/recent books;
- occasional contextual curated collections where they genuinely improve discovery.

The homepage should remain a concise personal hub, not revert to being a directory or sidebar-heavy portal.

## Implementation principles

1. Keep GitHub as the documented source of truth for deliberate customisations.
2. Prefer small Hugo/theme overrides over additional plugins when the presentation needs to be site-specific.
3. Keep Micro.blog responsible for publishing and content management wherever possible.
4. Separate editorial curation from exhaustive archives.
5. Treat categories as potential subjects, editorial markers or curated collections — but give each a clear purpose.
6. Protect existing URLs and feeds.
7. Test meaningful theme changes against a genuinely isolated test theme before production where practical.
8. Update this roadmap and `CHANGELOG.md` as phases are completed or materially changed.
