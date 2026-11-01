
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BeyondTheCode from "./components/BeyondtheCode";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <BeyondTheCode />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
