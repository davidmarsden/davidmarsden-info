# Plumbing the Library

*How I made Micro.blog’s Bookshelves feel like part of my own website — with local book pages, reviews and a graceful way back to Micro.blog when I haven’t written anything useful.*

I like Micro.blog’s Bookshelves. It already knows what I’m reading, what I’ve finished, and how I’ve sorted books into shelves. What I didn’t particularly want was for that information to feel like a separate service bolted onto my website.

I wanted the books to belong to **davidmarsden.info**.

The aim was fairly simple: keep Micro.blog as the source of the reading data, but make my Library look and behave like the rest of the site. If I’ve written about a book, its cover should lead to a page on my own site bringing that writing together. If I haven’t, the ordinary Micro.blog book page is still useful, so it should remain the fallback.

As usual, the simple idea involved a little plumbing.

## Bookshelves stay in charge

The Library at [davidmarsden.info/library/](https://davidmarsden.info/library/) is built from Micro.blog’s generated `bookshelves` data.

That means I’m not maintaining a second reading database just to make the website prettier. The custom Hugo template reads the existing shelves — currently reading, finished reading, fiction, non-fiction, kids and sport — and presents them in my own layout.

Micro.blog remains the place where I add and organise books. Hugo gets to decide how they appear.

That division of labour is important. I’ve built enough things to know that two sources of truth eventually become two slightly different sources of truth, followed by swearing.

## A local page when there’s something to say

The book cards use a small routing test.

By default, a cover links to Micro.blog’s standard book page:

```text
https://micro.blog/books/ISBN
```

But before doing that, the template checks whether I have something local for that ISBN.

Newer posts can expose a `books` front-matter field. If one of my Book Review posts names the ISBN there, the card can link instead to:

```text
/books/ISBN/
```

I also keep a tiny manual mapping file for older posts where the metadata is missing or inconsistent. It is deliberately an exception list rather than another catalogue.

So the rule becomes:

**My site when I have something useful to add; Micro.blog when I don’t.**

## The local book page

The local `/books/<isbn>/` template can show the cover, title, author, description and other available metadata, then look through my posts for writing attached to the same ISBN.

That gives me a proper landing page for a book rather than just a review floating somewhere in the archive.

It also means a book can accumulate more than one piece of writing over time. A review does not have to be the end of the conversation.

## And now, an actual Reviews page

I hadn’t bothered separating reviews from the wider Library because, frankly, I haven’t written that many actual book reviews.

Then I saw [Cliff’s post about his custom Micro.blog book pages](https://cliff538.com/2026/09/22/custom-book-pages-in-microblog.html). His distinction between a broad Reading page and a narrower Library of Book Reviews made sense.

So I’ve added [a Book Reviews page](https://davidmarsden.info/reviews/).

It gathers the books that are connected to my review posts, shows their covers using the same local-page/fallback routing, and then lists the reviews and reading notes underneath.

It is not a huge collection. That is fine. Empty shelves are allowed to fill up.

## Why bother?

None of this replaces a Micro.blog feature. That’s rather the point.

One of the things I increasingly like about Micro.blog is that it can provide the underlying machinery without insisting that every site built on top of it looks or behaves the same way.

Bookshelves provide structured reading data. Hugo provides templates. Post metadata provides the joins between the two. A small YAML file catches the awkward historical exceptions.

Together, that is enough to turn a hosted feature into something that feels native to my own site.

Which is my favourite kind of web plumbing: mostly invisible once it works.
