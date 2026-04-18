"use client";

import { motion } from "framer-motion";
import { itemFadeIn, staggerContainer } from "@/lib/motion";

export function AboutSection() {
  const highlights = [
    "Web Development (Frontend & Backend)",
    "System Analysis & Design",
    "UI/UX Design (Basic)",
    "AI-Assisted Development",
  ];

  return (
    <section className="py-32 px-6 md:px-20 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative max-w-sm mx-auto lg:ml-0"
        >
          <div className="relative aspect-square rounded-full overflow-hidden border-2 border-primary/30 p-2 bg-gradient-to-b from-primary/10 to-transparent shadow-[0_0_40px_rgba(221,183,255,0.15)] group">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                alt="Dany Portrait"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/assets/images/dany.jpg"
              />
            </div>
          </div>
          <div className="absolute -inset-4 border border-secondary/20 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-[80px] rounded-full" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="order-1 lg:order-2 space-y-8"
        >
          <motion.div variants={staggerContainer} className="space-y-4">
            <motion.span
              variants={itemFadeIn}
              className="inline-block font-label text-primary uppercase tracking-[0.2em] text-xs font-bold"
            >
              The Profile
            </motion.span>
            <motion.h2
              variants={itemFadeIn}
              className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
             Web Developer <br /> & Problem Solver
            </motion.h2>
          </motion.div>
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
