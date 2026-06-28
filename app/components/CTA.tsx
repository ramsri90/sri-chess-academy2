"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div
        ref={ref}
        className={`max-w-content mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="glass rounded-card p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Ready to Master Chess?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Join our academy and start your journey today
          </p>
          <button onClick={scrollToContact} className="btn-primary text-lg px-10 py-4">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
