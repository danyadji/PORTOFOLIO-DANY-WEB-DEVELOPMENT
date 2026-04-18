"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-black text-primary font-body text-xs uppercase tracking-widest py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg font-bold text-white font-headline"
        >
          LUMINAL
        </motion.div>
        <div className="opacity-80 text-on-surface-variant">
          © 2024 Luminal Curator. Crafted in the void.
        </div>
        <div className="flex gap-8">
          {["Github", "LinkedIn", "Dribbble"].map((item) => (
            <motion.a
              key={item}
              href="#"
              whileHover={{ scale: 1.1, color: "#fff" }}
              className="text-on-surface-variant transition-all hover:text-white"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
