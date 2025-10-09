"use client";

import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], options?: {
  rootMargin?: string;
  threshold?: number;
}) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio and position
          const sortedEntries = visibleEntries.sort((a, b) => {
            if (a.intersectionRatio !== b.intersectionRatio) {
              return b.intersectionRatio - a.intersectionRatio;
            }
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });
          
          setActiveId(sortedEntries[0].target.id);
        } else {
          // If no sections are visible, find the closest one
          const allEntries = entries.sort((a, b) => {
            const aTop = Math.abs(a.boundingClientRect.top);
            const bTop = Math.abs(b.boundingClientRect.top);
            return aTop - bTop;
          });
          
          if (allEntries.length > 0) {
            setActiveId(allEntries[0].target.id);
          }
        }
      },
      {
        rootMargin: options?.rootMargin || '-20% 0px -70% 0px',
        threshold: options?.threshold || 0.1,
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options?.rootMargin, options?.threshold]);

  return activeId;
}
