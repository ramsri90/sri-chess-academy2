"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SERVICES = [
  { icon: "♛", title: "Online Coaching", desc: "Structured lessons and interactive sessions for all levels" },
  { icon: "♞", title: "Offline Coaching", desc: "In-person training at our branch with hands-on learning" },
  { icon: "♝", title: "Professional Coaching", desc: "Advanced strategies for national and international tournaments" },
  { icon: "♜", title: "Intensive Coaching", desc: "Rigorous training for rapid improvement in a condensed timeframe" },
  { icon: "♟", title: "Chess in Schools", desc: "Educational initiative integrating chess into school curriculum" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-padding section-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Our Services
          </h2>
          <p className="text-gray-400 text-center max-w-lg mx-auto mb-12">
            Go Along With Sri Chess Academy
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SERVICES.map((s, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Link
                href="/services"
                className="block h-full bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group border border-white/5 no-underline"
              >
                <div className="text-5xl mb-5 transition-transform duration-300 group-hover:scale-110 text-white">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-block bg-accent-purple hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 hover:scale-105 no-underline"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
