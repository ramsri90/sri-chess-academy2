"use client";

import { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const SERVICES = [
  {
    icon: "♛",
    title: "Online Coaching",
    description:
      "This online chess coaching program is designed to help players of all levels improve their chess skills through structured lessons, interactive sessions, and personalized feedback. Whether you're a beginner looking to learn the basics or an advanced player aiming to refine your strategies, this program will guide you to becoming a stronger chess player.",
  },
  {
    icon: "♞",
    title: "Offline Coaching",
    description:
      "This chess coaching program is designed for in-person training at our branch, offering students a hands-on and interactive learning experience. The curriculum is tailored to suit players from beginners to advanced levels, with a focus on fundamental principles, strategic thinking, and practical application through regular play and analysis.",
  },
  {
    icon: "♝",
    title: "Professional Coaching",
    description:
      "Professional chess coaching is aimed at players who aspire to compete at the highest levels, such as national and international tournaments. This program focuses on advanced strategies, deep theoretical knowledge, psychological preparation, and rigorous training tailored to each player's unique strengths and weaknesses.",
  },
  {
    icon: "♜",
    title: "Intensive Coaching",
    description:
      "This intensive chess coaching program is tailored for dedicated players who aim to significantly elevate their chess skills in a condensed timeframe. The program emphasizes advanced strategies, deep theoretical understanding, and practical mastery through rigorous training sessions. Ideal for tournament preparation or rapid improvement, this program demands commitment and a high level of engagement.",
  },
  {
    icon: "♟",
    title: "Chess in Schools",
    description:
      "The Chess in Schools program is an educational initiative that integrates chess into the school environment, promoting intellectual growth, concentration, and sportsmanship among students. The program is designed to cater to students of all ages and skill levels, providing a structured curriculum that progresses from basic rules to advanced strategies.",
  },
];

export default function ServicesPage() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navigation />
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "10%", top: "15%", animation: "float 6s ease-in-out 0s infinite" }}>♔</div>
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "80%", top: "10%", animation: "float 7s ease-in-out 0.5s infinite" }}>♕</div>
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "70%", top: "75%", animation: "float 8s ease-in-out 1s infinite" }}>♖</div>
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "15%", top: "70%", animation: "float 6.5s ease-in-out 0.3s infinite" }}>♗</div>
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "85%", top: "45%", animation: "float 7.5s ease-in-out 0.8s infinite" }}>♘</div>
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "5%", top: "50%", animation: "float 9s ease-in-out 1.2s infinite" }}>♙</div>
        </div>
        <div className="relative z-10 text-center px-5">
          <p className="text-accent-purple text-sm md:text-base uppercase tracking-[0.15em] font-semibold mb-3">
            Go Along With Sri Chess Academy
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Our Services
          </h1>
          <p className="text-gray-400 mt-4 text-base md:text-lg max-w-lg mx-auto">
            Comprehensive chess training programs designed to transform players
            from beginners to champions
          </p>
        </div>
      </section>

      <section className="section-padding section-dark">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-none px-4 md:px-10"
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${
                i === SERVICES.length - 1
                  ? "md:col-span-2 justify-self-center max-w-3xl w-full"
                  : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="text-5xl md:text-6xl text-white mb-5">
                  {s.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {s.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
