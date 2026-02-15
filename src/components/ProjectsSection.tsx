import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github } from "lucide-react";
import restaurantImg from '@/assets/restaurant.png'
import tecbooksImg from '@/assets/tecbooks.png'
import goldImg from '@/assets/goldatm.png'
import vbuyImg from '@/assets/vbuygold.png'
import quickbooksImg from '@/assets/quickbooks.png'
import mobileImg from '@/assets/mobile.png'
import electronicsImg from '@/assets/electronincs.png'
import libraryImg from '@/assets/library.png'
import tudoImg from '@/assets/tudo-2.png'



const projects = [
  {
    title: "Restaurant Pos",
    image: restaurantImg,
    description: "A complete restaurant POS system to manage orders, tables, kitchen workflow, and billing with real-time updates. Designed to streamline restaurant operations and improve service efficiency.",
    tech: ["Next.js", "Node.js","Express","MongoDB", "Redis","Socket.io", "Tailwind CSS"],
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "TecBooks",
    image: tecbooksImg,
    description: "A business management platform similar to Zoho for handling accounting, invoicing, employee management, and analytics dashboards. Built for scalable business operations.",
    tech: ["Next.js", "Node.js", "MongoDB", "Chart.js", "TypeScript","Tailwind CSS"],
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    title: "Gold ATM",
    image: goldImg,
    description: "A fintech solution enabling customers to purchase physical gold coins via card or UPI payments with real-time pricing and secure transaction processing.",
    tech: ["Node.js", "MongoDB", "Socket.io"],
    gradient: "from-primary/20 to-secondary/10",
  },
    {
    title: "VBuy Gold",
    image: vbuyImg,
    description: "A secure platform for buying and selling second-hand gold with price calculation, user authentication, and complete transaction management.",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-primary/20 to-secondary/10",
  },

     {
    title: "QuickBooks",
    image: quickbooksImg,
    description: "A hotel room booking and management system with real-time availability, reservation tracking, and secure payment integration.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io","Mvc Architecture"],
    gradient: "from-primary/20 to-secondary/10",
  },
      {
    title: "Mobile Management",
    image: mobileImg,
    description: "A retail management system for handling mobile sales, inventory, repairs, and billing with efficient backend architecture and real-time updates.",
    tech: ["Next.js", "Nest.js", "PostgreSQL", "Prisma", "Socket.io", "TanStack Query", "Tailwind CSS"],
    gradient: "from-primary/20 to-secondary/10",
  },
     {
    title: "Electronics Mart",
    image: electronicsImg,
    description: "An e-commerce platform for buying and selling electronics with product management, cart system, and secure order processing.",
    tech: ["HBS", "Node.js", "MongoDB"],
    gradient: "from-primary/20 to-secondary/10",
  },
        {
    title: "Libraray Management",
    image: libraryImg,
    description: "A digital library system to manage books, members, borrowing records, and return tracking with role-based access control.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    gradient: "from-primary/20 to-secondary/10",
  },
         {
    title: "Tudo APP",
    image: tudoImg,
    description: "A task management application to organize daily activities, track progress, and improve personal productivity.",
    tech: ["React"],
    gradient: "from-primary/20 to-secondary/10",
  },
];

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-primary font-display text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isVisible,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0px)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Project image placeholder */}
      <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
       <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
/>
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/10 text-primary/80 border border-primary/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
