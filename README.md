# Portfolio V2

V2 of my portfolio site is built with astro because I wanted to incorporate a blog alongside it, and do a major redesign since the last one was neither responsive, nor accessible, nor pretty to look at.

So I will gut pretty much the whole site barring the HTML, and start from there. 

Built, with Love, on Astro

---
## project structure: 
#### and brief explanations (where necessary)
```.
├── public
│   ├── icons
│   ├── images
│   └── logo.ico
└── src
    ├── components
    │   ├── aside.astro
    │   ├── career-card.astro
    │   ├── career-card-points.astro
    │   ├── footer.astro
    │   ├── icon.astro
    │   ├── project-card.astro
    │   ├── techstack.astro
    │   ├── title.astro
    │   └── writing-card.astro
    ├── content
    │   ├── career
    │   ├── projects
    │   └── writing
    ├── layouts
    │   └── base.astro
    ├── pages
    │   ├── career.astro
    │   ├── index.astro
    │   ├── projects.astro
    │   └── writing
    │       ├── index.astro
    │       └── [post].astro
    └── styles
        └── global.css

14 directories, 47 files
```
### todo:
- [ ] add an rss feed. 
- [ ] style for mobile
- [ ] introduce giscus from this: <https://danidiaztech.com/integrate-astro-giscus/>

### potential new features to consider:
- [ ] search across blogs: <https://danidiaztech.com/create-astro-search-component/>
- [ ] tags for blogs and projects to improve seo
