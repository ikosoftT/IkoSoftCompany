import { Github, Youtube, Linkedin, Mail, Heart } from "lucide-react";

// Build-time-baked year: stable for the lifetime of the deployed bundle.
// Bump by re-running `npm run build` once per year to refresh.
const COPY_YEAR = new Date().getFullYear();

const socials = [
  { icon: Github, href: "https://github.com/ikosoftT", label: "GitHub" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@IkoSoftCompany",
    label: "YouTube",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yassine-ikoubazene-7ab090384/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:contact@ikosoft.dev", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 text-black font-bold text-lg">
                i
              </div>
              <span className="font-bold text-lg">
                <span className="text-gradient">iko</span>soft
                <span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-[#9aa0b4] max-w-sm">
              Building secure, modern web products. Founded by Yassine
              IKoubazene — 42 Software Engineer, ethical hacker, and lifelong
              builder.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#6b7287] mb-4">
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-cyan-300 transition-colors">
                  Goals
                </a>
              </li>
              <li>
                <a href="#hobbies" className="hover:text-cyan-300 transition-colors">
                  Hobbies
                </a>
              </li>
              <li>
                <a href="#connect" className="hover:text-cyan-300 transition-colors">
                  Connect
                </a>
              </li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#6b7287] mb-4">
              Socials
            </h4>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid place-items-center w-10 h-10 rounded-lg border border-white/10 text-[#9aa0b4] hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6b7287]">
          <p>
            © {COPY_YEAR} ikosoft — Built with{" "}
            <Heart className="inline w-3 h-3 text-violet-400" /> and{" "}
            <span className="text-cyan-400">Next.js</span>.
          </p>
          <p className="font-mono">
            <span className="text-emerald-400">●</span> status: shipping
          </p>
        </div>
      </div>
    </footer>
  );
}
