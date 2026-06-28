"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding section-light">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-secondary mb-8 text-center">
            About Sri Chess Academy
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-5 text-text-body leading-relaxed">
            <p>
              Welcome to <strong className="text-accent-purple">Sri Chess Academy</strong>,
              where strategy meets passion in the game of chess! Located in the heart of
              Visakhapatnam, Andhra Pradesh, our academy is dedicated to nurturing young
              minds and empowering them through the timeless game of chess.
            </p>
            <p>
              At Sri Chess Academy, we believe chess is more than just a game &mdash; it&rsquo;s a
              journey of intellectual growth, strategic thinking, and self-discovery.
              Founded by a team of experienced chess enthusiasts and professional coaches,
              our mission is to inspire, educate, and elevate the chess skills of players
              of all ages and levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
