"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const SERVICES = [
  {
    title: "API Development",
    desc: "Engineered for resilience and scale. I design RESTful and GraphQL architectures that power seamless frontends.",
    icon: "api",
    color: "primary",
  },
  {
    title: "Custom UI/UX",
    desc: "Crafting interfaces that feel natural. I focus on motion, accessibility, and high-fidelity aesthetics.",
    icon: "design_services",
    color: "secondary",
  },
  {
    title: "Scalable Solutions",
    desc: "Optimizing infrastructure for millions of users. Cloud-native deployments that grow with your vision.",
    icon: "speed",
    color: "tertiary",
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 px-6 md:px-20 bg-black" id="services">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            className={`p-8 border-l border-${service.color}/20 space-y-6 group hover:bg-${service.color}/5 transition-colors`}
          >
            <span
              className={`material-symbols-outlined text-5xl text-${service.color}/60 group-hover:text-${service.color} transition-colors`}
            >
              {service.icon}
            </span>
            <h3 className="font-headline text-2xl font-bold text-white">{service.title}</h3>
            <p className="text-on-surface-variant leading-relaxed font-light">{service.desc}</p>
            <button
              className={`text-${service.color} font-bold text-xs uppercase tracking-widest hover:pl-4 transition-all flex items-center gap-2`}
            >
              Request a Quote{" "}
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
