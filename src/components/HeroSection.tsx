"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden pt-20">
      {/* Background Fluid Glass Decor */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -right-20 -translate-y-1/2 w-[40rem] h-[40rem] opacity-40 blur-3xl rounded-full bg-gradient-to-br from-primary via-secondary to-transparent"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-white"
          >
            Crafting the Future: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Web Development
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-on-surface-variant max-w-lg text-lg font-light leading-relaxed"
          >
            I build web applications that are responsive, efficient, and easy to use.
          </motion.p>
          <motion.div variants={fadeInUp} className="pt-4">
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-transparent border border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-[0_0_20px_rgba(221,183,255,0.2)]"
            >
              View Portfolio
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1.1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative hidden lg:flex justify-end items-center"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full aspect-square max-w-2xl"
          >
            <img
              alt="Futuristic 3D Shape"
              className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(221,183,255,0.2)]"
              src="/assets/images/hero-shape-seamless.svg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
