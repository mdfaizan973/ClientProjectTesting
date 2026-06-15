import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Expertise } from "@/components/Expertise";
import { Publications } from "@/components/Publications";
import { CaseStudies } from "@/components/CaseStudies";
import { Philosophy } from "@/components/Philosophy";
import { Testimonials } from "@/components/Testimonials";
import { Journal } from "@/components/Journal";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Expertise />
      <Publications />
      <CaseStudies />
      <Philosophy />
      <Testimonials />
      <Journal />
      <Achievements />
      <Contact />
    </main>
  );
}
