# website
Where all the website files live

## Structure

Static site, served from the repo root — no build step, no framework.

- `index.html`, `story/index.html`, `businesses/index.html`, `investors/index.html` — the four pages. Each is a real HTML document with its own URL (`/`, `/story/`, `/businesses/`, `/investors/`) and its own title/description/Open Graph tags.
- `assets/site.css`, `assets/site.js` — shared styles (including the keyframe animations and hover effects) and the small vanilla-JS behaviors (logo squish, "how it works" step picker). No React/build tooling — plain CSS and JS.
- `uploads/` — images referenced by the pages.
- `robots.txt`, `sitemap.xml` — for search engine crawling once the site is live at `gia-derma.com`.
- `landing_page/` — **not served.** Holds the original Claude-Design canvas source (`Gia teal hero.dc.html` + `support.js`) that the current static pages were built from. Useful if you want to go back into the visual canvas editor, but it's a separate copy — content changes need to be made in the real pages above (or ported over from here), since the two will otherwise drift out of sync.

## Hosting

Not yet deployed. Plan is GitHub Pages, serving from the repo root, with `gia-derma.com` (already purchased) as a custom domain — still needs: enabling Pages in repo settings, pointing the domain's DNS at GitHub Pages, and adding a `CNAME` file.
