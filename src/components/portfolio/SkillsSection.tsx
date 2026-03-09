import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Vue.js", "Tailwind CSS", "Angular"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "Laravel", "Prisma ORM", "Eloquent ORM", "REST API", "PostgreSQL", "MySQL" ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Linux", "Google Sheets", "Microsoft Excel", "VS Code", "Navicat Premium"]
  },
  {
    title: "Project & Operational Skills",
    skills: [
      "Stakeholder Coordination",
      "Vendor Integration Support",
      "Change Request Management",
      "SLA Monitoring",
      "Escalation Handling",
      "Timeline & Task Tracking"
    ]
  },
  {
    title: "Data & Workflow Automation",
    skills: [
      "Google Sheets Automation",
      "Operational Dashboard Development",
      "Multi-site Data Consolidation",
      "Task & Capacity Monitoring",
      "Performance Reporting Dashboard"
    ]
  },
  {
    title: "Other Skills",
    skills: ["IT Support", "Requirement Analysis", "Troubleshooting", "System Deployment" ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">- skills -</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 font-mono">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
