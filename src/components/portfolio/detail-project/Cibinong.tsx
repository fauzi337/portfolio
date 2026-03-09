import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const gallery = [
];

const activities = [
  {
    title: "External System Coordination",
    desc: "Coordinated with hospital units and external institutions responsible for integrated services to update system authorization and ensure proper bridging with the new application."
  },
  {
    title: "End User Training",
    desc: "Conducted training sessions for hospital end users across multiple operational shifts, typically scheduled for one week to ensure all service staff understood system workflows and operational procedures."
  },
  {
    title: "Go-Live & Post-Implementation Monitoring",
    desc: "Followed by system launch and daily monitoring to ensure operational stability. Finalized the implementation with project documentation and knowledge transfer to the on-site operator."
  }
];

const Cibinong = () => {
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
            Hospitality Information System <span className="text-gradient">RSUD Cibinong</span>
          </h1>

          <p className="text-muted-foreground mb-6">
              A modular Hospital Information System (HIS) deployed on an on-premise infrastructure using separate servers for the 
              application and database. the system was designed using Angular and Laravel 7.4 The architecture utilizes PostgreSQL 
              for data management. The platform integrates multiple hospital modules and external healthcare services such as 
              BPJS, e-Claim, RIS, PACS, LIS, and online pharmacy systems.
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
              <li><b>Company:</b> PT Kemala inti Solusi</li>
              <li><b>Role:</b> Operator</li>
              <li><b>Timeline:</b> Oct 2020 - Apr 2021</li>
              <li><b>Type:</b> Healthcare System Implementation & Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Project Information</h3>

            <ul className="text-muted-foreground space-y-2">
              <li><b>Company:</b> PT Transindo Data Perkasa</li>
              <li><b>Role:</b> Implementor</li>
              <li><b>Timeline:</b> Apr 2021 - Jun 2021</li>
              <li><b>Type:</b> Healthcare System Implementation & Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>

            <div className="flex flex-wrap gap-2">
              {[ "Angular", "Laravel", "PostgreSQL", "Kendo UI", "REST API"].map((tech) => (
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

export default Cibinong;