# Fonts

This project currently loads Oswald, Public Sans, and JetBrains Mono from
Google Fonts (see the `<link>` tags in `src/layouts/BaseLayout.astro`).

If you'd rather self-host (better privacy, one less external request, works
offline), drop the `.woff2` files here and swap the `<link>` tags in
`BaseLayout.astro` for `@font-face` declarations in `src/styles/global.css`,
e.g.:

```css
@font-face {
  font-family: 'Oswald';
  src: url('/fonts/Oswald-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```
