"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding section-light">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
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
        </motion.div>
      </div>
    </section>
  );
}
