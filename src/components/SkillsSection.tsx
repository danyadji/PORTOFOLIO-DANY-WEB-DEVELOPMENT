"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const SKILLS = [
  {
    id: "01",
    title: "Frontend",
    icon: "layers",
    color: "primary",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: "02",
    title: "Backend",
    icon: "database",
    color: "secondary",
    tags: ["Node.js", "Laravel", "MySQL"],
  },
  {
    id: "03",
    title: "CMS & E-Commerce",
    icon: "store",
    color: "secondary",
    tags: ["WordPress", "WooCommerce"],
  },
  {
    id: "04",
    title: "Tools",
    icon: "terminal",
    color: "tertiary",
    tags: ["GitHub", "Git", "Postman", "Figma", "Vite", "AI Assistant"],
  },
];

export function SkillsSection() {
  return (
    <section className="py-32 px-6 md:px-20 bg-black">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <span className="font-label text-secondary uppercase tracking-[0.2em] text-xs font-bold">
            Tech Stack
          </span>
          <h2 className="font-headline text-4xl font-bold text-white">The Toolkit</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`glass-card p-10 rounded-lg group hover:border-${skill.color}/40 transition-all duration-500`}
            >
              <div className="mb-8 flex justify-between items-start">
                <span className={`material-symbols-outlined text-4xl text-${skill.color}`}>
                  {skill.icon}
                </span>
                <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase opacity-40">
                  {skill.id}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-6 text-white">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-variant/30 rounded-full text-xs font-medium text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
