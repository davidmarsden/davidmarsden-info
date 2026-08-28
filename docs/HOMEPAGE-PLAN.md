# Homepage redesign plan

## Goal

Make `davidmarsden.info` the front door to David Marsden's online work while keeping the existing Micro.blog site, post URLs and social identity intact.

## Architecture

- `/` — authored personal/project hub.
- `/blog/` — latest personal posts, newest first.
- `/archive/` — complete historical archive.
- Existing individual post URLs remain unchanged.

The `/blog/` route uses a custom Hugo content type (`content/blog.md` with `type: blog`) and `layouts/blog/single.html`. Micro.blog returned a nil paginator for this custom single page, so the page deliberately displays the latest 20 posts and links to `/archive/` rather than paginating.

## Homepage sections

1. Hero / introduction
2. Writing & local democracy
   - Southall Stories
   - Ealing Civic Commons
   - Personal blog
3. Football worlds
   - SM Top 100
   - Top 100 Regen
   - The Beautiful Game
   - The Pink Final
   - One Jimmy Carter archive
4. Music
   - Hovercraft
5. Things I build
   - Handwritten Publish
6. About
   - Southall / current work
   - discreet King's Centre Southall reference
   - personal-site disclaimer

## Design principles

- Personal publishing hub, not corporate portfolio.
- Strong typography and generous whitespace.
- No grid of identical branded cards.
- Mobile-first single-column flow; paired project blocks where space allows.
- Keep project descriptions short and authored.
- No feeds/dashboard clutter on the homepage for v1.

## Rollout

1. Baseline captured and rollback branch created — done.
2. Prove `/` + `/blog/` architecture on test site — done 2026-08-28.
3. Build full homepage on `homepage-hub` branch — in progress.
4. Review design on `davidmarsden-test.micro.blog`.
5. Verify individual posts, feeds, normal pages and important plug-ins.
6. Merge only after successful checks and then apply to the live Micro.blog custom theme.
