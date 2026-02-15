import { useRef, useEffect, useState, lazy, Suspense } from "react";
import { ChevronDown } from "lucide-react";
import afsalPhoto from "@/assets/mypic.png";

const ParticleField = lazy(() => import("./ParticleField"));

const roles = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "Next.js Developer",
  "Nest.js Engineer",
];

export default function HeroSection() {
  const photoRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Entrance
  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  // 3D tilt
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    photoRef.current.style.transform = `perspective(800px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale3d(1.03,1.03,1.03)`;
  };

  const handleMouseLeave = () => {
    if (!photoRef.current) return;
    photoRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] floating-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] floating" />

      {/* Content */}
   <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

    {/* LEFT SIDE – BIG 3D PHOTO */}
    <div
      className={`flex-1 flex justify-center transition-all duration-1000 ${
        showContent ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
    >
      <div
        ref={photoRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow Background */}
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-primary via-secondary to-primary opacity-30 blur-3xl animate-pulse" />

        {/* Image */}
        <img
          src={afsalPhoto}
          alt="Afsal PT – Full Stack Developer"
          className="relative w-[280px] md:w-[380px] lg:w-[450px] rounded-3xl object-cover shadow-2xl border border-white/10 mt-12"
        />
      </div>
    </div>

    {/* RIGHT SIDE – TEXT CONTENT */}
    <div className="flex-1 text-center lg:text-left">

      {/* Name */}
      <h1
        className={`font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 transition-all duration-1000 delay-200 ${
          showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <span className="text-gradient">Afsal PT</span>
      </h1>

      {/* Typewriter Role */}
      <div
        className={`h-10 mb-6 transition-all duration-1000 delay-400 ${
          showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <span className="font-display text-xl md:text-2xl text-primary">
          {displayText}
        </span>
        <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
      </div>

      {/* Subtitle */}
      <p
        className={`text-muted-foreground text-lg md:text-xl max-w-xl mb-10 transition-all duration-1000 delay-500 ${
          showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        Building scalable web applications with modern technologies
      </p>

      {/* CTA */}
      <div
        className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ${
          showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <a
          href="#projects"
          className="group px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3.5 rounded-xl glass text-foreground font-semibold text-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:scale-105"
        >
          Contact Me
        </a>
      </div>

    </div>
  </div>
</div>


      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50 animate-[scrollDown_2s_ease-in-out_infinite]">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}
