import React from "react";
import type { ReactNode } from "react";
import { useScrollAnimation } from "./useScrollAnimation";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number; // optional delay for staggered effect
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, delay = 0 }) => {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1200ms] transform
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
      `}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
