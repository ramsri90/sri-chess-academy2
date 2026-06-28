"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const TOTAL = 23;
const START = 3;
const SKIP = [16];
const IMAGES = [...Array.from({ length: TOTAL - START + 1 }, (_, i) => i + START).filter(n => !SKIP.includes(n)), 2];

export default function TournamentsPage() {
  return (
    <main>
      <Navigation />
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "10%", top: "15%", animation: "float 6s ease-in-out 0s infinite" }}>♔</div>
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "80%", top: "10%", animation: "float 7s ease-in-out 0.5s infinite" }}>♕</div>
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "70%", top: "75%", animation: "float 8s ease-in-out 1s infinite" }}>♖</div>
          <div className="absolute text-white opacity-10 text-7xl select-none" style={{ left: "15%", top: "70%", animation: "float 6.5s ease-in-out 0.3s infinite" }}>♗</div>
        </div>
        <div className="relative z-10 text-center px-5">
          <p className="text-accent-purple text-sm md:text-base uppercase tracking-[0.15em] font-semibold mb-3">
            Go Along With Sri Chess Academy
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Tournaments
          </h1>
          <p className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Dr. Rangala Babu Rao International Open FIDE Rating Chess Tournament
          </p>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-10">
        <div className="grid grid-cols-3 gap-3">
          {IMAGES.map((num) => (
            <TiltCard key={num}>
              <Image
                src={`/images/img${num}.jpg`}
                alt={`Tournament ${num}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
            </TiltCard>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(((y - centerY) / centerY) * -5);
    setRotateY(((x - centerX) / centerX) * 5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="rounded-xl overflow-hidden transition-transform duration-200 ease-out"
      style={{
        transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      {children}
    </div>
  );
}
