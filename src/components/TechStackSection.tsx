import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useRef } from "react";

const techStack = {
  Frontend: [
    { name: "React", color: "61 100% 50%" },
    { name: "JavaScript", color: "211 60% 48%" },
    { name: "Next.js", color: "0 0% 90%" },
    { name: "TypeScript", color: "211 60% 48%" },
    { name: "Tailwind CSS", color: "198 93% 60%" },
    { name: "HTML5", color: "12 77% 52%" },
    { name: "CSS3", color: "228 77% 52%" },
  ],
  Backend: [
    { name: "Node.js", color: "120 40% 45%" },
    { name: "Nest.js", color: "350 80% 50%" },
    { name: "Express", color: "0 0% 70%" },
    { name: "Prisma", color: "263 70% 50%" },
    { name: "REST APIs", color: "190 100% 50%" },
    { name: "Schema Design", color: "200 60% 45%" },
    { name: "Aggregation Pipelines", color: "200 60% 45%" },
    { name: "Indexing", color: "200 60% 45%" },
  ],
  Database: [
    { name: "MongoDB", color: "120 50% 40%" },
    { name: "PostgreSQL", color: "210 60% 50%" },
    { name: "Redis", color: "0 70% 50%" },
    { name: "MySQL", color: "200 60% 45%" },
  ],
  Tools: [
    { name: "Git", color: "10 70% 50%" },
    { name: "Docker", color: "210 70% 55%" },
    { name: "AWS", color: "30 90% 50%" },
    { name: "CI/CD", color: "263 70% 50%" },
    { name: "Postman", color: "263 70% 50%" },
  ],

    Services: [
    { name: "Aws S3", color: "10 70% 50%" },
    { name: "DigitalOcean", color: "210 70% 55%" },
    { name: "Cloudinary", color: "30 90% 50%" },
    { name: "Firebase", color: "263 70% 50%" },
  ],

     Ohters: [
    { name: "Axios", color: "10 70% 50%" },
    { name: "JWT", color: "210 70% 55%" },
    { name: "Redux", color: "210 70% 55%" },
    { name: "TanStack Query", color: "210 70% 55%" },
    { name: "Socket.io", color: "30 90% 50%" },
    { name: "Microservices", color: "263 70% 50%" },
    { name: "MVC Architecture", color: "263 70% 50%" },
    { name: "Zustand", color: "210 70% 55%" },
  ],
};

export default function TechStackSection() {
  const { ref, isVisible } = useScrollReveal();
  const mouse = useMousePosition();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="techstack" className="relative py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-primary font-display text-sm font-semibold uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Technologies I{" "}
            <span className="text-gradient">Work With</span>
          </h2>
        </div>

        {Object.entries(techStack).map(([category, techs], catIdx) => (
          <div
            key={category}
            className={`mb-10 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${catIdx * 150}ms` }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech, i) => (
                <TechBadge key={tech.name} tech={tech} index={i} mouse={mouse} sectionRef={sectionRef} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechBadge({
  tech,
  index,
  mouse,
  sectionRef,
}: {
  tech: { name: string; color: string };
  index: number;
  mouse: { x: number; y: number };
  sectionRef: React.RefObject<HTMLDivElement>;
}) {
  const badgeRef = useRef<HTMLDivElement>(null);

  const getGlow = () => {
    if (!badgeRef.current) return {};
    const rect = badgeRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dist = Math.sqrt((mouse.x - cx) ** 2 + (mouse.y - cy) ** 2);
    const maxDist = 200;
    if (dist < maxDist) {
      const intensity = 1 - dist / maxDist;
      return {
        boxShadow: `0 0 ${20 * intensity}px hsl(${tech.color} / ${0.4 * intensity})`,
        borderColor: `hsl(${tech.color} / ${0.3 + 0.4 * intensity})`,
      };
    }
    return {};
  };

  return (
    <div
      ref={badgeRef}
      className="px-5 py-2.5 rounded-xl glass text-sm font-medium text-foreground border transition-all duration-300 hover:scale-105 cursor-default"
      style={{
        animationDelay: `${index * 100}ms`,
        ...getGlow(),
      }}
    >
      {tech.name}
    </div>
  );
}
