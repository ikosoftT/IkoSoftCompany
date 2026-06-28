"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase, Building2 } from "lucide-react";

const milestones = [
  {
    icon: Building2,
    title: "Founder",
    org: "ikosoft",
    detail: "Web development & cybersecurity studio",
    accent: "from-cyan-400 to-violet-500",
  },
  {
    icon: GraduationCap,
    title: "Software Engineer",
    org: "42 School",
    detail: "Peer-to-peer, project-based curriculum",
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    icon: Briefcase,
    title: "Builder",
    org: "Self-taught & shipping",
    detail: "Front + back end, systems & security",
    accent: "from-violet-400 to-fuchsia-400",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="01 // about"
          title={
            <>
              Who is <span className="text-gradient">ikosoft</span>?
            </>
          }
          subtitle="A one-person studio with a focused mission: build secure, fast, and beautiful web products."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-3xl rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/founder.jpg"
                    alt="Yassine IKoubazene, founder of ikosoft"
                    fill
                    sizes="(max-width: 768px) 90vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#05050a]/70 via-transparent to-transparent" />
                </div>
                <div className="px-5 py-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9aa0b4]">
                    founder · ceo
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    online
                  </span>
                </div>
              </div>

              {/* floating corner badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 glass border border-white/10 rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="grid place-items-center w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 text-black font-bold text-sm">
                    42
                  </div>
                  <div className="leading-tight">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#6b7287]">
                      school
                    </div>
                    <div className="text-xs font-semibold text-white">
                      software engineer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-lg sm:text-xl text-[#e6e8f2] leading-relaxed">
              ikosoft is a focused engineering studio led by{" "}
              <span className="text-cyan-300 font-medium">
                Yassine IKoubazene
              </span>
              . We operate at the intersection of{" "}
              <span className="text-violet-300 font-medium">product engineering</span>{" "}
              and <span className="text-emerald-300 font-medium">security</span>
              — building web apps that are not only fast and well-designed, but
              hardened by default.
            </p>

            <p className="mt-4 text-base text-[#9aa0b4] leading-relaxed">
              Trained at 42 through a peer-driven, project-based curriculum,
              Yassine combines a hacker&apos;s mindset with a builder&apos;s
              discipline. The result: products that ship fast, scale clean, and
              stay out of breach headlines.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all hover:-translate-y-1"
                  >
                    <div
                      className={`inline-grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br ${m.accent} text-black mb-3`}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2.4} />
                    </div>
                    <div className="font-semibold text-white">{m.title}</div>
                    <div className="text-xs text-cyan-300 mt-0.5">
                      {m.org}
                    </div>
                    <div className="text-xs text-[#9aa0b4] mt-2 leading-relaxed">
                      {m.detail}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-300/80">
        <span className="w-6 h-px bg-cyan-400/50" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#9aa0b4] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
