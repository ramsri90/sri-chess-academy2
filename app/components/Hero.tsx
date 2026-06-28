"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PIECES = [
  { char: "♔", x: "10%", y: "15%", delay: "0s" },
  { char: "♕", x: "80%", y: "10%", delay: "0.5s" },
  { char: "♖", x: "70%", y: "70%", delay: "1s" },
  { char: "♗", x: "15%", y: "75%", delay: "0.3s" },
  { char: "♘", x: "85%", y: "40%", delay: "0.8s" },
  { char: "♙", x: "5%", y: "50%", delay: "1.2s" },
  { char: "♚", x: "90%", y: "80%", delay: "0.2s" },
  { char: "♛", x: "25%", y: "85%", delay: "0.7s" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="home" className="hero-section section-dark">
      <div className="hero-chess-bg">
        {PIECES.map((p, i) => (
          <div
            key={i}
            className="hero-chess-piece"
            style={{
              left: p.x,
              top: p.y,
              animation: `float 6s ease-in-out ${p.delay} infinite`,
            }}
          >
            {p.char}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-3xl px-5">
        <p
          className={`text-accent-purple text-sm md:text-base uppercase tracking-[0.15em] font-semibold mb-4 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Welcome to Sri Chess Academy
        </p>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight transition-all duration-500 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Master the Game,{" "}
          <span className="text-accent-purple whitespace-nowrap">Just Like the Masters</span>{" "}
          of Strategy.
        </h1>

        <p
          className={`text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-500 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Where strategy meets passion in the game of chess. Located in
          Visakhapatnam, Andhra Pradesh — nurturing young minds through the
          timeless game of chess.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/services"
            className="bg-accent-purple hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent-purple/30 no-underline"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
