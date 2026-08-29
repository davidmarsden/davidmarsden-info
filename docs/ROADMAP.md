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

## Phase 2 — Core navigation, About and Archive — In progress

Started 2026-08-29 on branch `phase-2-navigation-about-archive`.

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

The primary navigation is now deliberately defined by the theme rather than exposing every Micro.blog page marked for navigation. Search and other useful utilities should remain available but do not need equal weight in the primary navigation.

Existing secondary, legacy, experimental and infrastructure pages may continue to exist at their current URLs without appearing in the main navigation.

### 2.2 About

Revamp `/about/` as a proper authored introduction to David and the site rather than relying on the short Micro.blog profile biography.

The hosted About page and the Micro.blog account/profile bio should be treated as separate surfaces:

- **Micro.blog profile bio:** short plain-text identity/description suitable for the social profile.
- **`/about/`:** richer site page with Markdown/HTML, room for context, projects, links and a fuller introduction.

Design goals:

- match the new homepage and Photos presentation;
- explain the different strands of the site without turning it into a CV dump;
- provide useful routes to major projects/sites where appropriate;
- keep the page personal and concise enough to be read rather than merely scanned;
- avoid automatically injecting unrelated plugin output such as the old recommendations/sidebar material.

### 2.3 Archive

Keep `/archive/` because it is the exhaustive historical record, but redesign it so that thousands of posts are easier to navigate.

Likely goals:

- retain complete chronological access;
- improve hierarchy and readability;
- provide useful year/date navigation;
- decide how much category filtering belongs here versus the future Writing page;
- avoid presenting every category as if it has equal editorial importance;
- preserve direct links and existing post URLs;
- make mobile browsing practical.

The Archive should answer **“find something from the history of the blog”**, while the later Writing page should answer **“what should I read?”**

## Phase 3 — Writing hub — Later

Create `/writing/` as the reader-facing route into the written archive rather than expecting visitors to understand the full Micro.blog taxonomy.

Potential structure:

- Selected Writing — a deliberately chosen small set of pieces;
- Browse by subject — only the categories useful to readers;
- Recent longform — automatically generated recent substantial posts.

Use a lightweight editorial marker/category such as `Selected Writing` or `Featured` rather than maintaining duplicate content.

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
