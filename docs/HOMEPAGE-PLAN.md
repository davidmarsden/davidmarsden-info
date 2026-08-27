# Homepage plan

## Goal

Turn `davidmarsden.info` into the front door to David Marsden's online work while retaining the existing Micro.blog site, domain, social identity, content, feeds and post URLs.

## Information architecture

### Home

A concise personal hub rather than a chronological post stream.

Opening idea:

> **David Marsden**  
> Writing, investigating, building things and occasionally making a racket.

The homepage should explain the different strands of work and provide clear routes to the independent sites.

### Writing & local democracy

- Personal writing / Micro.blog
- Southall Stories — `https://southallstories.uk/`
- Ealing Civic Commons — incubated through Southall Stories

### Football worlds

- SM Top 100 — `https://smtop100.blog/`
- Top 100 Regen — `https://top100regen.website/`
- The Beautiful Game — `https://thebeautifulgame.online/`
- The Pink Final — `https://thepinkfinal.online/`
- One Jimmy Carter — legacy football blog/archive

### Music

- Hovercraft — `https://hovercraft.band/`

### Things I build

- Handwritten Publish
- Future small tools and experiments

### About

Short personal biography and contact/social links.

King's Centre Southall may be mentioned discreetly as professional employment, not presented as one of David's own projects. A simple personal-views disclaimer can provide separation.

## Intended URL structure

- `/` — personal hub
- `/blog/` — chronological personal post stream
- existing individual post URLs — unchanged
- existing archive/category/page URLs — unchanged unless deliberately reviewed later

## Design principles

- Personal publishing hub, not corporate portfolio
- Strong typography, generous spacing, minimal card-grid styling
- Small amounts of project-specific visual character
- Mobile-first, simple navigation
- Avoid turning the homepage into a dashboard of automated feeds
- Keep v1 modest: explain and link what already exists

## Constraints

Do not casually change:

- the `davidmarsden.info` custom domain;
- the Micro.blog/Fediverse identity;
- existing post permalinks;
- feeds or syndication behaviour;
- plug-in behaviour unrelated to the homepage work.

## Implementation stages

1. **Baseline** — preserve and document the current custom layer.
2. **Prove** — test custom `/` plus chronological `/blog/` on a preview/test blog.
3. **Design** — build the homepage in small, reviewable changes.
4. **Deploy** — apply only tested changes to the live custom theme.
5. **Stop** — let v1 settle before expanding the project into wider cross-site redesign work.
