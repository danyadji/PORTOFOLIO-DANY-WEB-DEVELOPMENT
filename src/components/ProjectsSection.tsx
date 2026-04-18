"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "E-commerce Platform",
    desc: "High-performance marketplace architecture built with Next.js and Stripe integration.",
    tags: ["React", "Node.js"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZOdQCqDo2zK923BA7_FndoA9A4RdgMjisnlBgIaYJhYyDzm-LqsO86xQIrTDy6ZCR7Ejyb-F1_q2i55-fw00t6YrvCu9BZZY20VKA4KBltluwH3iEntbBGBuhVrk8t07-Ii-g235HmH5KrmHJWaEq0msWWPgEsMWZ4ja92DFA1CsWC7JKfxunDTT92RyyepE42McRZqMIBttdnRZOQ6siTJRJNMmaZsp0rvHdSVqJ9xPEYJM-DOHpak0LsryDJi80yYHFmBIDD-M",
  },
  {
    title: "AI Neural Monitor",
    desc: "Visualizing complex LLM datasets through custom WebGL shaders and real-time streams.",
    tags: ["Python", "Three.js"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXI1mPuKfUzA3uIhCLK6rj0BkSE-n2gJ_I4yZa90DH9zLnHOZbucbONIKz1g_uCT9zujfDRL97a69sbu48wp0cHzt-chK2HoccqdSJj_kL15mfBOeYWFO6B3_Lv-Z6IWLe2z5D0XmJaEXAkrsoZBAv9K3Tc8x7DXYyW9u1DkEtUF2jPtDNrOTINsSb3xPO3tdbJ6MrDd4p6Nic-SV4Xl8yyNvMmIACQ6mBiX_tAVNUJL2JmGHgGnH-D2mSdaa-Ohd2SiAKicon9mM",
  },
  {
    title: "Sync: SaaS Core",
    desc: "Distributed team collaboration tool focused on ultra-low latency updates and encryption.",
    tags: ["WebRTC", "Rust"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHOR3KOU_1qotUe-zM5UIqgRxgXb3IUCzItv--nhkadbisR7kcFgZwEIkO-y74yiIoTetGp45T42hgBH_I5C-w964UsSwAOrHpEN8vHJARfeFGEVHrs2jNpygOBfsVeSIKJg1f0kSp4c0svZdZ3l3xZWSMlPj_KzMyQ-zFLSAn8wK2mZiy33kjaX8hRJtnt0PuGC9afWAcRgh9ATKjo9-4zi1rzr5vX8btueLQITQ78dDeUxRNnoZrbMKevJjSxIcQZXK8sJ2yRLA",
  },
];

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
                  <Button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:scale-110">
                    View Project
                  </Button>
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
