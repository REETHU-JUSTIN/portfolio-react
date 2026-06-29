import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in the viewport so the navbar can
 * highlight the matching link. Uses IntersectionObserver with a margin
 * that treats the vertical center of the screen as the trigger line.
 *
 * @param {string[]} ids - section element ids, in document order.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // ids is a module-level constant array, so this runs once.
  }, [ids]);

  return active;
}
