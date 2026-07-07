# Valley Line Plumbing — Astro Site

## Structure

```
.github/workflows/deploy.yml   GitHub Pages deploy on push to main
public/
  fonts/                       drop self-hosted .woff2 files here (optional, see fonts/README.md)
  favicon-light.svg
  favicon-dark.svg
src/
  assets/
    icons/ images/ logos/      raw image/icon/logo source files (referenced via Astro's <Image />
                                or plain <img src={import(...)}> as you add real photos)
  components/
    layout/
      Header.astro             top bar + sticky nav
      Footer.astro              site footer
    ui/
      Button.astro              shared CTA button (variant: primary | outline | outline-dark | inverse)
      PageHero.astro             shared dark hero banner used by services/about/service-areas/contact
  data/                          all copy/content lives here as plain JS, separate from markup
    site.js                      nav links, footer links, phone/email/address/hours
    services.js                  homepage preview list, full services list, process steps, "why us" reasons
    areas.js                     service area lists (short + primary + by-county)
    about.js                     stats, values, credentials
    contact.js                   contact form service-type options
  layouts/
    BaseLayout.astro             <html> shell: Header, slot, Footer, global CSS, font links
  pages/
    index.astro                  composes src/sections/home/*
    services.astro                composes src/sections/services/*
    about.astro                   composes src/sections/about/*
    service-areas.astro           composes src/sections/service-areas/*
    contact.astro                 composes src/sections/contact/*
  sections/
    home/       Hero, TrustStrip, ServicesPreview, WhyUs, AreaStrip, CTA
    services/   ServicesGrid, Process, CTABand
    about/      Intro, StatsBand, Values, Credentials, CTA
    service-areas/  MapAndPrimary, Counties, NotSureBand
    contact/    QuoteForm, ContactSidebar, MapStrip
  styles/
    global.css                    reset, fonts, shared responsive grid utilities (.r-grid-*, .r-split, .r-strip),
                                    scroll-reveal keyframe classes
  utils/
    reveal.js                     IntersectionObserver scroll-reveal, wired up once in BaseLayout
```

## What changed vs. the original 6-file version

- Every page used to be one giant file with inline `style="..."` on every element and the same
  data arrays (services, areas, etc.) copy-pasted between pages. That's all been split apart:
  **content → `data/`, one-off visual blocks → `sections/`, shared chrome → `components/`.**
- Inline styles were converted to scoped `<style>` blocks per component (Astro scopes these
  automatically — no class name collisions between components).
- Repeated CTA buttons became one `<Button variant="..." size="..." href="...">` component.
- The four inner-page hero banners (Services/About/Service Areas/Contact) were identical markup
  with different text — now a single `PageHero` component takes `eyebrow`/`title`/`description` props.
- Added `data-reveal` + `utils/reveal.js` for a subtle scroll-in effect on cards/grids (optional —
  remove the attribute anywhere you don't want it).

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

Remember: since Astro is installed locally (not globally), always go through
`npm run dev` / `npm run build`, or `npx astro ...` for one-off CLI commands.

## Deploying

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.
In your repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

- If you're using a custom domain, add a `public/CNAME` file containing just the domain
  (e.g. `www.valleylineplumbing.com`) and make sure `site` in `astro.config.mjs` matches.
- If you're deploying to the default `https://<user>.github.io/<repo>/` path instead, add
  `base: '/<repo>/'` to `astro.config.mjs`.

## Adding real content

- Replace the `[ hero photo ]` / `[ team photo ]` / `[ interactive map ]` placeholders in
  `src/sections/**` with real images (drop files in `src/assets/images/` and import them) or an
  embedded Google Maps iframe.
- Wire up `src/sections/contact/QuoteForm.astro`'s `<script>` to actually POST to your email
  service / CRM (there's a `// TODO` at the fetch call site).
- Swap the license number, phone, email, and address placeholders in `src/data/site.js`.
