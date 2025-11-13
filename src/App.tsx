import { ThemeLanguageProvider } from "./components/ThemeLanguageProvider";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeLanguageProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
        <Header />
        <main className="pt-16">
          <div id="hero">
            <Hero />
          </div>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeLanguageProvider>
  );
}