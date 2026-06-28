"use client";

import { motion } from "framer-motion";
import { Github, Youtube, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@ikosoftT",
    href: "https://github.com/ikosoftT",
    desc: "Open source, experiments, and the messy truth.",
    accent: "from-zinc-300 to-zinc-500",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "@IkoSoftCompany",
    href: "https://www.youtube.com/@IkoSoftCompany",
    desc: "Long-form builds, security deep-dives, behind-the-scenes.",
    accent: "from-rose-400 to-red-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "yassine-ikoubazene",
    href: "https://www.linkedin.com/in/yassine-ikoubazene-7ab090384/",
    desc: "Professional updates, projects, and network.",
    accent: "from-sky-400 to-blue-600",
  },
];

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative py-20 sm:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-300/80">
            <span className="w-6 h-px bg-cyan-400/50" />
            05 // connect
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Let&apos;s <span className="text-gradient">build something</span>{" "}
            worth securing.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9aa0b4] leading-relaxed">
            Whether you need a fast, modern web app — or someone to find what
            your last vendor missed — ikosoft is open for engagements.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-6">
          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f1020] to-[#05050a] p-8 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/20 blur-3xl" />
            <div className="relative">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300/80">
                start a project
              </div>
              <h3 className="mt-3 text-3xl sm:text-4xl font-bold text-white leading-tight">
                Got an idea? <br />
                <span className="text-gradient">Let&apos;s ship it.</span>
              </h3>
              <p className="mt-4 text-sm text-[#9aa0b4] leading-relaxed max-w-md">
                Drop a quick brief — what you&apos;re building, the timeline,
                and the security bar you want held. You&apos;ll get a reply
                within 24 hours.
              </p>

              <a
                href="mailto:contact@ikosoft.dev"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-black bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 transition-all hover:scale-[1.02] active:scale-95 glow-violet"
              >
                <Mail className="w-4 h-4" />
                contact@ikosoft.dev
              </a>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#9aa0b4]">
                <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                <span>Remote · Worldwide · UTC±0</span>
              </div>
            </div>
          </motion.div>

          {/* Social grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 transition-all overflow-hidden"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} text-black`}
                    >
                      <Icon className="w-6 h-6" strokeWidth={2.2} />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#6b7287] group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div className="mt-5">
                    <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#6b7287]">
                      {s.label}
                    </div>
                    <div className="mt-1 font-semibold text-white break-all">
                      {s.handle}
                    </div>
                    <p className="mt-2 text-sm text-[#9aa0b4] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Email mini-card */}
            <motion.a
              href="mailto:contact@ikosoft.dev"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.24, duration: 0.6 }}
              className="group relative rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/[0.08] to-cyan-400/[0.04] p-6 hover:border-emerald-400/60 transition-all overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-black">
                  <Mail className="w-6 h-6" strokeWidth={2.2} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#6b7287] group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="mt-5">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
                  email
                </div>
                <div className="mt-1 font-semibold text-white break-all">
                  contact@ikosoft.dev
                </div>
                <p className="mt-2 text-sm text-[#9aa0b4]">
                  For briefs, audits, and serious conversations.
                </p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
