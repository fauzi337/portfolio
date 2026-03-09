import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const gallery = [
  "/images/projects/simkesmas/login.png",
  "/images/projects/simkesmas/daftarakun.png",
  "/images/projects/simkesmas/verifikasinik.png",
  "/images/projects/simkesmas/verifikasidatadiri.png",
  "/images/projects/simkesmas/verified.png",
  "/images/projects/simkesmas/akunberhasil.png",
  "/images/projects/simkesmas/persetujuanakun.png",
  "/images/projects/simkesmas/daftarakunreq.png",
  "/images/projects/simkesmas/accakun.png",
  "/images/projects/simkesmas/menupasien1.png",
  "/images/projects/simkesmas/menupasien2.png",
  "/images/projects/simkesmas/rsvberhasil.png",
  "/images/projects/simkesmas/kios.png",
  "/images/projects/simkesmas/cin.png",
  "/images/projects/simkesmas/verifdiri.png",
  "/images/projects/simkesmas/cinberhasil.png",
  "/images/projects/simkesmas/daftarregistrasi.png",
  "/images/projects/simkesmas/code1.png",
  "/images/projects/simkesmas/route.png",
  "/images/projects/simkesmas/code3.png",
  "/images/projects/simkesmas/db1.png",
  "/images/projects/simkesmas/db2.png",
  "/images/projects/simkesmas/db3.png",
  "/images/projects/simkesmas/db4.png",
];

const activities = [
  {
    title: "System Design",
    desc: "Designed the architecture of the public health management system including database structures for patients, medical records, healthcare services, and reporting workflows."
  },
  {
    title: "Backend Development",
    desc: "Developed backend services using Laravel to manage patient records, healthcare service data, and reporting processes through RESTful APIs."
  },
  {
    title: "Frontend Development",
    desc: "Built responsive user interfaces using React and Tailwind CSS to allow health workers to access patient information, input service data, and manage reports efficiently."
  },
  {
    title: "Health Data Management",
    desc: "Implemented modules for managing patient registration, medical visit history, and healthcare service tracking to support community health operations."
  },
  {
    title: "Testing and Optimization",
    desc: "Performed testing, debugging, and performance optimization to ensure data accuracy, system reliability, and smooth user experience."
  },
];

const SimKesMas = () => {
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
            Public Health <span className="text-gradient">Management System</span>
          </h1>

          <p className="text-muted-foreground mb-6">
           A web-based health management information system that digitizes community healthcare administration. It enables 
           health workers to manage patient data, medical service records, and reporting through a centralized platform, helping 
           improve operational efficiency and healthcare service delivery.
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
              <li><b>Timeline:</b> Oct 2025 - Des 2025</li>
              <li><b>Type:</b> Web Application</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>

            <div className="flex flex-wrap gap-2">
              {["React", "Laravel", "PostgreSQL", "Tailwind CSS", "REST API", "Vite"].map((tech) => (
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

export default SimKesMas;