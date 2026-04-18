"use client";

import { motion } from "framer-motion";
import { itemFadeIn, staggerContainer } from "@/lib/motion";

const HISTORY = [
  {
    year: "2022 — Present",
    title: "Senior Software Architect @ Flux Systems",
    desc: "Leading the migration of legacy monoliths to a distributed microservices architecture, improving system uptime by 40%.",
    color: "primary",
  },
  {
    year: "2019 — 2022",
    title: "Fullstack Lead @ Novus Design",
    desc: "Developed and maintained a company-wide UI component library used across 15+ internal and external projects.",
    color: "secondary",
  },
  {
    year: "2017 — 2019",
    title: "Frontend Developer @ Creative Void",
    desc: "Focused on high-performance interactive storytelling using WebGL and advanced CSS animations.",
    color: "surface-variant",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-32 px-6 md:px-20 bg-surface-container-lowest" id="experience">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold">
            The Journey
          </span>
          <h2 className="font-headline text-4xl font-bold text-white">Professional History</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="relative pl-12 border-l border-surface-container-highest space-y-16"
        >
          {HISTORY.map((node, i) => (
            <motion.div
              key={i}
              variants={itemFadeIn}
              className="relative"
            >
              <div className={`absolute -left-[3.4rem] top-0 w-10 h-10 rounded-full bg-black border-2 border-${node.color} flex items-center justify-center shadow-[0_0_15px_var(--color-${node.color})]`}>
                <span className={`w-2 h-2 bg-${node.color} rounded-full`} />
              </div>
              <div className="space-y-2">
                <span className={`text-${node.color} font-bold text-xs`}>{node.year}</span>
                <h3 className="font-headline text-2xl font-bold text-white">{node.title}</h3>
                <p className="text-on-surface-variant leading-relaxed font-light">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
