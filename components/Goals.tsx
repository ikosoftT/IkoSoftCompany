"use client";

import { motion } from "framer-motion";
import { Target, Crosshair, ListChecks } from "lucide-react";

const tiers = [
  {
    tier: "LONG-TERM",
    icon: Target,
    accent: "from-cyan-400 to-violet-500",
    accentText: "text-cyan-300",
    accentBg: "bg-cyan-400/10 border-cyan-400/20",
    intro: "The big bets. The north star.",
    items: [
      "Become a millionaire by age 22",
      "Earn the title of 42 Software Engineer",
      "Build & lead ikosoft into a real company",
    ],
  },
  {
    tier: "FOCUSED",
    icon: Crosshair,
    accent: "from-emerald-400 to-cyan-400",
    accentText: "text-emerald-300",
    accentBg: "bg-emerald-400/10 border-emerald-400/20",
    intro: "Higher priority. The next moves.",
    items: [
      "Become a professional Software Engineer",
      "Land my first role as a Developer",
      "Earn $10,000 online",
    ],
  },
  {
    tier: "MICRO · SYSTEMS",
    icon: ListChecks,
    accent: "from-violet-400 to-fuchsia-400",
    accentText: "text-violet-300",
    accentBg: "bg-violet-400/10 border-violet-400/20",
    intro: "Daily systems. Compounding leverage.",
    items: [
      "Deepen front & back-end development skills",
      "Build a strong IT foundation",
      "Build money systems — start earning",
      "Strong, value-led presence on social media",
      "Sharpen 'Who is ikosoft' as a brand",
      "Build successful daily habit systems",
    ],
  },
];

export default function Goals() {
  return (
    <section
      id="goals"
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
            03 // goals
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            The roadmap.{" "}
            <span className="text-gradient">Public on purpose.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9aa0b4] leading-relaxed">
            ikosoft isn&apos;t just a brand — it&apos;s the operating system for
            the life I&apos;m building. Here&apos;s the full ladder, from the
            long-term horizon down to the daily systems.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group"
              >
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 sm:p-7 hover:border-white/20 transition-all flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.25em] ${t.accentBg} ${t.accentText}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {t.tier}
                    </div>
                    <div
                      className={`grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br ${t.accent} text-black`}
                    >
                      <Icon className="w-4.5 h-4.5" strokeWidth={2.4} />
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-[#9aa0b4]">{t.intro}</p>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {t.items.map((g, idx) => (
                      <li
                        key={g}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 px-3 py-2.5"
                      >
                        <span
                          className={`mt-0.5 inline-grid place-items-center min-w-6 h-6 px-1.5 rounded-md text-[10px] font-mono font-bold bg-gradient-to-br ${t.accent} text-black`}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-[#e6e8f2] leading-snug">
                          {g}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Progress strip */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#6b7287]">
                      <span>in progress</span>
                      <span>{t.tier === "MICRO · SYSTEMS" ? "60%" : t.tier === "FOCUSED" ? "35%" : "10%"}</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width:
                            t.tier === "MICRO · SYSTEMS"
                              ? "60%"
                              : t.tier === "FOCUSED"
                              ? "35%"
                              : "10%",
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${t.accent}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Manifesto strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 terminal rounded-2xl border border-white/10 bg-black/60 p-6 sm:p-8"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#6b7287]">
            ~/ikosoft/manifesto.sh
          </div>
          <pre className="mt-4 text-[13px] sm:text-sm leading-relaxed text-[#e6e8f2] whitespace-pre-wrap">
            <code>
              <span className="text-emerald-400">$</span> whoami
              {"\n  "}<span className="text-cyan-300">Yassine IKoubazene</span> — founder of ikosoft
              {"\n\n"}<span className="text-emerald-400">$</span> mission --long
              {"\n  "}Build secure web products. Lead a real company.
              {"\n  "}Become the engineer I needed at 16.
              {"\n\n"}<span className="text-emerald-400">$</span> status
              {"\n  "}<span className="text-emerald-400">●</span> shipping daily
              {"\n  "}<span className="text-amber-400">●</span> building systems
              {"\n  "}<span className="text-cyan-400">●</span> recruiting clients
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
