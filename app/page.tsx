import { Hero } from "./home/hero";
import { About } from "./home/about";
import { Projects } from "./home/projects";
import { Internships } from "./home/internships";
import { Testimonials } from "./home/testimonials";
import { Contact } from "./home/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Internships />
      <Testimonials />
      <Contact />
    </main>
  );
}
