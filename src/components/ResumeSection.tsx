import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ResumeSection() {
  const { ref, isVisible } = useScrollReveal();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="resume" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm font-semibold uppercase tracking-widest mb-3">
            Resume
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Curriculum Vitae</span>
          </h2>
        </div>

        {/* Resume Card */}
        <div className="relative">
          <div
            onClick={() => !expanded && setExpanded(true)}
            className={`relative glass-strong rounded-3xl overflow-hidden border border-border/60 transition-all duration-700 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 ${
              expanded ? "h-[85vh]" : "h-[350px] cursor-pointer"
            }`}
          >
            {/* Overlay when collapsed */}
            {!expanded && (
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent flex items-end justify-center pb-6 z-10">
                <span className="text-primary font-medium tracking-wide">
                  Click to View Full Resume
                </span>
              </div>
            )}

            {/* Close Button when expanded */}
            {expanded && (
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-4 right-4 z-20 px-4 py-1 text-sm rounded-lg bg-destructive text-destructive-foreground"
              >
                Close
              </button>
            )}

            {/* Resume Preview */}
            <iframe
              src="/Afsalpt.pdf#toolbar=0&navpanes=0"
              title="Resume"
              className={`w-full h-full transition-all duration-500 ${
                expanded ? "pointer-events-auto" : "pointer-events-none"
              }`}
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/Afsalpt.pdf"
            download
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-cyan transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
