import { JSX } from "react";

type Internship = {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  current: boolean;
};

const internships: Internship[] = [
  {
    period: "Jul 2024 — Oct 2024",
    role: "Data Analyst Intern",
    company: "Zidio Development Pvt. Ltd.",
    description: "Explored all algorithms of Machine Learning.",
    technologies: [
      "Data Science & Analytics",
      "Machine Learning",
      "Deep Learning",
    ],
    current: true,
  },
  {
    period: "Aug 2023 — Oct 2023",
    role: "Python Developer Intern",
    company: "Zeetron Networks Pvt. Ltd.",
    description:
      "Explored all basic and advanced features of python Language; Examined all new libraries used in python language for different functions and roles",
    technologies: ["Python Programming Language"],
    current: false,
  },
  {
    period: "Jul 2022 — Aug 2022",
    role: "Full Stack Web Developer Intern",
    company: "Learn & Build powered by Techienest Pvt. Ltd",
    description:
      "Learnt Front end & Back end web development for creating and designing new websites.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MySQL"],
    current: false,
  },
  {
    period: "Jul 2021 — Oct 2021",
    role: "Problem Solving through Programming in C",
    company: "NPTEL Online Certification",
    description:
      "Accomplished a Certification for scoring 92% by solving assignments, attempting Programming Exam and giving Proctored Exam of the course",
    technologies: ["C Programming Language"],
    current: false,
  },
];

export const Internships = (): JSX.Element => {
  return (
    <section id="internships" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Internships Experience{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              that shaped my future.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth along with graduation, from curious beginner to
            graduate engineer building projects at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {internships.map((int, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {int.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {int.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{int.role}</h3>
                    <p className="text-muted-foreground">{int.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {int.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {int.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};