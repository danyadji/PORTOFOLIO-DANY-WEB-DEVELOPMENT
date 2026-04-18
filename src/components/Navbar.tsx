"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full border border-white/10 bg-black/60 backdrop-blur-xl flex justify-between items-center px-8 py-3 z-50 shadow-[0_0_20px_rgba(168,85,247,0.1)] font-headline tracking-tight"
    >
      <div className="text-2xl font-bold tracking-tighter text-primary">DANY ADJI</div>
      <div className="hidden md:flex gap-8 items-center">
        {["Work", "Services", "Experience", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <Button className="bg-primary text-on-primary-container px-6 py-2 rounded-full font-bold hover:scale-95 duration-200 transition-all">
        Hire Me
      </Button>
    </motion.nav>
  );
}
