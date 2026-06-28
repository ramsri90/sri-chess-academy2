"use client";

import { useEffect, useRef, useState } from "react";

export default function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`max-w-content mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="glass rounded-card p-12 md:p-20 max-w-4xl mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-6 text-accent opacity-60"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading leading-tight text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #00bcd4, #00796b, #26c6da)",
              WebkitBackgroundClip: "text",
            }}
          >
            &ldquo;The beauty of a move lies not in its appearance but in the thought behind it.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
