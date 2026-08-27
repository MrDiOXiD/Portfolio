import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { Gallery } from "@/components/sections/Gallery";
import { NextPlans } from "@/components/sections/NextPlans";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Gallery />
      <NextPlans />
      <Contact />
    </main>
  );
}
