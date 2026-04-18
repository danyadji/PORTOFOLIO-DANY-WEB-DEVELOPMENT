"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { PROJECTS } from "@/constants/projects";

export function ProjectsSection() {
  return (
    <section
      className="py-32 px-6 md:px-20 relative bg-surface-container-lowest overflow-hidden border-t border-white/5"
      id="work"
    >
      {/* Backdrop Fluid Glass */}
      <div className="absolute -left-40 bottom-0 w-[50rem] h-[50rem] bg-secondary/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-4">
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold">
              Selected Work
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight">
              Case Studies
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-xs leading-relaxed opacity-60">
            A curated selection of architecture-focused digital products.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={fadeInUp} className="flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6 glass-card">
                <motion.img
                  alt={project.title}
                  src={project.img}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <Link href={`/projek/${project.slug}`}>
                    <Button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-110">
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">{project.desc}</p>
              <div className="flex gap-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-bold tracking-widest uppercase ${
                      i % 2 === 0 ? "text-primary" : "text-secondary"
                    }`}
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
