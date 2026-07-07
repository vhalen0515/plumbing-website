/**
 * Adds a lightweight scroll-reveal effect to any element marked with
 * a `data-reveal` attribute. Pairs with the `[data-reveal]` / `.is-visible`
 * rules in `src/styles/global.css`.
 *
 * Usage in a component:
 *   <div data-reveal>...</div>
 */
export function initReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}
