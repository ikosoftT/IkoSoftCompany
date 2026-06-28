"use client";

import { motion } from "framer-motion";
import { Code2, ShieldAlert, Wrench } from "lucide-react";

const hobbies = [
  {
    icon: Code2,
    title: "Coding",
    tagline: "Build, refactor, repeat.",
    detail:
      "Designing systems and shipping features across the stack — front-end polish, back-end muscle, all the boring-but-load-bearing glue in between.",
    tags: ["TypeScript", "Next.js", "Node", "Systems"],
  },
  {
    icon: ShieldAlert,
    title: "Security Research",
    tagline: "Break it, then explain why.",
    detail:
      "Reading CVEs, reproducing exploits in labs, writing notes, and chasing the &lsquo;why&rsquo; behind every vulnerability. The defender wins by thinking like the attacker.",
    tags: ["OWASP", "Threat models", "Labs", "Write-ups"],
  },
  {
    icon: Wrench,
    title: "Debugging",
    tagline: "The real engineering happens here.",
    detail:
      "Hours-deep in logs, strace, network panels, and breakpoints until the bug confesses. Patience, method, and a clean repro win every time.",
    tags: ["Profiling", "Logs", "Reproductions", "Tools"],
  },
];

export default function Hobbies() {
  return (
    <section
      id="hobbies"
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
            04 // hobbies
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            What I do <span className="text-gradient">for fun.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9aa0b4] leading-relaxed">
            Hobbies that became the job. Or a job that became the hobbies.
            Either way — this is where the curiosity lives.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {hobbies.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.article
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-1 transition-all overflow-hidden"
              >
                {/* gradient blob */}
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-black">
                      <Icon className="w-6 h-6" strokeWidth={2.2} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6b7287]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">
                    {h.title}
                  </h3>
                  <div className="mt-1 text-sm text-cyan-300">
                    {h.tagline}
                  </div>
                  <p className="mt-3 text-sm text-[#9aa0b4] leading-relaxed">
                    {h.detail}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {h.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-[#9aa0b4] bg-white/5 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Marquee strip */}
        <div className="mt-16 marquee">
          <div className="marquee-track py-3 text-[#3a3d4d] font-bold text-2xl sm:text-4xl uppercase tracking-tight select-none">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12 pr-12">
                {[
                  "code",
                  "break",
                  "fix",
                  "ship",
                  "secure",
                  "learn",
                  "repeat",
                ].map((w) => (
                  <span key={`${k}-${w}`} className="flex items-center gap-12">
                    {w}
                    <span className="text-cyan-400/60">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
