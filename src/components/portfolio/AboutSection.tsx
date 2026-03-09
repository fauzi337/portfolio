import { motion } from "framer-motion";
import { Code2, Rocket, Users2 } from "lucide-react";

const stats = [
  { icon: Code2, label: "Years of Experience", value: "5+" },
  { icon: Rocket, label: "Projects", value: "35+" },
  { icon: Users2, label: "Cross-Functional Teams", value: "10+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">- about me -</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {/* Tentang <span className="text-gradient">Saya</span> */}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Full-Stack Developer with a unique background in hospitality and healthcare technology. 
            After starting my career in the hotel industry as a pastry specialist, I transitioned into the healthcare IT sector during the COVID-19 pandemic. 
            From HIS operator to Project Manager, I built strong expertise in system implementation, software maintenance, Agile practices, and web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {stats.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary/40 hover:glow transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
