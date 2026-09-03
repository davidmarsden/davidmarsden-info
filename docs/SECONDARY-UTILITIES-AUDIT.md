# Secondary utilities audit

Phase 6 reviewed the site's secondary pages and plug-in-generated utilities. The aim was to preserve useful personal-web rabbit holes without allowing them to compete with the six-item primary navigation.

Status: **Done — completed 2026-09-03**

## Decision rule

Every secondary destination falls into one of three groups:

1. **Explore** — genuinely useful or enjoyable for a curious visitor; surfaced in the secondary Explore/footer area.
2. **Quietly keep** — preserve the URL/function because it has archival, technical or contextual value, but do not promote it globally.
3. **Retire** — obsolete, duplicative, abandoned or no longer worth the maintenance/plugin cost.

Primary navigation remains deliberately unchanged:

- Writing
- About
- Photos
- Library
- Archive
- Subscribe

## Explore — implemented

The shared site footer now exposes:

**Search · Blogroll · Surprise me · RSS · GitHub**

### Search Space

Current path: `/search-space/`

Kept. Search Space searches both posts and replies and supports suggestions and linkable results.

Public label: **Search**.

### Blogroll

Kept as a dedicated destination rather than restoring the former Bayou recommendations sidebar.

### Stargate / Surprise me!

Current path: `/stargate/`.

Kept as a random-post route into the archive and exposed publicly as **Surprise me**.

### RSS

`/feed.xml` remains a first-class independent-web subscription option in the secondary footer.

### GitHub

Kept as the lower-priority external link in the Explore layer.

## Quietly keep

### Tweets / X archive

Current paths: `/tweets/` and `/x`.

These are routes into the same preserved Twitter/X archive, containing David's history up to the saved export around 2025. The archive has genuine archival value but is not promoted in site navigation or Explore.

An unlinked static page is still publicly reachable. If David later decides the archive should be genuinely private, it should be moved to private/offline storage or access-controlled first. Consolidating `/x` and `/tweets/` to one route can also be revisited later. Neither decision blocks Phase 6.

### Replies

Kept available because replies form part of the Micro.blog history and Search Space can search them. They are not a main navigation destination.

### Trees

Kept as a curated collection/content source rather than global navigation.

### `/.well-known/atproto-did`

Technical AT Protocol identity endpoint. Kept intact and intentionally absent from human-facing navigation.

## Plug-in decisions

### Retained / useful

- Bayou Theme
- Photos page
- All photos
- Photo collections — actively used by `/photos` via `{{< collection "Favourite Photos" >}}`
- Blogroll shortcode
- Search Space
- Surprise me!
- Reply by email
- Conversation on Micro.blog
- Reply on Mastodon
- Lite YouTube for Micro.blog
- Bandcamp Shortcode
- Micro.blog Open External Links
- Video streaming
- Bookshelf shortcode
- Tweet archive — retained while it preserves the Twitter/X archive

### Kept for now

No cleanup benefit was demonstrated for removing these, so they remain installed unless they later cause conflicts or prove genuinely redundant:

- Podcast title
- Microblog Theme Shortcodes
- Postlist

## Reply/conversation presentation — completed

The federated reply UI was functionally useful but visually disconnected from the custom Bayou design. Phase 6 retained the functionality and added narrowly scoped site styling instead of forking the plug-ins.

Confirmed result:

- reply cards and form now fit both light and dark modes;
- textarea sizing and spacing are substantially improved;
- federated replies from Micro.blog/Mastodon/Bluesky remain intact;
- reply controls no longer look like a separate application bolted onto the page.

## Footer consistency — completed

The homepage previously had a separate `Blog · Archive · RSS · GitHub` footer row. This was removed so the homepage now uses the same shared Explore footer as other site pages.

The website footer architecture is therefore consistent across the site:

- **Primary navigation:** Writing · About · Photos · Library · Archive · Subscribe
- **Secondary Explore footer:** Search · Blogroll · Surprise me · RSS · GitHub

## Newsletter — completed

The Micro.blog newsletter was brought into the same design language without pretending email HTML is identical to a website footer.

Implemented/configured:

- a custom newsletter template matching the David Marsden site identity;
- newsletter Explore links use the same Search / Blogroll / Surprise me / RSS vocabulary;
- email-specific controls such as **Unsubscribe** and **View in browser** remain present;
- monthly newsletter setting is retained;
- stale deleted-category selection was reset to **Any category**;
- the settings-level newsletter HTML was updated so it no longer overrides the intended design with the old default template.

## Repository cleanup

The stale `layouts/partials/sidebar.html` override was deleted from `main` after the visible sidebar had already been removed. This brought GitHub back into line with the intended live architecture.

## Phase 6 outcome

Phase 6 is complete. The secondary structure now has a clear hierarchy rather than a collection of leftover Micro.blog pages:

- strong six-item primary navigation;
- one compact Explore footer;
- useful personal-web discovery tools retained;
- archival/technical pages kept quietly where appropriate;
- federated replies visually integrated;
- newsletter and website use consistent navigation/footer language.

Further archival privacy decisions or plug-in pruning can be handled during later maintenance rather than blocking the redesign roadmap.
