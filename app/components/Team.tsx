"use client";

import { useEffect, useRef, useState } from "react";

const TEAM = [
  {
    name: "Vappangi Srikanth",
    role: "Director of Sri Chess Academy, FA",
    icon: "♔",
  },
  {
    name: "D. Appanna",
    role: "SNA · International Rated Player · 12 Years Coaching · Expert in Beginner Coaching",
    icon: "♕",
  },
  {
    name: "Kameshwar Sarma",
    role: "International FIDE Rated Player · 10 Years Coaching Experience",
    icon: "♖",
  },
  {
    name: "RaviTeja Kanakala",
    role: "International FIDE Rated Player · 8 Years Coaching Experience",
    icon: "♗",
  },
  {
    name: "Veera Varaprasad",
    role: "3 Years Coaching Experience · Expert in Beginner Coaching",
    icon: "♘",
  },
  {
    name: "Y. Pavan Kumar",
    role: "International FIDE Rated Player · 2 Years Coaching Experience",
    icon: "♙",
  },
];

export default function Team() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="section-padding section-dark">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Our Team
          </h2>
          <p className="text-gray-400 text-center max-w-lg mx-auto mb-12">
            Meet our dedicated coaches guiding students toward chess mastery
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group border border-white/5"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:animate-float">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
