'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide scroll-triggered reveal animations.
 *
 * Automatically observes every <section> (and the footer) on the page and
 * fades/slides it into view the first time it enters the viewport. Content
 * is only hidden while an active observer is watching it — on cleanup
 * (including React strict-mode double mounting) any still-hidden element is
 * restored, so the page can never be left blank. Respects
 * prefers-reduced-motion; no-JS visitors and crawlers always see content.
 */
const ScrollAnimations = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const prepare = () => {
      const hero = document.querySelector('main section');
      document
        .querySelectorAll<HTMLElement>('main section, footer')
        .forEach((el) => {
          if (el.classList.contains('reveal-in')) return;
          // Already scrolled past (e.g. reload with scroll restoration):
          // show it immediately instead of blanking content above the viewport.
          if (el.getBoundingClientRect().bottom < 0) {
            el.classList.add('reveal-in');
            return;
          }
          el.classList.add('reveal-section');
          if (el === hero) el.classList.add('reveal-hero');
          // observe() is a no-op for elements already being observed
          observer.observe(el);
        });
    };

    prepare();

    // Catch sections that mount later (lazy-loaded components, Firestore data)
    const mutations = new MutationObserver(prepare);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      // Nothing may stay hidden once this observer is gone; the next mount
      // (strict mode remount or route change) re-hides and re-observes.
      document
        .querySelectorAll('.reveal-section:not(.reveal-in)')
        .forEach((el) => el.classList.remove('reveal-section', 'reveal-hero'));
    };
  }, [pathname]);

  return null;
};

export default ScrollAnimations;
