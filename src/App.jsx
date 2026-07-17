import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";

export default function App() {
  return (
    <main className="bg-background min-h-screen selection:bg-primary selection:text-black">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
