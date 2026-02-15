import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Techon Innovations",
    period: "2024 – 2026",
    description:
      "Leading development of scalable web applications using Next.js and Nest.js. Architecting microservices and implementing CI/CD pipelines.",
  },
  {
    role: "Backend Developer",
    company: "X-YUG Technologies Pvt. Ltd.",
    period: "2023 – 2024",
    description:
      "Built multiple client projects using the Node.js and Express.js frameworks . Delivered responsive, high-performance websites and APIs.",
  },
  {
    role: "Full Stack Developer",
    company: "Brototype",
    period: "2022 – 2023",
    description:
      "Developed interactive user interfaces with React and TypeScript. Collaborated with design teams to implement pixel-perfect, accessible UIs.",
  },
];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-primary font-display text-sm font-semibold uppercase tracking-widest mb-3">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="text-gradient">History</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              {/* Dot */}
              <div
                className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary pulse-glow z-10`}
                style={{ top: "0.5rem" }}
              />

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 ${
                  i % 2 === 0
                    ? "md:pr-16 md:text-right md:w-1/2"
                    : "md:pl-16 md:ml-auto md:w-1/2"
                }`}
              >
                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 group">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-secondary font-medium mt-0.5">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
