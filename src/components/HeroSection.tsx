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
        className="absolute top-1/2 -right-20 -translate-y-1/2 w-[40rem] h-[40rem] opacity-70 blur-3xl rounded-full bg-gradient-to-br from-primary via-secondary to-transparent"
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
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="relative w-full aspect-square max-w-lg">
            <img
              alt="3D fluid glass sculpture"
              className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(173,198,255,0.3)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT910g88Y8yn4W0TJjHH3ue-n83209Htk9qweS_eOPv4gwSLlesEZsF3KPhDVcaUN8959aLoMSLBC1-2zqe79ZkHhoguS8FuHMR9vG__U8Hu09LsDFbOHnuYX5gY1qppJLHdXcdjN2AB0r_cbhI0Cu0TH9Dx95FWONqkzaUtPH2PVHSvCklK-gzVPeUe8zRzOod4TherOJKgQ_kK1pd8WOzlqWICfuFpSvuwWFKcXAv66ovepj5C-EmYGJL3J0Rog7ordNzFeNv9o"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
