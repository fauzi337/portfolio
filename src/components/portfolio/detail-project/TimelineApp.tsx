import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const gallery = [
  "/images/projects/timeline-app/login.png",
  "/images/projects/timeline-app/timeline_request.png",
  "/images/projects/timeline-app/excode1.png",
  "/images/projects/timeline-app/route.png",
  "/images/projects/timeline-app/excode2.png",
  "/images/projects/timeline-app/dashboarddev.png",
  "/images/projects/timeline-app/dashboardreq.png",
  "/images/projects/timeline-app/reqmerge.png",
  "/images/projects/timeline-app/dashboardreqdone.png",
  "/images/projects/timeline-app/dailyreport.png",
  "/images/projects/timeline-app/drfu.png",
  "/images/projects/timeline-app/agenda.png",
  "/images/projects/timeline-app/db1.png",
  "/images/projects/timeline-app/db2.png",
  "/images/projects/timeline-app/db3.png",
  "/images/projects/timeline-app/db4.png",
];

const activities = [
  {
    title: "System Design",
    desc: "Designed the application architecture including database schema, API structure, and overall system workflow to ensure scalable and maintainable development."
  },
  {
    title: "Backend Development",
    desc: "Developed application logic, database interactions, and request handling using Laravel to manage activity requests, task lists, and agenda tracking."
  },
  {
    title: "Server-Side Rendering",
    desc: "Built dynamic user interfaces using Laravel Blade templates to display activity timelines, task lists, and request tracking in a structured workflow."
  },
  {
    title: "Dashboard & Monitoring",
    desc: "Implemented a real-time monitoring dashboard to track task progress, priorities, and system activity."
  },
  {
    title: "Testing and Optimization",
    desc: "Performed testing, debugging, and performance improvements to ensure system reliability and smooth user experience."
  },
];

const TimelineApp = () => {
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
            Timeline <span className="text-gradient">Application</span>
          </h1>

          <p className="text-muted-foreground mb-6">
            A web-based timeline management application designed to track incoming activity requests,
            manage task lists, and organize agendas within a centralized system for better visibility
            and coordination.
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
              <li><b>Project:</b> Personal Project</li>
              <li><b>Role:</b> Fullstack Developer</li>
              <li><b>Timeline:</b> Apr 2025 - Jun 2025</li>
              <li><b>Type:</b> Web Application</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>

            <div className="flex flex-wrap gap-2">
              {["Laravel", "PostgreSQL", "Tailwind CSS", "Vite"].map((tech) => (
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

export default TimelineApp;