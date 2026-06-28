import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Goals from "@/components/Goals";
import Hobbies from "@/components/Hobbies";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background layers */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-30 grid-bg opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.15), transparent 60%), radial-gradient(ellipse 60% 50% at 100% 30%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(ellipse 70% 50% at 0% 70%, rgba(52,211,153,0.10), transparent 60%)",
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Services />
      <Goals />
      <Hobbies />
      <Connect />
      <Footer />
    </main>
  );
}
