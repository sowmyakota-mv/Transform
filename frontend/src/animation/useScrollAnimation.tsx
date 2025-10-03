import { useEffect, useState, useRef } from "react";

export const useScrollAnimation = (threshold: number = 0.3) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true); // Trigger animation once
            observer.unobserve(entry.target); // Stop observing after first intersection
          }
        });
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
};
