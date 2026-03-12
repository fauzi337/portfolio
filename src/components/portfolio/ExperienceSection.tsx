import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Project Manager",
    company: "PT Raharja Jasa Amara, Bogor",
    period: "Jan 2026 - Feb 2026",
    description:
      "Directed full-cycle technical implementation projects across multiple client sites. Defined project plans and execution phases including workflow assessment, master data consolidation, system configuration and quick customization, server installation, application deployment, data migration, and end-user training. Led go-live execution and provided structured post-implementation monitoring and maintenance to ensure system stability and operational continuity.",
    tech: ["System Implementation", "Data Migration", "Process Optimization", "Technical Coordination", "Laravel", "MySQL", "Deployment Management", ]
  },
  {
    role: "Junior Developer (Freelance Remote)",
    company: "Rumah Sakit Haji Bunda Halimah, Batam",
    period: "Aug 2025 — Mar 2026",
    description:
      "Contributed to the development and stabilization of a Hospital HRIS (Human Resource Information System) prior to go-live. Focused on bug fixing, system maintenance, and implementing additional feature requests aligned with operational requirements. Collaborated with cross-functional teams to ensure system readiness, data accuracy, and smooth deployment during the go-live phase.",
    tech: ["Vue.js", "NestJS", "Prisma ORM", "PostgreSQL"]
  },
  {
    role: "Project Administrator",
    company: "PT Transindo Data Perkasa, Bandung",
    period: "Jan 2025 — Jul 2025",
    description:
      "Managed and monitored 40 active hospital projects, overseeing change requests, vendor coordination, and cross-functional task tracking. Developed centralized operational dashboards using Google Sheets to consolidate multi-site data, monitor workload capacity, and provide executive-level reporting for project managers. Ensured timely task execution through structured follow-ups and escalation management.",
    tech: ["Google Sheets Automation (QUERY, IMPORTRANGE)", "Stakeholder Coordination", "Change Request Management", "SLA Monitoring", "Operational Dashboard"]
  },
  {
    role: "System Implementor",
    company: "PT Transindo Data Perkasa, Bandung",
    period: "Apr 2021 — Dec 2024",
    description:
      "Led system implementation projects across 9 hospitals nationwide, managing end-to-end deployment from initial assessment to go-live. Responsibilities included workflow analysis, master data preparation, system configuration, server installation, application deployment, user training, and post-implementation monitoring to ensure operational stability.",
    tech: ["System Deployment", "Server Installation", "Data Migration", "User Training", "Go-Live Support"]
  },
  {
    role: "System Operator",
    company: "PT Kemala Inti Solusi, Bogor",
    period: "Oct 2020 — Apr 2021",
    description:
      "Provided on-site technical system operation and user support during hospital system implementation. Assisted end-users in daily system usage, handled technical troubleshooting, managed operational data input, and ensured smooth communication between technical teams and hospital staff. Supported reporting activities to client management to maintain operational transparency.",
    tech: ["System Operation", "User Support", "Technical Troubleshooting", "Data Handling", "Client Reporting"]
  },
  {
    role: "Pastry Cook",
    company: "Whiz Prime Hotel, North Jakarta",
    period: "Feb 2020 — Apr 2020",
    description:
      "Managed daily production within the cookies and chocolate section, including preparation, baking, packaging, and quality control. Responsible for stock monitoring, inventory requests, and coordination with warehouse operations to ensure continuous supply. Produced customized chocolate garnishes for breakfast, lunch, dinner services, complimentary cakes, and special event orders, maintaining consistency and presentation standards.",
    tech: ["Production Planning", "Inventory Control", "Quality Assurance", "Team Coordination"]
  },
  {
    role: "Staff Restaurant",
    company: "Pizza Hut Restaurant, Bandung",
    period: "May 2019 — Nov 2019",
    description:
      "Supported daily restaurant operations across multiple sections including steward, salad preparation, bar service, and food cutting station. Ensured hygiene standards, inventory readiness, and smooth coordination with kitchen and service teams in a fast-paced environment.",
    tech: ["Production Planning", "Inventory Control", "Quality Assurance", "Team Coordination"]
  },
  {
    role: "Staff Cold Kitchen",
    company: "Java Heritage Hotel, Purwokerto",
    period: "May 2018 — Nov 2018",
    description:
      "Started as a Steward, ensuring kitchen cleanliness, dishwashing operations, and maintaining hygiene standards. Promoted to Cold Kitchen section, responsible for breakfast preparation, handling salads and fruit stations, stock monitoring, and maintaining food presentation standards in a fast-paced hospitality environment.",
    tech: ["Production Planning", "Inventory Control", "Quality Control", "Team Coordination"]
  },
  {
    role: "Pastry Trainee",
    company: "Trans Luxury Hotel, Bandung",
    period: "Feb 2016 — July 2016",
    description:
      "Completed a structured pastry training program with rotational shifts in a luxury hotel environment. Assisted in breakfast, lunch, and dinner service operations, including stall handling, food preparation, service setup, and clearing. Supported daily production flow from breakfast setup to dinner closing and next-day condiment preparation, ensuring hygiene and presentation standards were maintained.",
    tech: ["Quality Control", "Team Coordination"]
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">
            - experience -
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 md:justify-${isLeft ? "start" : "end"}`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow z-10 mt-2" />

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                  }`}
                >
                  <div className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:glow transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} className="text-primary" />
                      <span className="text-xs font-medium text-primary font-mono">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-3">
                      <Calendar size={12} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-[10px] font-mono rounded bg-muted text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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

export default ExperienceSection;
