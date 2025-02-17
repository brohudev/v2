---
title: Moving to Astro from React o.O
date: 2025-02-08
time: 5 min
type: tech
tagline: "tldr: Me no like React, me like Astro"
---

**TL;DR:** React is a great library... however, it’s not so great when you’re after a fast, simple, and useful site that lets you focus on the user side of things instead of wrestling with JSX.

## What I Had Before

I started off with a single-page React app. It had a basic paragraph, a profile picture that was, well, *not my Profile picture*, and a collection of all my links neatly laid out. It did the job—it was barely even a portfolio—but it worked as a digital placeholder.

## What I Wanted

I had a clear vision for my site:

- I wanted a setup where I could configure the design separately from the content.
- I needed a platform to kick off my own blog that met some key requirements:
  - All content in Markdown so writing stays simple.
  - An RSS feed to keep my readers updated.
  - ~~My very own RSS-by-email plugin to ensure I wasn’t locked into proprietary platforms (Substack is great, but not quite my style).~~ Update: I've since abandoned this as just an rss feed is good enough for me to move onto better things lol.
- I also envisioned a site that displayed a growing list of my projects and experiences—a collection of links and musings that felt uniquely “my corner of the internet, my way.”

## What I Did

I decided to overhaul everything by building a new site using Astro and Tailwind. I adopted the Rose Pine theme for its cool aesthetic and drew heavy inspiration from [Mitchell Hashimoto's site](https://mitchellh.com). This move was timely—around the time of the Ghostty release—and marked a significant upgrade from my earlier setup.

## What I Used

Here’s the toolbox for my new digital playground:

- **Astro:** A solid SSR framework (or for me more like SSG++) that really fits my needs. Who knows, maybe someday I’ll craft my own Hugo or Jekyll template, but for now, Astro is more than good enough.
- **Tailwind:** For styling that’s both flexible and bearable for the human developer.
- **React (only for the nav bar):** I couldn’t completely abandon React due to a very specific Interaction I wanted for the nav bar, but its contribution to the overall codebase has gone down significantly.

So yeah—enjoy my site! I’ll be dropping more thoughts, project overviews, and tech rants in the coming weeks, months, and years. And who knows? The site will most likely evolve into something even better in the future.