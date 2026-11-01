import Header from "./components/ui/Header.jsx";
import Footer from "./components/ui/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Skills from "./components/sections/Skills.jsx";
import Experience from "./components/sections/Experience.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";

export default function App() {
  return (
    <>
      {/* Film-grain texture over everything — static, pointer-events-none, no scroll cost */}
      <div aria-hidden="true" className="noise-overlay" />
      <Header />
      <main className="bg-background min-h-screen selection:bg-primary selection:text-black">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
