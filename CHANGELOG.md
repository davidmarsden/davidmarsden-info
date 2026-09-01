# Changelog

Significant changes to the site customisation layer are recorded here.

## 2026-09-01

### Writing hub, curated taxonomy and collection cards complete

- Added `/writing/` as the reader-facing route into the written archive.
- Added Selected Writing cards, Browse by subject, Recent longform, and routes to the chronological Blog and full Archive.
- Changed the primary navigation from Blog to Writing while keeping `/blog/` as the recent-posts page.
- Made Selected Writing rotate six posts at random from the curated pool on each static site rebuild.
- Completed a manual category audit in Micro.blog and documented the resulting subject/editorial/collection model in `docs/CATEGORY-AUDIT.md`.
- Made Longform a manual editorial category rather than a post-length/title classification.
- Confirmed the custom Bayou homepage works with its built-in Micropost and Longform display counts set to `0 / 0`, removing the need for technical length buckets.
- Added reusable `collection-cards.html` and shared collection styling so curated Micro.blog categories can power contextual card sections around the site.
- Added The Story of My Life as the first category-powered collection on the About page.
- Marked Phases 3, 4 and 4.5 complete in `docs/ROADMAP.md`; Library is next.

## 2026-08-30

### Phase 2 complete: navigation, About and Archive

- Replaced menu-driven primary navigation with a deliberately controlled six-item navigation: Blog, About, Photos, Library, Archive and Subscribe.
- Revamped `/about/` with a site-specific presentation and fuller authored introduction while keeping the Micro.blog profile bio separate.
- Added dedicated About styling and an Explore links section.
- Redesigned `/archive/` around year navigation, collapsible yearly sections, category browsing with counts, and readable handling of untitled microposts.
- Preserved complete chronological access and existing post/category URLs.
- Added both `_default` and root-level archive template overrides after confirming Micro.blog/Hugo template precedence could otherwise leave the Bayou archive template in use.
- Marked Phase 2 complete in `docs/ROADMAP.md`; Phase 3 (Writing hub) is next.

## 2026-08-29

### Homepage v1 live and sidebar removed

- Confirmed the new personal hub design is live at `davidmarsden.info`.
- Corrected homepage copy to **Helping Hand** and **The Kings Centre Southall**.
- Removed the local `layouts/partials/sidebar.html` override.
- Removed **Sidebar for Bayou 1.0.0** after confirming that it independently injected the remaining blogroll/recommendations sidebar.
- Kept **Blogroll shortcode 1.2.2** for the dedicated `/blogroll/` page; the shortcode itself only renders where explicitly placed.
- Documented the distinction between the Blogroll shortcode and Sidebar for Bayou plug-ins in `docs/PLUGINS.md`.
- Discovered that `davidmarsden.info` and `davidmarsden-test.micro.blog` were using the same custom Bayou theme, so theme edits affected both sites. The test blog should not be treated as isolated staging until it has its own cloned custom theme.

## 2026-08-28

### Homepage hub v1 approved for live deployment

- Replaced the chronological homepage on the test site with a personal hub at `/`.
- Added `/blog/` as a separate recent-posts page using a custom `blog` content type.
- Kept `/archive/` as the full historical archive.
- Added the approved homepage sections for writing/local democracy, football worlds, music, things I build and About.
- Added Blog to the main navigation and retained Archive and Photos.
- Preserved the existing Manchester United colour palette with responsive light/dark styling.
- Tested titled and untitled posts successfully on `davidmarsden-test.micro.blog`.
- Removed pagination from the custom `/blog/` page after Micro.blog returned a nil paginator; `/blog/` now shows the latest 20 posts and links to the archive.
- Added `docs/DEPLOYMENT-V1.md` with the live deployment order, smoke tests and rollback procedure.
- No DNS, domain, ActivityPub/Fediverse identity, permalink or feed configuration changes are part of v1.

## 2026-08-27

### Baseline captured

- Recorded the existing `davidmarsden.info` custom theme layer before homepage redesign work.
- Confirmed Bayou 1.2.4 as the base theme and Hugo 0.91 as the current Hugo version.
- Preserved the five local overrides currently differing from or extending the upstream theme.
- Added a documented plug-in inventory and a redacted site configuration reference.
- No live-site behaviour changed as part of this baseline capture.
