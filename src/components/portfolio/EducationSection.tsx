import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const educations = [
  {
    type: "education" as const,
    title: "Bachelor of Information Systems (Ongoing)",
    institution: "Universitas Terbuka, Indonesia",
    period: "2025 — Present",
    description:
      "Currently pursuing a degree in Information Systems with focus on software engineering, system analysis, database management, and IT governance.",
  },
  {
    type: "education" as const,
    title: "Hotel Operation",
    institution: "Bogor Hospital Institute, Bogor",
    period: "2015 — 2016",
    description:
      "Completed a one-year vocational training program focused on hospitality operations, kitchen workflow management, food safety standards, and service coordination.",
  },
  // {
  //   type: "certification" as const,
  //   title: "AWS Certified Solutions Architect",
  //   institution: "Amazon Web Services",
  //   period: "2023",
  //   description:
  //     "Sertifikasi profesional untuk merancang arsitektur cloud yang scalable, fault-tolerant, dan cost-effective di AWS.",
  // },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">
            - education -
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education <span className="text-gradient">& Ongoing Studies</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {educations.map((item, i) => {
            const isLeft = i % 2 === 0;
            const Icon = item.type === "education" ? GraduationCap : Award;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow z-10 mt-2" />

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:glow transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={14} className="text-primary" />
                      <span className="text-xs font-medium text-primary font-mono">
                        {item.institution}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Calendar size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
