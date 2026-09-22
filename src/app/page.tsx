import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Projects,
} from "@/components/sections";
import { profile } from "@/data/content";

export default function Home() {
  return (
    <>
      <Nav handle={profile.handle} />
      <main id="top" className="mx-auto w-full max-w-3xl px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer name={profile.name} />
    </>
  );
}
