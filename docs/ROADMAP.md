# davidmarsden.info roadmap

This roadmap records the continuing redesign of davidmarsden.info. The guiding principle is to keep Micro.blog as the publishing/content layer while making the public site feel deliberately edited, personal and easy to explore.

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

## Phase 5 — Library — Done

Completed 2026-09-02.

Keep `/library/` and Micro.blog Bookshelves as the underlying content source, while making the page feel like part of davidmarsden.info rather than a generic plug-in screen.

Implemented:

- a site-specific Library presentation built around the existing Micro.blog reading data;
- clear separation of current/unfinished reading from finished books;
- a dedicated Book Reviews section using David's own posts where a review exists;
- Book Reviews rotate from the review pool rather than always showing the most recent four;
- reviewed books resolve to the davidmarsden.info review rather than unnecessarily sending readers to Micro.blog's generic book page;
- non-reviewed books retain the useful Micro.blog book-page fallback;
- local `/books/<isbn>/` detail-page behaviour has been enabled and routing edge cases around reviewed/currently-reading books have been resolved;
- Library intro copy is maintained in Micro.blog (`What I’m reading now, or what I started reading and haven't finished, as well as books I did actually read.`).

The Library now follows the same editorial model as Writing and Photos: Micro.blog remains the source of truth, while the theme provides the curated presentation.

## Phase 6 — Secondary utilities — Done

Completed 2026-09-03.

The secondary-pages and plug-in audit is recorded in `docs/SECONDARY-UTILITIES-AUDIT.md`.

Implemented and confirmed live:

- retained **Search**, **Blogroll**, **Surprise me**, **RSS** and **GitHub** as a small secondary discovery layer;
- added one consistent site-wide **Explore** footer: Search · Blogroll · Surprise me · RSS · GitHub;
- removed the homepage-only legacy Blog · Archive · RSS · GitHub footer so the homepage now uses the same shared footer as the rest of the site;
- retained Replies and the Twitter/X archive without promoting them globally;
- retained the AT Protocol `/.well-known/atproto-did` endpoint as technical infrastructure rather than navigation;
- retained the reply/conversation plug-ins because they support real Micro.blog, Mastodon and Bluesky participation;
- restyled the reply/conversation UI for consistent light/dark presentation and sensible sizing;
- retained the photo/collection plug-ins required by the curated Photos page;
- added and configured a site-matched newsletter template, with the same Explore vocabulary plus email-specific Unsubscribe/View in browser controls;
- confirmed the Subscribe page and monthly newsletter configuration are working as intended;
- removed the stale old Bayou sidebar override from GitHub.

The Twitter/X archive remains intentionally quiet rather than promoted. Whether it should eventually be genuinely private or consolidated to one route is a separate archival/privacy decision and does not block the site-organisation work.

## Phase 7 — Homepage integration — In progress

Started 2026-09-03.

Keep the homepage as a concise personal hub while adding a small amount of changing content and visual identity from the destination pages built in earlier phases.

Implemented in GitHub, pending live-theme review:

- changed the hero CTA from the chronological Blog to **Explore my writing →** linking to `/writing/`;
- updated **Ealing Civic Commons** to the main `ealing.civiccommons.co.uk` home and added the approved revived Ealing oak mark;
- added a restrained Hovercraft listening treatment featuring **Mr Tooting Brown** and a route into the Hovercraft Jukebox;
- added the real Helping Hand family of tool icons from the Helping Hand project;
- added a compact **Now** section between Things I build and About;
- Now rotates one **Selected Writing** item and one **Favourite Photo** at build time, and shows the current Micro.blog reading item/book cover;
- renumbered About to section 06;
- added responsive styling so the new visual layer remains editorial rather than turning the homepage into a dashboard.

Remaining before Phase 7 is complete:

- apply/rebuild on the live Micro.blog theme and review desktop/mobile plus light/dark presentation;
- confirm the remote Civic Commons and Helping Hand brand assets load reliably from their canonical project sites;
- check the dynamic Favourite Photo and currently-reading data against real Micro.blog build output;
- make one small visual refinement pass if needed, then stop rather than adding more homepage furniture.

## Phase 8 — Final polish and maintenance model — Later

Once the main destinations are settled:

- review responsive behaviour and dark/light presentation across the whole site;
- remove or document obsolete overrides/plugins/pages;
- confirm important URLs, feeds and Micro.blog integrations remain intact;
- make the distinction between Micro.blog-managed content/settings and GitHub-managed presentation explicit in the documentation;
- keep future curation lightweight enough that the site does not become a second CMS to maintain.

## Implementation principles

1. Keep GitHub as the documented source of truth for deliberate customisations.
2. Prefer small Hugo/theme overrides over additional plugins when the presentation needs to be site-specific.
3. Keep Micro.blog responsible for publishing and content management wherever possible.
4. Separate editorial curation from exhaustive archives.
5. Treat categories as potential subjects, editorial markers or curated collections — but give each a clear purpose.
6. Protect existing URLs and feeds.
7. Test meaningful theme changes against a genuinely isolated test theme before production where practical.
8. Update this roadmap and `CHANGELOG.md` as phases are completed or materially changed.
