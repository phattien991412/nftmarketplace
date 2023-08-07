import { useEffect, useRef } from "react";

export default function AOS({ children, className, index }) {
  const contentRef = useRef();

  useEffect(
    () => {
      let obs;
      if (contentRef.current) {
        obs = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add(className);
                entry.target.classList.remove("animate");
              }
            });
          },
          { rootMargin: "-50px", threshold: 0.25 }
        );
      }

      if (obs) {
        obs.observe(contentRef.current);
      }

      return () => {
        if (obs && contentRef.current) {
          obs.unobserve(contentRef.current); 
        }
      };
    },
    [contentRef, className]
  );

  return (
    <div data-index={index} ref={contentRef} className="animate">
      {children}
    </div>
  );
}
