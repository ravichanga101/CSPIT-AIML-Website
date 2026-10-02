'use client';

import { useEffect, useRef } from 'react';

/**
 * ScrollAnimator — One-directional scroll-reveal animation system.
 *
 * Replaces the one-shot WOW.js behavior with an IntersectionObserver that:
 *   • Animates elements into view on scroll DOWN (fade + rise)
 *   • Once revealed, elements stay permanently visible (no reset on scroll up)
 *   • Applies stagger delays to groups of cards / grid children
 *   • Respects prefers-reduced-motion
 */
export default function ScrollAnimator() {
  const initialised = useRef(false);

  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;

    // ── Respect prefers-reduced-motion ──
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    // ── Disable WOW.js ──
    // WOW.js adds inline styles (visibility:hidden, animation-name, etc.).
    // We strip those so our CSS-driven system can take over.
    const neutraliseWow = () => {
      document.querySelectorAll('.wow').forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.removeProperty('visibility');
        htmlEl.style.removeProperty('animation-name');
        htmlEl.style.removeProperty('animation-duration');
        htmlEl.style.removeProperty('animation-delay');
        htmlEl.style.removeProperty('animation-iteration-count');
        htmlEl.classList.remove('animated', 'fadeInUp', 'fadeIn', 'fadeInDown', 'fadeInLeft', 'fadeInRight');
      });
    };

    // Run immediately and again after WOW.js may have initialised
    neutraliseWow();
    const wowTimer1 = setTimeout(neutraliseWow, 300);
    const wowTimer2 = setTimeout(neutraliseWow, 800);
    const wowTimer3 = setTimeout(neutraliseWow, 1500);

    // ── Quick count-up animation for statistics ──
    const animateCounter = (el: HTMLElement) => {
      const text = el.innerText.trim();
      const match = text.match(/^([^\d]*)(\d+)([^\d]*)$/);
      if (!match) return;

      const prefix = match[1] || '';
      const targetNum = parseInt(match[2], 10);
      const suffix = match[3] || '';
      if (isNaN(targetNum)) return;

      const duration = 550;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(ease * targetNum);
        el.innerText = `${prefix}${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.innerText = text;
        }
      };
      requestAnimationFrame(step);
    };

    // ── Tag alternating sections with slide-left / slide-right / slide-up ──
    const setupSectionEntrances = () => {
      const sections = Array.from(document.querySelectorAll('section')).filter((s) => {
        return !s.closest('.hero-section-redesign') && !s.closest('#intro') && !s.closest('#header') && s.id !== 'intro';
      });

      sections.forEach((sec, idx) => {
        if (idx % 3 === 1) {
          sec.classList.add('scroll-slide-left');
        } else if (idx % 3 === 2) {
          sec.classList.add('scroll-slide-right');
        } else {
          sec.classList.add('scroll-section');
        }
      });
    };

    // ── Collect animatable elements ──
    const collectTargets = (): HTMLElement[] => {
      setupSectionEntrances();

      const selectors = [
        'section.wow',
        'section[id]',
        'section',
        '.about-header',
        '.about-body',
        '.about-left',
        '.about-right',
        '.about-stats-grid',
        '.about-stat-card',
        '.about-spotlight-card',
        '.ref-badge',
        '.ref-heading',
        '.ref-card',
        '.card',
        '.col-md-4',
        '.col-md-3',
        '.col-md-6',
        '.col-lg-4',
        '.col-lg-3',
        '.col-lg-5',
        '.col-lg-6',
        '[class*="section-header"]',
        '[class*="section-title"]',
        '.testimonials-carousel',
        '.clients-carousel',
        '.owl-carousel',
        '.portfolio-item',
        '#contact .container > .row > div',
        'form',
        '.footer-top .container > .row > div',
        '.portfolio-item img',
        '.achievement-card img',
        '.gallery-item img',
      ];

      const elements = new Set<HTMLElement>();
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          const htmlEl = el as HTMLElement;
          // Skip the hero section and navbar — those have their own animations
          if (
            htmlEl.closest('.hero-section-redesign') ||
            htmlEl.closest('#intro') ||
            htmlEl.closest('#header') ||
            htmlEl.closest('nav') ||
            htmlEl.tagName === 'NAV'
          ) {
            return;
          }
          elements.add(htmlEl);
        });
      });

      return Array.from(elements);
    };

    // ── Apply stagger delays for card groups ──
    const applyStaggerDelays = (targets: HTMLElement[]) => {
      const gridSelectors = ['.about-stats-grid', '.row', '.portfolio-container'];

      gridSelectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((container) => {
          if (
            (container as HTMLElement).closest('.hero-section-redesign') ||
            (container as HTMLElement).closest('#intro') ||
            (container as HTMLElement).closest('#header')
          ) return;

          const children = Array.from(container.children).filter(
            (child) => targets.includes(child as HTMLElement)
          );
          children.forEach((child, i) => {
            (child as HTMLElement).style.setProperty(
              '--scroll-stagger',
              `${Math.min(i * 65, 390)}ms`
            );
          });
        });
      });
    };

    // ── Set up the observer ──
    const setupObserver = () => {
      const targets = collectTargets();
      applyStaggerDelays(targets);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add('scroll-visible');
              observer.unobserve(el);

              // Animate number counters if present
              const statVals = el.querySelectorAll<HTMLElement>('.about-stat-value, .about-spotlight-meta-val');
              statVals.forEach(animateCounter);
              if (el.classList.contains('about-stat-value') || el.classList.contains('about-spotlight-meta-val')) {
                animateCounter(el);
              }
            }
          });
        },
        {
          threshold: 0,
          rootMargin: '0px 0px -25px 0px', // Triggers smoothly as element enters viewport
        }
      );

      const vh = window.innerHeight;
      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Above-the-fold or already visible elements display immediately
        if (rect.top < vh - 25) {
          el.classList.add('scroll-visible');
        } else {
          el.classList.add('scroll-animate');
          observer.observe(el);
        }
      });

      return observer;
    };

    // Fast setup to ensure DOM is ready and WOW.js is neutralised immediately
    neutraliseWow();
    const setupTimer = setTimeout(() => {
      neutraliseWow();
      setupObserver();
    }, 40);

    // Cleanup
    return () => {
      clearTimeout(wowTimer1);
      clearTimeout(wowTimer2);
      clearTimeout(wowTimer3);
      clearTimeout(setupTimer);
    };
  }, []);

  return null; // This component renders nothing — it only manages animations
}
