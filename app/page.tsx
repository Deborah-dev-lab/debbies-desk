import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f4] text-[#111111]">
      {/* Navigation */}
      <Navbar />

      {/* Introduction */}
      <Hero />

      {/* Moving disciplines strip */}
      <Marquee />

      {/* Selected projects */}
      <Projects />

      {/* Professional experience */}
      <Experience />

      {/* Skills and interactive playground */}
      <Skills />

      {/* About and education */}
      <About />

      {/* Contact and footer */}
      <Contact />
    </main>
  );
}
