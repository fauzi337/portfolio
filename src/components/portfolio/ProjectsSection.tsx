import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Cileuksa Village Information System",
    description: "A village information website featuring community activity documentation, event galleries, and insights into local potential to support transparency and village promotion.",
    tech: ["Laravel", "Eloquent ORM", "MySQL", "CoreUI", "REST API"],
    github: "#",
    link: "/projects/cileuksa-village",
    type: "project",
  },
  {
    title: "Human Resource Information System",
    description: "A human resource management platform that supports employee administration, attendance tracking, payroll processing, overtime management, and time-off request workflows.",
    tech: ["Vue.js", "NestJS", "Prisma ORM", "PostgreSQL", "REST API", "Vite"],
    github: "#",
    link: "/projects/hris",
    type: "project",
  },
  {
    title: "Project Management Dashboard",
    description: "A real-time project monitoring dashboard built with Google Sheets to track incoming task requests, manage progress, and generate reporting summaries for the team. Designed to improve mobility and simplify reporting.",
    tech: ["Google Sheets", "Microsoft Excel", "Google Meet", "Discord"],
    github: "#",
    link: "/projects/project-management",
    type: "project",
  },
  {
    title: "Hospitality Information System RSUP Fatmawati South Jakarta",
    description: "A modular Hospital Information System (HIS) upgraded from v2 to v3 using Vue.js and Laravel 8. The system operates as an ERP-style healthcare platform integrating front-office and back-office hospital workflows, while supporting interoperability with external services such as BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems. The architecture utilizes PostgreSQL and MongoDB for data management and Docker-based containerization for scalable deployment.",
    tech: ["Vue.js", "Laravel", "PostgreSQL", "MongoDB", "REST API", "Docker"],
    github: "#",
    link: "/projects/project-fatmawati",
    type: "project",
  },
  {
    title: "Hospitality Information System RSUD Kota Bekasi",
    description: "A modular Hospital Information System (HIS) deployed on an on-premise infrastructure using separate servers for the application and database. the system was designed using Angular and Laravel 7.4 The architecture utilizes PostgreSQL for data management. The platform integrates multiple hospital modules and external healthcare services such as BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems.",
    tech: [ "Angular", "Laravel", "PostgreSQL", "Kendo UI", "REST API"],
    github: "#",
    link: "/projects/project-bekasi",
    type: "project",
  },
  {
    title: "Hospitality Information System RSUD Ciawi",
    description: "A modular Hospital Information System (HIS) deployed on an on-premise infrastructure using separate servers for the application and database. the system was designed using Angular and Laravel 7.4 The architecture utilizes PostgreSQL for data management. The platform integrates multiple hospital modules and external healthcare services such as BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems.",
    tech: ["Angular", "Laravel", "PostgreSQL", "Kendo UI", "REST API"],
    github: "#",
    link: "/projects/project-ciawi",
    type: "project",
  },
  {
    title: "Hospitality Information System RSD Mangusada Bali",
    description: "A modular Hospital Information System (HIS) deployed on an on-premise infrastructure using separate servers for the application and database. the system was designed using Angular and Laravel 7.4 The architecture utilizes PostgreSQL for data management. The platform integrates multiple hospital modules and external healthcare services such as BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems.",
    tech: ["Angular", "Laravel", "PostgreSQL", "Kendo UI", "REST API"],
    github: "#",
    link: "/projects/project-mangusada",
    type: "project",
  },
  {
    title: "Hospitality Information System RSU AMC",
    description: "A modular Hospital Information System (HIS) deployed on an on-premise infrastructure using separate servers for the application and database. the system was designed using Angular and Laravel 7.4 The architecture utilizes PostgreSQL for data management. The platform integrates multiple hospital modules and external healthcare services such as BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems.",
    tech: ["Angular", "Laravel", "PostgreSQL", "Kendo UI", "REST API"],
    github: "#",
    link: "/projects/project-amc",
    type: "project",
  },
  {
    title: "Hospitality Information System RSU Royal Prima Medan",
    description: "A modular Hospital Information System (HIS) deployed on an on-premise infrastructure using separate servers for the application and database. the system was designed using Angular and Laravel 7.4 The architecture utilizes PostgreSQL for data management. The platform integrates multiple hospital modules and external healthcare services such as BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems.",
    tech: ["Angular", "Laravel", "PostgreSQL", "Kendo UI", "REST API"],
    github: "#",
    link: "/projects/project-royal-prima",
    type: "project",
  },
  {
    title: "Hospitality Information System RSJ Grhasia Sleman",
    description: "A modular Hospital Information System (HIS) deployed on an on-premise infrastructure using separate servers for the application and database. the system was designed using Angular and Laravel 7.4 The architecture utilizes PostgreSQL for data management. The platform integrates multiple hospital modules and external healthcare services such as BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems.",
    tech: ["Angular", "Laravel", "PostgreSQL", "Kendo UI", "REST API"],
    github: "#",
    link: "/projects/project-grhasia#",
    type: "project",
  },
  {
    title: "Hospitality Information System RSUD Chasan Boesoirie Ternate",
    description: "A modular Hospital Information System (HIS) deployed on an on-premise infrastructure using separate servers for the application and database. the system was designed using Angular and Laravel 7.4 The architecture utilizes PostgreSQL for data management. The platform integrates multiple hospital modules and external healthcare services such as BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems.",
    tech: ["Angular", "Laravel", "PostgreSQL", "Kendo UI", "REST API"],
    github: "#",
    link: "/projects/project-ternate",
    type: "project",
  },
  {
    title: "Hospitality Information System RSUD Cibinong Bogor",
    description: "A modular Hospital Information System (HIS) deployed on an on-premise infrastructure using separate servers for the application and database. the system was designed using Angular and Laravel 7.4 The architecture utilizes PostgreSQL for data management. The platform integrates multiple hospital modules and external healthcare services such as BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems.",
    tech: ["Angular", "Laravel", "PostgreSQL", "Kendo UI", "REST API"],
    github: "#",
    link: "/projects/project-cibinong",
    type: "project",
  },
  {
    title: "Timeline Application",
    description: "A web-based timeline management application designed to track incoming activity requests, manage task lists, and organize agendas within a centralized system for better visibility and coordination.",
    tech: ["Laravel", "PostgreSQL", "Tailwind CSS", "Vite"],
    github: "#",
    link: "/projects/timeline-app",
    type: "dev",
  },
  {
    title: "Driver License Application Reservation System",
    description: "A web-based public health management system designed to support community healthcare services. The platform helps healthcare providers manage patient records, medical visits, and service reports through an integrated digital system, improving efficiency, data accuracy, and accessibility for health workers.",
    tech: ["React", "Laravel", "PostgreSQL", "Tailwind CSS", "REST API", "Vite"],
    github: "#",
    link: "/projects/reservasi-app",
    type: "dev",
  },
  {
    title: "Public Health Management System",
    description: "A web-based health management information system that digitizes community healthcare administration. It enables health workers to manage patient data, medical service records, and reporting through a centralized platform, helping improve operational efficiency and healthcare service delivery.",
    tech: ["React", "Laravel", "PostgreSQL", "Tailwind CSS", "REST API", "Vite"],
    github: "#",
    link: "/projects/simkesmas",
    type: "dev",
  },
];

const txtPrimary = "text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors";
const txtInfo = "text-lg font-semibold text-foreground mb-2 group-hover:text-info transition-colors";
const borderPrimary = "group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:glow transition-all duration-300 flex flex-col";
const borderInfo = "group rounded-xl border border-border bg-card p-6 hover:border-info/40 hover:glow transition-all duration-300 flex flex-col";
const linkPrimary = "text-muted-foreground hover:text-primary transition-colors";
const linkInfo = "text-muted-foreground hover:text-info transition-colors";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">- projects -</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Detail <span className="text-gradient">Work Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={project.type === "project" ? borderPrimary : borderInfo}
            >
              <h3 className={project.type === "project" ? txtPrimary : txtInfo}>
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-[10px] font-mono rounded bg-muted text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {/* <a
                  href={project.github}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a> */}
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={project.type === "project" ? linkPrimary : linkInfo}
                >
                  <ExternalLink size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
