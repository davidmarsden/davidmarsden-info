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

## Phase 3 — Writing hub — Next

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

Build the Library around Micro.blog's new local book-detail-page support announced on 2026-08-31, rather than sending book-cover links away from davidmarsden.info.

When this phase begins:

1. Enable **Bookshelves → Settings → “Link books to detail pages on your blog”** in Micro.blog.
2. Allow Micro.blog to install/use the Book reading goals plug-in if needed to provide the initial Hugo book-page template.
3. Run a full rebuild (and, where necessary, re-save older book posts) so existing reading history produces local detail pages consistently.
4. Inspect the generated Hugo book metadata/data before designing custom templates around it.
5. Override the default book-detail presentation in the custom Bayou theme so individual book pages feel native to davidmarsden.info.

The target structure is:

- `/library/` — the visual overview and browsing layer;
- `/books/<isbn>/` — individual book detail pages on davidmarsden.info;
- book-related posts — link naturally into those local detail pages where possible.

The `/library/` overview may include:

- Currently reading;
- Recently finished;
- Favourite/notable books;
- selected shelves such as Fiction, Non-fiction and Kids;
- route to the complete finished-reading collection.

Individual book pages should aim to include, where the underlying Micro.blog data makes it practical:

- a prominent cover;
- title and author;
- reading status/dates;
- useful bibliographic metadata such as page count or genre;
- links to relevant external book services where useful;
- David's own posts, notes or reviews about that book.

The goal is not to recreate Goodreads or maintain a second book database. Micro.blog remains the source of reading data; the custom theme turns that data into a personal reading history on davidmarsden.info.

Reference: Manton Reece, “Book detail pages”, 2026-08-31: https://www.manton.org/2026/08/31/book-detail-pages.html

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
