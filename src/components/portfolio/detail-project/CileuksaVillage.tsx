import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const gallery = [
  "/images/projects/cileuksa-village/login.png",
  "/images/projects/cileuksa-village/dashboard.png",
  "/images/projects/cileuksa-village/userlogin.png",
  "/images/projects/cileuksa-village/responapi.png",
  "/images/projects/cileuksa-village/layanansurat.png",
  "/images/projects/cileuksa-village/pengajuansurat.png",
  "/images/projects/cileuksa-village/peraturandesa.png",
  "/images/projects/cileuksa-village/stgadmweb.png",
  "/images/projects/cileuksa-village/webdesa.png",
  "/images/projects/cileuksa-village/strukturkodingan1.png",
  "/images/projects/cileuksa-village/strukturkodingan2.png",
  "/images/projects/cileuksa-village/db1.png",
  "/images/projects/cileuksa-village/ProjectManagement.png",
  "/images/projects/cileuksa-village/ProjectManagement2.png",
  "/images/projects/cileuksa-village/wbs.png",
  "/images/projects/cileuksa-village/listtest.png",
  "/images/projects/cileuksa-village/rekaptest.png",
  "/images/projects/cileuksa-village/timeline.png",
];

const activities = [
  {
    title: "Project Plans",
    desc: "Designed a project implementation plan using a Work Breakdown Structure (WBS), covering master data preparation, system installation, user training, and go-live phases to ensure organized and timely project delivery."
  },
  {
    title: "Workflow Assessment",
    desc: "Analyzed user workflows and system processes to ensure the website structure is intuitive, efficient, and accessible for village administrators and the community."
  },
  {
    title: "Master Data Consolidation",
    desc: "Collected, verified, and consolidated village master data including administrative information, community activities, and local potential to ensure accurate and structured data for the system."
  },
  {
    title: "Server Installation",
    desc: "Deployed and installed the application server infrastructure to support system operation, ensuring stable environment configuration for application hosting and services."
  },
  {
    title: "System Configuration and Quick Customization",
    desc: "Set up the system environment and implemented quick customizations, including data structure configuration and feature adjustments to support village administration and information management."
  },
  {
    title: "Final Test Application",
    desc: "Performed final system testing to validate functionality, data integrity, and workflow consistency."
  },
  {
    title: "Training end-user",
    desc: "Conducted training sessions for village staff and users to ensure they understand system usage, operational workflows, and basic platform management."
  },
  {
    title: "Led Go-Live",
    desc: "Managed the system deployment phase by coordinating final implementation, monitoring system performance, and ensuring smooth transition to production environment."
  },
  {
    title: "Monitoring and Maintenance",
    desc: "To ensure system stability and operational continuity",
  },
];

const CileuksaVillage = () => {
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
            Cileuksa <span className="text-gradient">Village Project</span>
          </h1>

          <p className="text-muted-foreground mb-6">
            A village information website featuring community activity documentation, 
            event galleries, and insights into local potential to support transparency and village promotion.
          </p>

          {/* Banner Image */}
          <div className="rounded-xl overflow-hidden border border-border mb-4 h-[420px]">
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
              <li><b>Company:</b> PT Raharja Jasa Amara</li>
              <li><b>Role:</b> Project Manager</li>
              <li><b>Timeline:</b> Jan 2026 - Feb 2026</li>
              <li><b>Type:</b> Web Application</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>

            <div className="flex flex-wrap gap-2">
              {["Laravel", "Eloquent ORM", "MySQL", "CoreUI", "REST API"].map((tech) => (
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

export default CileuksaVillage;