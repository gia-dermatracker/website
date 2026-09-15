# website
Where all the website files live

## Structure

Static site, served from the repo root — no build step, no framework.

- `index.html`, `story/index.html`, `businesses/index.html`, `investors/index.html` — the four pages. Each is a real HTML document with its own URL (`/`, `/story/`, `/businesses/`, `/investors/`) and its own title/description/Open Graph tags.
- `assets/site.css`, `assets/site.js` — shared styles (including the keyframe animations and hover effects) and the small vanilla-JS behaviors (logo squish, "how it works" step picker). No React/build tooling — plain CSS and JS.
- `uploads/` — images referenced by the pages.
- `robots.txt`, `sitemap.xml` — for search engine crawling once the site is live at `gia-derma.com`.

Edit the pages above directly — there's no separate design source anymore. (An earlier version of this site was built from a Claude-Design canvas file under `landing_page/`; that's been removed since it required manually porting every edit over to these files to keep them in sync. It's still in git history if ever needed again.)

## Hosting

Live on GitHub Pages at `gia-derma.com`, served from the repo root with a `CNAME` file for the custom domain.
