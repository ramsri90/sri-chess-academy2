"use client";

import { motion } from "framer-motion";

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

export default function Team() {
  return (
    <section id="team" className="section-padding section-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Our Team
          </h2>
          <p className="text-gray-400 text-center max-w-lg mx-auto mb-12">
            Meet our dedicated coaches guiding students toward chess mastery
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group border border-white/5"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
