"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}) {
  const nodeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  return (
    <Component
      ref={nodeRef}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      data-direction={direction}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
