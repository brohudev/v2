# Portfolio V2

mmmm much portfolio... how nice

But Serieously, V2 of my portfolio site is built with astro because I wanted to incorporate a blog alongside it, and do a major redesign since the last one was neither responsive, nor accessible, nor pretty to look at.

So I will gut pretty much the whole site barring the HTML, and start from there. 

Built, with Love, on Astro

---
## project structure: 
#### and brief explanations (where necessary)
```.
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public
│   ├── icons
│   │   ├── ccs.svg
│   │   └── club.svg
│   ├── images
│   │   ├── fleetly.png
│   │   └── hitarth.jpeg
│   └── logo.ico
├── README.md
├── src
│   ├── components                  # easy to style and debug a comp when its isolated like this ehehe
│   │   ├── aside.astro
│   │   ├── career-card.astro
│   │   ├── footer.astro
│   │   ├── project-card.astro
│   │   ├── techstack.astro
│   │   ├── title.astro
│   │   └── writing-card.astro
│   ├── content                     # this is where I shove all the .md files.
│   │   ├── Blog
│   │   ├── career
│   │   │   └── codered.md
│   │   └── projects
│   │       └── fleetly.md
│   ├── layouts
│   │   └── base.astro              # contains all the boilerplate
│   ├── pages                       # contains all the page containers.
│   │   ├── career.astro
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── writing.astro
│   └── styles
│       └── global.css
├── tailwind.config.mjs
└── tsconfig.json
```
### todo:
- [ ] add markdoc capability for the blog? (dont even know if im gonna need this tbh. vanilla markdown looks like it has everything i need......)
- [ ] add an rss feed. 

