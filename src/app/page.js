import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Education/> 
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Experience/>
      <Contact/>
    </main>
  );
}
