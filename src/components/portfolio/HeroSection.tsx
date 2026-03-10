import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileImage } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Fauzi </span>
            <span className="text-gradient glow-text">Akbar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            Tech Implementor and Programmer with an <span className="text-primary">Agile mindset,</span>{" "}
            <span className="text-primary">delivering structured</span> and{" "}
            <span className="text-primary">value-driven digital solutions</span>.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
            📍{" "}
            <span className="relative group cursor-pointer text-primary font-medium">
              Indonesia

              {/* underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary transition-all duration-300 group-hover:w-0"></span>

              {/* tooltip */}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap shadow-lg">
                Jawa Barat, Kab. Bogor, Tajurhalang 16320
              </span>
            </span>{" "}
            • Open to Remote
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/fauzi337" },
            { icon: Linkedin, href: "https://linkedin.com/in/fauzi-akbar-34b045365" },
            // { icon: Mail, href: "#contact" },
            // { icon: FileImage, href: "#" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors animate-float"
        >
          <ArrowDown size={16} />
          Scroll Down
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
