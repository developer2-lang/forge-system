/**
 * Agency-grade smooth scroll animation with cubic-quartic easing.
 * Delivers buttery, momentum-like scrolling similar to Lenis/GSAP.
 */
export function smoothScrollTo(
  target: HTMLElement | string,
  options?: {
    offset?: number;
    duration?: number;
    onComplete?: () => void;
  }
): void {
  const el =
    typeof target === 'string'
      ? (document.querySelector(target) as HTMLElement | null)
      : target;

  if (!el) return;

  const offset = options?.offset ?? 40;
  const duration = options?.duration ?? 850;
  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const rect = el.getBoundingClientRect();
  const targetY = rect.top + startY - offset;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) return;

  let startTime: number | null = null;
  let animationFrameId: number;
  let userInterrupted = false;

  const cancelEvents = ['wheel', 'touchstart', 'keydown'];
  const onUserInteraction = (e: Event) => {
    if (
      e instanceof KeyboardEvent &&
      !['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'].includes(e.code)
    ) {
      return;
    }
    userInterrupted = true;
    cleanup();
  };

  const cleanup = () => {
    cancelAnimationFrame(animationFrameId);
    cancelEvents.forEach((evt) =>
      window.removeEventListener(evt, onUserInteraction)
    );
  };

  cancelEvents.forEach((evt) =>
    window.addEventListener(evt, onUserInteraction, { passive: true })
  );

  // Quartic deceleration curve: fast takeoff, long buttery glide to a stop
  const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

  const step = (timestamp: number) => {
    if (userInterrupted) return;

    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeOutQuart(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    } else {
      cleanup();

      // Subtle pulse highlight on the destination stage card
      el.classList.add('stage--highlighted');
      setTimeout(() => {
        el.classList.remove('stage--highlighted');
      }, 1600);

      options?.onComplete?.();
    }
  };

  animationFrameId = requestAnimationFrame(step);
}

export default smoothScrollTo;
