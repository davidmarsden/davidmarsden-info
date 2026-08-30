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

While the Writing hub remains a Phase 3 task, the Phase 2 implementation uses `Blog` as the temporary first item:

- Blog
- About
- Photos
- Library
- Archive
- Subscribe

The primary navigation is now deliberately defined by the theme rather than exposing every Micro.blog page marked for navigation. Search and other useful utilities remain available without taking equal weight in the primary navigation.

### 2.2 About

`/about/` has been revamped as a proper authored introduction to David and the site, distinct from the short Micro.blog profile biography.

The hosted About page and the Micro.blog account/profile bio are now treated as separate surfaces:

- **Micro.blog profile bio:** short identity/description suitable for the social profile.
- **`/about/`:** richer site page with context, projects, links and a fuller introduction.

The About page now matches the visual language of the homepage and Photos, explains the different strands of the site, and links naturally to major projects and destinations without becoming a CV dump.

### 2.3 Archive

`/archive/` has been redesigned as the exhaustive historical record rather than a single long undifferentiated list.

Implemented:

- complete chronological access;
- jump-to-year navigation;
- collapsible yearly sections, with the current year open by default;
- an optional Browse by category disclosure with post counts;
- readable handling of both titled posts and untitled microposts;
- responsive/mobile-friendly layout;
- preserved direct links and existing post URLs.

A Micro.blog/Hugo compatibility quirk required both `layouts/_default/list.archivehtml.html` and a root-level `layouts/list.archivehtml.html` override, because the root-level archive template can take precedence in the merged theme environment.

The Archive answers **“find something from the history of the blog”**, while the later Writing page will answer **“what should I read?”**

## Phase 3 — Writing hub — In progress

Started 2026-08-30 on branch `phase-3-writing-hub`.

Create `/writing/` as the reader-facing route into the written archive rather than expecting visitors to understand the full Micro.blog taxonomy.

Initial structure:

- **Selected Writing** — a deliberately chosen small set of pieces;
- **Browse by subject** — only the categories useful to readers;
- **Recent longform** — automatically generated recent substantial posts;
- a clear route to the complete Archive.

Implementation approach:

- keep Micro.blog as the source of posts and categories;
- use a lightweight editorial marker/category such as `Selected Writing` rather than duplicate content;
- keep the category list curated on this page rather than exposing the entire taxonomy;
- once `/writing/` exists, replace the temporary `Blog` item in the main navigation with `Writing`;
- preserve `/blog/` as the chronological recent-posts page unless there is a strong reason to change it later.

## Phase 4 — Category audit — Later

Audit the existing category list before deleting or merging anything.

Classify categories broadly as:

- subjects/topics;
- formats/content types;
- workflow/internal classifications.

Create a smaller reader-facing taxonomy without requiring a destructive recategorisation of the whole historical archive. A category may remain useful internally even if it is not displayed prominently to visitors.

## Phase 5 — Library — Later

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
- currently reading/recent books.

The homepage should remain a concise personal hub, not revert to being a directory or sidebar-heavy portal.

## Implementation principles

1. Keep GitHub as the documented source of truth for deliberate customisations.
2. Prefer small Hugo/theme overrides over additional plugins when the presentation needs to be site-specific.
3. Keep Micro.blog responsible for publishing and content management wherever possible.
4. Separate editorial curation from exhaustive archives.
5. Do not delete legacy pages/categories merely to simplify navigation.
6. Protect existing URLs and feeds.
7. Test meaningful theme changes against a genuinely isolated test theme before production where practical.
8. Update this roadmap and `CHANGELOG.md` as phases are completed or materially changed.
