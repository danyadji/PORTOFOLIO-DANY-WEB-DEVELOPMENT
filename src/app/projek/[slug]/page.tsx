"use client";

import { PROJECTS } from "@/constants/projects";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = (PROJECTS as any[]).find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-32 overflow-hidden relative selection:bg-primary/30 selection:text-primary">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[40rem] h-[40rem] bg-secondary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-20 mix-blend-difference">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
        >
          <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
          <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
        </Link>
      </nav>

      {/* Section: Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-20 container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
        >
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-[0.3em]">Project Insights</span>
            <h1 className="font-headline text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85]">
              {project.title}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-on-surface-variant text-lg font-light leading-relaxed border-l-2 border-primary/20 pl-6">
              {project.desc}
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 aspect-[21/9] rounded-2xl overflow-hidden glass-card border border-white/5 shadow-3xl"
        >
          <img 
            src={project.img} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Section: Information Grid */}
      <section className="px-6 md:px-20 container mx-auto max-w-7xl mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Summary & Details */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div {...fadeInUp} className="space-y-4">
              <h3 className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4">My Role</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{project.role}</p>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item: string) => (
                  <span key={item} className="px-3 py-1 bg-surface-container rounded text-[11px] font-medium text-on-surface-variant border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-4">
              <h3 className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-4">Significant Challenges</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{project.challenges}</p>
            </motion.div>
          </div>

          {/* Right Side: Main Content */}
          <div className="lg:col-span-8 space-y-20">
            <motion.div {...fadeInUp} className="space-y-8">
              <h2 className="font-headline text-3xl font-bold text-white">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-on-surface-variant text-lg leading-relaxed font-light whitespace-pre-line">
                  {project.longDesc}
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-headline text-3xl font-bold text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: string) => (
                  <motion.div 
                    key={feature} 
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-5 bg-surface-variant/10 rounded-xl border border-white/5 hover:border-primary/20 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                    <span className="text-on-surface-variant text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Screenshot Gallery */}
      <section className="px-6 md:px-20 container mx-auto max-w-7xl mt-32 space-y-12">
        <motion.div {...fadeInUp} className="space-y-4">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Visual Evidence</span>
          <h2 className="font-headline text-4xl font-bold text-white">Gallery Showcase</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.screenshots.map((src: string, i: number) => (
            <motion.div 
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden glass-card border border-white/5 group"
            >
              <img 
                src={src} 
                alt={`${project.title} screenshot ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action: Next Project */}
      <section className="mt-40 border-t border-white/10 pt-20 text-center">
        <Link href="/#work" className="group">
          <p className="text-on-surface-variant text-sm mb-4 uppercase tracking-[0.2em]">Next Exploration</p>
          <h2 className="font-headline text-5xl md:text-7xl font-bold text-white hover:text-primary transition-colors inline-block leading-tight">
            See More Works <span className="material-symbols-outlined text-4xl md:text-6xl inline-block transition-transform group-hover:translate-x-2">arrow_forward</span>
          </h2>
        </Link>
      </section>
    </main>
  );
}
