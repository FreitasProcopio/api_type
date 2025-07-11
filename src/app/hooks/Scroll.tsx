import { useEffect, RefObject } from 'react';

export function useFadeInOnScroll(refs: RefObject<HTMLElement | null>[]) {
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, [refs]);
} 