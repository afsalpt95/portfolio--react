import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-primary font-display text-sm font-semibold uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Crafting Digital{" "}
            <span className="text-gradient">Experiences</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className={`space-y-5 text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p>
              I'm a passionate Full Stack Developer specializing in building high-performance, 
              scalable web applications using the MERN stack, Next.js, and Nest.js. With a keen eye 
              for detail and a love for clean code, I transform complex requirements into elegant solutions.
            </p>
            <p>
              From architecting robust backend systems to crafting pixel-perfect user interfaces, 
              I bring ideas to life with modern technologies and best practices. I thrive in fast-paced 
              environments where innovation and quality go hand in hand.
            </p>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "30+", label: "Projects Delivered" },
              { value: "10+", label: "Happy Clients" },
              { value: "20+", label: "Technologies" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="font-display text-3xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
