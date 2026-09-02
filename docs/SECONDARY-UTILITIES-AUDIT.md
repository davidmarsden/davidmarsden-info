# Secondary utilities audit

Phase 6 reviews the site's secondary pages and plug-in-generated utilities. The aim is to preserve useful personal-web rabbit holes without allowing them to compete with the six-item primary navigation.

Status: **In progress — started 2026-09-02**

## Decision rule

Every secondary destination should fall into one of three groups:

1. **Explore** — genuinely useful or enjoyable for a curious visitor; surface it in a small secondary Explore/footer area.
2. **Quietly keep** — preserve the URL/function because it has archival, technical or contextual value, but do not promote it globally.
3. **Retire** — obsolete, duplicative, abandoned or no longer worth the maintenance/plugin cost.

Primary navigation remains deliberately unchanged:

- Writing
- About
- Photos
- Library
- Archive
- Subscribe

## Live Pages review — 2026-09-02

A review of the current Micro.blog Pages screen confirmed the remaining special pages include:

- `/about`
- `/subscribe`
- `/blogroll`
- `/search-space/`
- `/library`
- `/photos`
- `/replies`
- `/stargate`
- `/trees`
- `/x`
- `/tweets`
- `/.well-known/atproto-did`

Several older pages had already been deleted manually before this review. The remaining list now consists mainly of pages we deliberately want to keep, pages that are useful but should not be promoted, and one technical endpoint.

## Explore

### Search Space

Current path: `/search-space/`

Keep. Search Space searches both posts and replies and supports suggestions and linkable results. That makes it substantially more useful than a simple post-title search, especially on a long-running Micro.blog archive.

Public label: **Search**.

### Blogroll

Keep the dedicated blogroll/recommendations page. It belongs in the personal-web layer of the site and says something useful about what David reads and follows.

Do not restore the former Bayou recommendations sidebar. The blogroll should remain a destination rather than site-wide furniture.

### Stargate / Surprise me!

Current path: `/stargate/`, supplied by the **Surprise me!** plug-in.

Keep. It provides a random-post route into the archive and fits the intended 'rabbit hole' role extremely well.

Expose it as **Surprise me** while preserving `/stargate/`.

### RSS

Keep `/feed.xml` visible as a first-class independent-web subscription option. It does not need primary-navigation status.

### GitHub

Keep the existing GitHub link if the footer is framed as a broader Explore/elsewhere area. It remains lower priority than the site-native discovery links.

## Quietly keep

### Tweets / X archive

Current paths: `/tweets/` and `/x`.

These are two routes into the same preserved Twitter/X archive rather than separate utilities. The archive contains David's full Twitter/X history up to the date the export was saved, around 2025. It has genuine archival value and should **not** be discarded merely because it is no longer part of the public-facing site structure.

Decision: preserve the archive but do not promote either route in navigation or Explore. If practical, retain only one canonical public route later to avoid needless duplication.

Important distinction: an unlinked static page is still publicly reachable if someone knows or discovers the URL. If the archive should be genuinely private rather than merely unobtrusive, it needs to be moved to private/offline storage or otherwise access-controlled; `noindex`/removing links is not privacy.

### Replies

Keep available because replies form part of David's Micro.blog history and Search Space can search them, but do not surface `/replies` as a main destination unless there is a later editorial reason to do so.

### Trees

Keep as a curated collection/content source. It does not need global navigation because the category/collection model already provides contextual routes where useful.

### `/.well-known/atproto-did`

**Technical endpoint — keep. Do not treat as a user-facing page.**

This is an AT Protocol identity-resolution endpoint. AT Protocol handles are domain names that resolve to a stable DID (decentralized identifier); one supported method is an HTTPS endpoint at `/.well-known/atproto-did`. It is machine-readable infrastructure used by AT Protocol/Bluesky-style identity systems, not content or navigation.

Do not delete it merely because it appears in Micro.blog's Pages screen, and never add it to navigation or Explore.

## Not currently installed / not yet present

### On This Day

The earlier roadmap listed On This Day as a candidate, but no current On This Day/MicroMemories plug-in or page is present.

Decision: do **not** add it merely to fill the Explore area. Search and Surprise me already provide two distinct archive-discovery routes.

## Plug-in audit

### Clearly retained / currently useful

- Bayou Theme
- Photos page
- All photos — subject to confirming it still serves the current curated Photos architecture
- Photo collections — actively used by the `/photos` page via `{{< collection "Favourite Photos" >}}`
- Blogroll shortcode
- Search Space
- Surprise me!
- Reply by email — visibly active on post pages
- Conversation on Micro.blog — visibly active on post pages and provides the federated/sign-in reply UI
- Reply on Mastodon — retain; live replies include Mastodon participants and the federated reply surface is part of the intended Micro.blog experience
- Lite YouTube for Micro.blog
- Bandcamp Shortcode
- Micro.blog Open External Links
- Video streaming
- Bookshelf shortcode
- Tweet archive — retain while it is required to preserve the Twitter/X archive unless/until that archive is moved elsewhere

### Keep for now / no cleanup benefit proven

David reports no known deliberate current use for the following, but there is little value in removing them merely for tidiness while the site is stable:

- Podcast title
- Microblog Theme Shortcodes
- Postlist

Revisit only if they cause conflicts, performance/build issues, or a later export confirms they are genuinely redundant.

### Reply UI styling issue

The reply/conversation feature is functionally valuable but visually poorly integrated with the custom Bayou colour scheme, especially in dark mode/mobile. Current symptoms include:

- bright white reply panel against the black page;
- oversized empty textarea/vertical space;
- typography and button treatment that feel unrelated to the rest of the site;
- plugin badges/controls visually competing with the article footer;
- federated reply content itself is useful and should be preserved.

Decision: **keep the functionality and restyle it**, preferably with narrowly scoped CSS overrides rather than forking the plug-ins. This belongs in Phase 6 because it affects the quality of a retained secondary/social utility.

## Repository cleanup discovered during audit

`layouts/partials/sidebar.html` was still present in GitHub even though the live sidebar was removed on 2026-08-29 and the repository documentation already described the local sidebar override as removed. The stale file contained the old recommendations and Links sidebar widgets.

It was deleted from `main` on 2026-09-02 so the repository once again matches the intended live architecture.

## Proposed Explore footer

No separate Explore page is necessary at present.

**Explore:** Search · Blogroll · Surprise me · RSS · GitHub

Possible tighter variation:

**Explore:** Search · Blogroll · Surprise me · RSS

The chronological Blog remains reachable prominently from the homepage and Writing, so it does not need to be duplicated here unless usability testing suggests otherwise.

## Next actions

1. Confirm whether `All photos` remains necessary alongside the current curated Photos implementation.
2. Restyle the retained Reply by email / Conversation on Micro.blog UI so it fits the site's dark/light and mobile presentation without breaking federated replies.
3. Decide whether the Twitter/X archive merely needs to be unpromoted or should be genuinely private; if private, preserve it outside the public static site before removing the public routes/plugin.
4. Consider whether `/x` and `/tweets/` should remain duplicate routes or whether one can become canonical/retired later.
5. Implement the small Explore footer once the utility inventory is settled.
6. Re-test homepage, Writing, Photos, Library, Archive, Search, feeds, replies, older shortcode-heavy posts, and dark/mobile presentation after changes.
