import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      console.log("Sending email...");

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS Result:", result);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-primary font-display text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form */}
          <div
            className={`md:col-span-3 glass rounded-2xl p-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-all duration-300"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border text-foreground text-sm resize-none focus:outline-none focus:border-primary/50 transition-all duration-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={15} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Social */}
          <div
            className={`md:col-span-2 flex flex-col gap-4 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "afsalpt956786@gmail.com",
                href: "mailto:afsalpt956786@gmail.com",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/afsalpt95",
                href: "https://github.com/afsalpt95",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/afsalafi",
                href: "https://www.linkedin.com/in/afsalafi/",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 hover:shadow-lg transition-all duration-500 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
