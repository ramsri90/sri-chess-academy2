"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PIECES = [
  { char: "♔", x: "10%", y: "15%", delay: 0 },
  { char: "♕", x: "80%", y: "10%", delay: 0.5 },
  { char: "♖", x: "70%", y: "70%", delay: 1 },
  { char: "♗", x: "15%", y: "75%", delay: 0.3 },
  { char: "♘", x: "85%", y: "40%", delay: 0.8 },
  { char: "♙", x: "5%", y: "50%", delay: 1.2 },
  { char: "♚", x: "90%", y: "80%", delay: 0.2 },
  { char: "♛", x: "25%", y: "85%", delay: 0.7 },
];

export default function Hero() {
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
              animation: `float 6s ease-in-out ${p.delay}s infinite`,
            }}
          >
            {p.char}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-3xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent-purple text-sm md:text-base uppercase tracking-[0.15em] font-semibold mb-4"
        >
          Welcome to Sri Chess Academy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Master the Game,{" "}
          <span className="text-accent-purple whitespace-nowrap">Just Like the Masters</span>{" "}
          of Strategy.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Where strategy meets passion in the game of chess. Located in
          Visakhapatnam, Andhra Pradesh — nurturing young minds through the
          timeless game of chess.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="bg-accent-purple hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent-purple/30 no-underline"
          >
            Know More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
