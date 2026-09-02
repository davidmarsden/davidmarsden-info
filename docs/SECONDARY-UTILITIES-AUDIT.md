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

## Confirmed public utilities

### Search Space — Explore

Current path: `/search-space/`

Keep. Search Space searches both posts and replies and supports suggestions and linkable results. That makes it substantially more useful than a simple post-title search, especially on a long-running Micro.blog archive.

Proposed public label: **Search**.

### Blogroll — Explore

Keep the dedicated blogroll/recommendations page. It belongs in the personal-web layer of the site and says something useful about what David reads and follows.

Do not restore the former Bayou recommendations sidebar. The blogroll should remain a destination rather than site-wide furniture.

### Stargate / Surprise me! — Explore

Current path: `/stargate/`, supplied by the **Surprise me!** plug-in.

Keep. It provides a random-post route into the archive and fits the intended 'rabbit hole' role extremely well.

The current name **Stargate** is fun but opaque. Consider exposing it in Explore as **Surprise me** or **Random post**, while preserving `/stargate/` unless there is a strong reason to change the URL.

### RSS — Explore

Keep `/feed.xml` visible as a first-class independent-web subscription option. It does not need primary-navigation status.

### GitHub — Explore or quietly keep

The existing footer links to David's GitHub profile. Keep this if the footer is framed as a broader Explore/elsewhere area; otherwise it can remain a lower-priority utility link.

## Likely retire

### Tweets archive — Retire

Current path: `/tweets/`, supplied by **Tweet archive 1.0.4**.

The page is a dedicated archive interface for old tweets. It no longer contributes much to the site's current editorial structure, while the site's own archive and Writing hub now provide much stronger historical discovery.

Recommendation: remove the Tweet archive plug-in once confirmed that no material worth preserving exists only through that interface. If the underlying imported tweets are ordinary site content, keep that content and retire only the special archive UI.

## Not currently installed / not yet present

### On This Day

The earlier roadmap listed On This Day as a candidate, but the baseline plug-in inventory does not contain an On This Day/MicroMemories plug-in and no current page has yet been confirmed.

Recommendation: do **not** add it merely to fill the Explore area. Reconsider only if it adds a genuinely different discovery experience after Search and Surprise me are in place.

## Plug-in audit — first pass

The 2026-08-27 plug-in inventory should also be reviewed during Phase 6. Initial positions:

### Clearly retained / currently useful

- Bayou Theme
- Photos page
- All photos — subject to confirming it still serves the current curated Photos architecture
- Photo collections
- Blogroll shortcode
- Search Space
- Lite YouTube for Micro.blog
- Bandcamp Shortcode
- Micro.blog Open External Links
- Video streaming
- Bookshelf shortcode

### Review before touching

These may be useful dependencies or post-level helpers and should not be removed without checking actual usage:

- Reply by email
- Conversation on Micro.blog
- Podcast title
- Reply on Mastodon
- Microblog Theme Shortcodes
- Postlist

### Candidate for removal

- Tweet archive

### Keep as secondary discovery

- Surprise me!

## Repository cleanup discovered during audit

`layouts/partials/sidebar.html` was still present in GitHub even though the live sidebar was removed on 2026-08-29 and the repository documentation already described the local sidebar override as removed. The stale file contained the old recommendations and Links sidebar widgets.

It was deleted from `main` on 2026-09-02 so the repository once again matches the intended live architecture.

## Proposed Explore footer — first draft

Keep this compact. No separate Explore page is necessary at present.

**Explore:** Search · Blogroll · Surprise me · RSS · GitHub

Possible final variation if GitHub feels too 'developer-facing':

**Explore:** Search · Blogroll · Surprise me · RSS

The chronological Blog remains reachable prominently from the homepage and Writing, so it does not need to be duplicated here unless usability testing suggests otherwise.

## Next actions

1. Confirm the current Micro.blog Pages list and identify any additional special/plugin pages not visible in the primary navigation.
2. Confirm the dedicated blogroll URL and presentation.
3. Check whether the Tweet archive contains anything that is not preserved elsewhere; if not, uninstall **Tweet archive 1.0.4** in Micro.blog.
4. Audit the ambiguous plug-ins for actual usage before removing any.
5. Implement the small Explore footer after the inventory is settled.
6. Re-test primary pages and feeds after any plug-in removals.
