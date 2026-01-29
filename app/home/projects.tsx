import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { JSX } from "react";

/* ---------------- Types ---------------- */

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
};

/* ---------------- Data ---------------- */

const projects: Project[] = [
  {
    title: "The Distancometer",
    description:
      "This is a project on Ultrasonic RADAR for security system for human or object interference in a short range. The system has been successfully implemented and the aim is achieved without any deviation. There is a lot of future scope of this project because of its security capacity. It can be used in many applications. This project can also be developed or modified according to the rising needs and demand.",
    image: "/projects/project-1.png",
    tags: ["Internet of Things (IoT)", "Arduino UNO", "Ultrasonic Sensors"],
    link: "#",
    github: "#",
  },
  {
    title: "Grocery Delivery Website",
    description:
      "A grocery delivery website project facilitates online grocery shopping and delivery, offering users a convenient way to purchase groceries without leaving their homes. The website allows users to browse a catalog of grocery items, add them to a shopping cart.This project aims to streamline the grocery shopping process, providing users with a seamless experience to order grocery items.",
    image: "/projects/project-2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
  {
    title: "Age & Gender Detection Project",
    description:
      "This project attempts to determine gender and age based on a person's frame, employing deep learning techniques and real-time frame processing using OpenCV. Due to challenges such as facial expressions, lighting variations, and makeup, predicting exact age from a single frame is challenging. To address this, age ranges are considered, and the predicted age falls within one of these ranges.",
    image: "/projects/project-3.png",
    tags: ["OpenCV", "Python"],
    link: "#",
    github: "#",
  },
  {
    title: "Handwritten Digit Recognition Project",
    description:
      "The primary objective of this project is to create a model capable of accurately identifying handwritten digits. By leveraging machine learning techniques and image processing, we aim to develop an application that can recognize numbers in various contexts.",
    image: "/projects/project-4.png",
    tags: ["Deep Learning"],
    link: "#",
    github: "#",
  },
];

/* ---------------- Component ---------------- */

export const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
