"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="py-32 px-6 md:px-20 bg-black relative" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-16 rounded-lg relative overflow-hidden border-primary/20"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Let&apos;s Build <br /> Something Amazing
              </h2>
              <p className="text-on-surface-variant font-light leading-relaxed">
                Currently accepting new projects and technical consultations. Reach out and let&apos;s
                discuss your next digital evolution.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white hover:text-primary transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">
                    mail
                  </span>
                  <span>hello@luminal.studio</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span>Berlin / Remote</span>
                </div>
              </div>
              <div className="flex gap-6 pt-6">
                {["share", "link", "code"].map((icon) => (
                  <motion.a
                    key={icon}
                    href="#"
                    whileHover={{ y: -5, color: "#fff" }}
                    className="text-on-surface-variant transition-colors"
                  >
                    <span className="material-symbols-outlined">{icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-outline">
                  Name
                </label>
                <Input
                  type="text"
                  className="bg-surface-container border-b border-white/10 p-3 text-white focus:outline-none focus:border-primary transition-all rounded-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-outline">
                  Email
                </label>
                <Input
                  type="email"
                  className="bg-surface-container border-b border-white/10 p-3 text-white focus:outline-none focus:border-secondary transition-all rounded-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-outline">
                  Message
                </label>
                <Textarea
                  rows={4}
                  className="bg-surface-container border-b border-white/10 p-3 text-white focus:outline-none focus:border-primary transition-all resize-none rounded-none"
                />
              </div>
              <Button
                variant="ghost"
                className="w-full bg-primary text-on-primary-container py-6 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(221,183,255,0.2)]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
