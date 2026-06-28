"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Code2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Decorative scan line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-mono text-[#9aa0b4]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            available for new projects
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="block text-[#e6e8f2]">Building secure</span>
            <span className="block text-gradient">web products</span>
            <span className="block text-[#e6e8f2]">that actually ship.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base sm:text-lg text-[#9aa0b4] leading-relaxed"
          >
            I&apos;m <span className="text-white font-medium">Yassine IKoubazene</span>{" "}
            — founder of <span className="text-cyan-300">ikosoft</span>,{" "}
            <span className="text-white font-medium">42 software engineer</span>{" "}
            and ethical hacker. I design, build and harden modern web
            applications for startups and ambitious teams.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 transition-all hover:scale-[1.02] active:scale-95 glow-violet"
            >
              Explore services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-white border border-white/15 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              Let&apos;s talk
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.dl
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg"
          >
            {[
              { v: "42", l: "school" },
              { v: "2×", l: "core domains" },
              { v: "24/7", l: "shipping" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-3 sm:px-4 sm:py-4 backdrop-blur-sm"
              >
                <dt className="text-[10px] uppercase tracking-[0.2em] text-[#6b7287]">
                  {s.l}
                </dt>
                <dd className="mt-1 text-xl sm:text-2xl font-bold text-gradient-mono">
                  {s.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md">
            {/* Glow rings */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-emerald-500/10 blur-3xl animate-[pulse-glow_4s_ease-in-out_infinite]" />

            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden border-gradient shadow-2xl">
              {/* Top status bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9aa0b4]">
                  ~/ikosoft/founder.json
                </span>
                <span className="w-8" />
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[#0f1020] to-[#05050a]">
                <Image
                  src="/images/portrait.jpg"
                  alt="Yassine IKoubazene — founder of ikosoft"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent" />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute left-4 bottom-4 right-4 glass rounded-2xl p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 grid place-items-center text-black font-bold">
                      YI
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white truncate">
                        Yassine IKoubazene
                      </div>
                      <div className="text-xs text-[#9aa0b4] truncate">
                        Founder & Lead Engineer
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      <Code2 className="w-3 h-3" /> webdev
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                      <Shield className="w-3 h-3" /> cybersec
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-violet-400/10 text-violet-300 border border-violet-400/20">
                      42
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Side label */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 rotate-90 origin-center hidden lg:block">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#6b7287]">
                yassine.ikoubazene
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
