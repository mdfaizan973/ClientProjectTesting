import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import BackToTop from '@/components/BackToTop';
import FloatingContact from '@/components/ui/FloatingContact';

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-6xl mx-auto bg-background">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />

      <FloatingContact />
      <BackToTop />
    </>
  );
}
