import { useState, useEffect, useCallback, useRef } from 'react';

interface UseScrollSpineOptions {
  stagesRefs: Array<React.RefObject<HTMLElement | null>>;
}

interface UseScrollSpineReturn {
  activeIndex: number;
  progress: number; // 0 to 1
  progressPercent: string; // e.g. "45.2%"
}

export const useScrollSpine = ({
  stagesRefs,
}: UseScrollSpineOptions): UseScrollSpineReturn => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const tickingRef = useRef<boolean>(false);
  const pendingRef = useRef<boolean>(false);
  const lastActiveRef = useRef<number>(-1);

  const update = useCallback(() => {
    tickingRef.current = false;

    // Filter to existing stage elements
    const elements = stagesRefs
      .map((ref) => ref.current)
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const vh = window.innerHeight || 800;
    const read = vh * 0.40; // 40% viewport reading line

    const firstRect = elements[0].getBoundingClientRect();
    const lastRect = elements[elements.length - 1].getBoundingClientRect();

    const totalSpan = lastRect.bottom - firstRect.top;
    if (totalSpan < 200) return;

    // Determine active stage: last sheet whose top has crossed the reading line
    let currentActive = 0;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getBoundingClientRect().top <= read) {
        currentActive = i;
      }
    }

    // Compute continuous progress from first top to last bottom
    let p = (read - firstRect.top) / totalSpan;
    p = Math.max(0, Math.min(1, p));

    setProgress(p);

    if (currentActive !== lastActiveRef.current) {
      lastActiveRef.current = currentActive;
      setActiveIndex(currentActive);
    }
  }, [stagesRefs]);

  useEffect(() => {
    // Add js-on class to documentElement for progressive enhancement styling
    document.documentElement.classList.add('js-on');

    const handleScroll = () => {
      if (tickingRef.current) {
        pendingRef.current = true;
        return;
      }
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        update();
        tickingRef.current = false;
        if (pendingRef.current) {
          pendingRef.current = false;
          handleScroll();
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial check
    update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [update]);

  return {
    activeIndex,
    progress,
    progressPercent: `${(progress * 100).toFixed(1)}%`,
  };
};

export default useScrollSpine;
