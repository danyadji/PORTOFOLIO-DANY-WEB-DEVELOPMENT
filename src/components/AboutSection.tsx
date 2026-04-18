"use client";

import { motion } from "framer-motion";
import { fadeInUp, itemFadeIn, staggerContainer } from "@/lib/motion";

export function AboutSection() {
  const highlights = [
    "Full-Spectrum Engineering",
    "Strategic Design Systems",
    "Cloud Architecture & Scaling",
  ];

  return (
    <section className="py-32 px-6 md:px-20 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative"
        >
          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/5 bg-surface-container shadow-2xl">
            <img
              alt="Developer portrait"
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfRrHIu1qLASlJMFRUjRwE9Gm219xJjGlU974cqhYrh6HGYrdRmrx4nYHRG-d0tfLVwq3oWgekkf1GJzoCnhm0-6JjaRgsqGepUmfg3TKJfXXMoxeozDYcqZic6EgaKlh3CT5nNzrutF-Cl2JI9zA9Oi7D8l5clGI4_z9MgHodbwjIjSJF4c1ly3b9Q-56TE9_CE4ZFvl8LA8pD1eBhKFF9FnsQ8KU_aDIKjI371MdP--oWhnzLrn9S_pYFcXO9C5MP20OhbB3WmA"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-2xl rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="order-1 lg:order-2 space-y-8"
        >
          <div className="space-y-4">
            <motion.span
              variants={itemFadeIn}
              className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold"
            >
              The Profile
            </motion.span>
            <motion.h2
              variants={itemFadeIn}
              className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
             Web Developer <br /> & Problem Solver
            </motion.h2>
          </div>
          <motion.p
            variants={itemFadeIn}
            className="text-on-surface-variant text-lg leading-relaxed font-light"
          >
            I am an Information Systems graduate from Universitas Teknologi Yogyakarta with a strong interest in web development. I build responsive and functional web applications using modern technologies, and I leverage AI tools to improve development efficiency while maintaining clean and reliable code. I am continuously learning and improving my skills to grow as a developer.
          </motion.p>
          <motion.ul variants={staggerContainer} className="space-y-4 pt-4">
            {highlights.map((text) => (
              <motion.li
                key={text}
                variants={itemFadeIn}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-[1px] bg-secondary group-hover:w-12 transition-all duration-300" />
                <span className="font-headline font-medium text-white">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
