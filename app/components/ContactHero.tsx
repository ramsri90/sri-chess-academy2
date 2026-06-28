"use client";

const PIECES = [
  { char: "♔", x: "15%", y: "20%", delay: "0s" },
  { char: "♕", x: "85%", y: "25%", delay: "0.6s" },
  { char: "♖", x: "75%", y: "75%", delay: "1.2s" },
  { char: "♗", x: "10%", y: "70%", delay: "0.3s" },
  { char: "♘", x: "90%", y: "60%", delay: "0.9s" },
  { char: "♙", x: "20%", y: "80%", delay: "0.5s" },
];

export default function ContactHero() {
  return (
    <section className="contact-hero">
      {PIECES.map((p, i) => (
        <div
          key={i}
          className="absolute select-none pointer-events-none text-white"
          style={{
            left: p.x,
            top: p.y,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            opacity: 0.15,
            animation: `float 7s ease-in-out ${p.delay} infinite`,
          }}
        >
          {p.char}
        </div>
      ))}
      <div className="relative z-10 text-center px-5">
        <p className="text-accent-purple text-sm md:text-base uppercase tracking-[0.15em] font-semibold mb-3">
          Get In Touch
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
          Contact Us
        </h1>
        <p className="text-gray-400 mt-4 text-base md:text-lg max-w-lg mx-auto">
          Ready to start your chess journey? Reach out to us and let&apos;s make it happen.
        </p>
      </div>
    </section>
  );
}
