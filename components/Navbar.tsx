"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#goals", label: "Goals" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#connect", label: "Connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // detect active section
      const sections = ["#top", ...links.map((l) => l.href)];
      let current = "#top";
      for (const id of sections) {
        const el = id === "#top" ? document.body : document.querySelector(id);
        if (!el) continue;
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          current = id;
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-[#05050a]/70 border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-black font-bold">
              <Terminal className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-lg tracking-tight">
              <span className="text-gradient">iko</span>
              <span>soft</span>
              <span className="text-cyan-400">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9aa0b4]">
              ikoubazene // yassine
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-[#9aa0b4] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            );
          })}
          <a
            href="#connect"
            className="ml-2 px-5 py-2 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 transition-all hover:scale-105 active:scale-95"
          >
            Hire me
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg border border-white/10 hover:border-white/30"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/5 mt-3"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-base text-[#e6e8f2] hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#connect"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 rounded-lg text-center font-semibold text-black bg-gradient-to-r from-cyan-400 to-violet-500"
              >
                Hire me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
