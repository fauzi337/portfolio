import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const gallery = [
  "/images/projects/project-management/login.png",
  "/images/projects/project-management/mp.png",
  "/images/projects/project-management/monitormp1.png",
  "/images/projects/project-management/monitormp2.png",
  "/images/projects/project-management/monitormp3.png",
  "/images/projects/project-management/mpdetailperproject.png",
  "/images/projects/project-management/monitor_daily_report_blur_kode_project.png",
  "/images/projects/project-management/agenda.png",
  "/images/projects/project-management/updateprogrammer.png",
  "/images/projects/project-management/monitorprogrammer.png",
  "/images/projects/project-management/dashboardmanagement1.1.png",
  "/images/projects/project-management/dashboardmanagement1.2.png",
  "/images/projects/project-management/dashboardmanagement2.1.png",
  "/images/projects/project-management/dashboardmanagement2.2.png",
  "/images/projects/project-management/dashboardmanagement3.png",
];

const activities = [
  {
    title: "Support Team Coordination",
    desc: "Coordinated the online support team responsible for handling hospital information system (SIMRS) operations, ensuring service availability and timely response to client requests."
  },
  {
    title: "Operational Monitoring",
    desc: "Monitored daily operational activities across multiple hospital implementations, tracking support coverage, system issues, and service continuity."
  },
  {
    title: "Project Administration",
    desc: "Maintained project documentation, monitored implementation status, and organized operational data related to hospital system deployments and support assignments."
  },
  {
    title: "Reporting & Documentation",
    desc: "Prepared operational reports and maintained monitoring sheets to track system usage, support schedules, and project progress across supported sites."
  },
  {
    title: "Stakeholder Coordination",
    desc: "Communicated with internal teams, vendors, and healthcare clients to coordinate issue resolution and ensure smooth operation of deployed hospital systems."
  },
];

const ProjectManagement = () => {
    const [banner, setBanner] = useState(gallery[0]);
    const [startIndex, setStartIndex] = useState(0);

    const visibleImages = gallery.slice(startIndex, startIndex + 5);

    const nextSlide = () => {
    if (startIndex + 5 < gallery.length) {
        setStartIndex(startIndex + 1);
    }
    };

    const prevSlide = () => {
    if (startIndex > 0) {
        setStartIndex(startIndex - 1);
    }
    };
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            Project Management <span className="text-gradient">Dashboard</span>
          </h1>

          <p className="text-muted-foreground mb-6">
            A real-time project monitoring dashboard built with Google Sheets to track incoming task requests, manage progress, 
            and generate reporting summaries for the team. Designed to improve mobility and simplify reporting.
          </p>

          {/* Banner Image */}
          <div className="rounded-xl overflow-hidden border border-border mb-4 h-[540px]">
            <img
            src={banner}
            className="w-full h-full object-cover transition duration-300"
            />
          </div>

          {/* Thumbnail gallery
          <div className="grid grid-cols-5 gap-3">

            {gallery.map((img, i) => (
            <div
                key={i}
                onMouseEnter={() => setBanner(img)}
                className="cursor-pointer overflow-hidden rounded-lg border border-border"
            >
                <img
                src={img}
                className="w-full h-[90px] object-cover hover:scale-110 transition duration-300"
                />
            </div>
            ))}

          </div> */}
          <div className="relative flex items-center">

            {/* LEFT ARROW */}
            {startIndex > 0 && (
                <button
                onClick={prevSlide}
                className="absolute -left-6 z-10 bg-card border border-border rounded-full p-2 hover:bg-muted transition"
                >
                <ChevronLeft size={18} />
                </button>
            )}

            {/* THUMBNAILS */}
            <div className="grid grid-cols-5 gap-3 w-full">

                {visibleImages.map((img, i) => (
                <div
                    key={i}
                    onMouseEnter={() => setBanner(img)}
                    className={`cursor-pointer overflow-hidden rounded-lg border transition 
                    ${banner === img ? "border-primary" : "border-border"}`}
                >
                    <img
                    src={img}
                    className="w-full h-[90px] object-cover hover:scale-110 transition duration-300"
                    />
                </div>
                ))}

            </div>

            {/* RIGHT ARROW */}
            {startIndex + 5 < gallery.length && (
                <button
                onClick={nextSlide}
                className="absolute -right-6 z-10 bg-card border border-border rounded-full p-2 hover:bg-muted transition"
                >
                <ChevronRight size={18} />
                </button>
            )}

            </div>
        </motion.div>

        {/* PROJECT INFO */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div>
            <h3 className="text-xl font-semibold mb-3">Project Information</h3>

            <ul className="text-muted-foreground space-y-2">
              <li><b>Company:</b> PT Transindo Data Perkasa</li>
              <li><b>Role:</b> Project Administrator</li>
              <li><b>Timeline:</b> Jan 2025 - Jul 2025</li>
              <li><b>Type:</b> Healthcare System Implementation & Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>

            <div className="flex flex-wrap gap-2">
              {["Google Sheets", "Microsoft Excel", "Google Meet", "Discord"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-muted rounded text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="flex items-center gap-2 text-primary"
              >
                <Github size={18} /> Repository
              </a>

              <a
                href="#"
                className="flex items-center gap-2 text-primary"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            </div> */}
          </div>
        </div>

        {/* ACTIVITIES */}
        <div>
          <h2 className="text-2xl font-bold mb-8">
            Project <span className="text-gradient">Activities</span>
          </h2>

          <div className="space-y-6">
            {activities.map((act, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:glow transition-all duration-300 flex flex-col"
              >
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {act.title}
                </h4>

                <p className="text-muted-foreground text-sm">
                  {act.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectManagement;