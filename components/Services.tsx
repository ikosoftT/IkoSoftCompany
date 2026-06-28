"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Wrench,
  ShieldCheck,
  Bug,
  Lock,
  Eye,
  ServerCog,
} from "lucide-react";

const webServices = [
  {
    icon: Globe,
    title: "Full-stack web apps",
    detail:
      "Next.js, React, Node. From marketing sites to production SaaS dashboards.",
  },
  {
    icon: Smartphone,
    title: "Responsive UI/UX",
    detail:
      "Mobile-first interfaces, design systems, motion, accessibility baked in.",
  },
  {
    icon: Database,
    title: "APIs & backends",
    detail:
      "REST & GraphQL, PostgreSQL, auth, payments, queues — production-ready.",
  },
  {
    icon: Wrench,
    title: "Performance & DX",
    detail:
      "Lighthouse 95+, CI/CD, observability, and a clean codebase your team can extend.",
  },
];

const secServices = [
  {
    icon: Bug,
    title: "Penetration testing",
    detail:
      "Web, API & network. OWASP Top 10, business-logic flaws, real attacker mindset.",
  },
  {
    icon: Eye,
    title: "Security audits",
    detail:
      "Threat modelling, code review, dependency & supply-chain risk analysis.",
  },
  {
    icon: Lock,
    title: "Hardening & DevSecOps",
    detail:
      "Auth, secrets, headers, rate-limiting, WAF, IAM, secure CI/CD pipelines.",
  },
  {
    icon: ServerCog,
    title: "Incident response",
    detail:
      "Breach triage, log forensics, containment playbook, post-mortem & fixes.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            02 // services
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Two disciplines.{" "}
            <span className="text-gradient">One studio.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9aa0b4] leading-relaxed">
            Web development and cybersecurity, fused. We ship products that look
            great on launch day — and still hold up under a real attack.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Web Dev Card */}
          <ServiceCard
            accent="cyan"
            icon={Code2}
            label="Web Development"
            tagline="Build & ship fast"
            description="End-to-end product engineering — from the first wireframe to the deployed, monitored production stack."
            items={webServices}
            ctaLabel="Start a project"
            delay={0}
          />

          {/* Cybersecurity Card */}
          <ServiceCard
            accent="emerald"
            icon={ShieldCheck}
            label="Cybersecurity"
            tagline="Find it. Fix it. Keep it safe."
            description="Offensive and defensive security services that protect your product, your data and your users."
            items={secServices}
            ctaLabel="Request an audit"
            delay={0.15}
          />
        </div>

        {/* Process strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#6b7287] font-mono">
                workflow
              </div>
              <div className="mt-1 text-xl font-semibold text-white">
                How an engagement runs
              </div>
            </div>
            <a
              href="#connect"
              className="text-sm font-medium text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1"
            >
              Talk through your project →
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Discover", d: "Scope, threats, success metrics." },
              { n: "02", t: "Design", d: "Architecture, model, plan." },
              { n: "03", t: "Build", d: "Ship in tight, testable loops." },
              { n: "04", t: "Defend", d: "Harden, monitor, hand-off." },
            ].map((s) => (
              <div
                key={s.n}
                className="relative rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <div className="font-mono text-xs text-cyan-300">{s.n}</div>
                <div className="mt-1 font-semibold text-white">{s.t}</div>
                <div className="mt-1 text-xs text-[#9aa0b4] leading-relaxed">
                  {s.d}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  accent,
  icon: Icon,
  label,
  tagline,
  description,
  items,
  ctaLabel,
  delay,
}: {
  accent: "cyan" | "emerald";
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  tagline: string;
  description: string;
  items: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; title: string; detail: string }[];
  ctaLabel: string;
  delay: number;
}) {
  const accentMap = {
    cyan: {
      grad: "from-cyan-400 to-violet-500",
      ring: "border-cyan-400/30",
      glow: "from-cyan-500/20 to-violet-500/20",
      chip: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
      label: "text-cyan-300",
    },
    emerald: {
      grad: "from-emerald-400 to-cyan-400",
      ring: "border-emerald-400/30",
      glow: "from-emerald-500/20 to-cyan-500/20",
      chip: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
      label: "text-emerald-300",
    },
  } as const;
  const a = accentMap[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div
        className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${a.glow} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`}
      />
      <div
        className={`relative rounded-3xl border ${a.ring} bg-[#0a0a14]/80 backdrop-blur-xl overflow-hidden`}
      >
        {/* Header */}
        <div className="relative px-6 sm:px-8 pt-8 pb-6 border-b border-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div
                className={`inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] ${a.label}`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                {tagline}
              </h3>
              <p className="mt-2 text-sm text-[#9aa0b4] max-w-md leading-relaxed">
                {description}
              </p>
            </div>
            <div
              className={`hidden sm:grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${a.grad} text-black shrink-0`}
            >
              <Icon className="w-7 h-7" strokeWidth={2.2} />
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="px-6 sm:px-8 py-6 grid sm:grid-cols-2 gap-3">
          {items.map((it) => {
            const I = it.icon;
            return (
              <div
                key={it.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.05] hover:border-white/20 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br ${a.grad} text-black shrink-0`}
                  >
                    <I className="w-4.5 h-4.5" strokeWidth={2.3} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-white text-sm">
                      {it.title}
                    </div>
                    <div className="mt-1 text-xs text-[#9aa0b4] leading-relaxed">
                      {it.detail}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-white/10 flex items-center justify-between bg-black/30">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6b7287]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            accepting engagements
          </div>
          <a
            href="#connect"
            className={`text-sm font-semibold ${a.label} hover:opacity-80 inline-flex items-center gap-1`}
          >
            {ctaLabel} →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
