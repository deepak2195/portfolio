import { useState } from "react";
import { motion } from "framer-motion";

/* ===== FEATURED PROJECTS (HOME) ===== */
const FEATURED_PROJECTS = [

  {
    name: "Miko",
    url: "https://miko.ai/",
    image: "/portfolio/miko.png",
    tech: "Vuestorefront ( vue js, shopify) · E-commerce",
  },
  {
    name: "Nua Women",
    url: "https://nuawoman.com/",
    image: "/portfolio/nua-women.png",
    tech: "Vuestorefront ( vue js, shopify) · E-commerce",
  },
  {
    name: "Pukka Herbs",
    url: "https://www.pukkaherbs.com/uk/en",
    image: "/portfolio/pukka-herbs.png",
    tech: "Vuestorefront ( vue js, shopify) · E-commerce",
  },
  {
    name: "Sassy Dog Fashions",
    tech: "Wordpress · Woocommerce",
    url: "https://sassydogfashions.com/",
    image: "/portfolio/sassy-dog.png",
  },
  {
    name: "CarzSpa",
    tech: "Wordpress · CMS",
    url: "https://www.carzspa.com/",
    image: "/portfolio/carzspa.png",
  },
  {
    name: "OmniRisc",
    tech: "Wordpress · CMS",
    url: "https://www.omnirisc.com/",
    image: "/portfolio/omnirisc.png",
  },
];

/* ===== ALL PROJECTS (PORTFOLIO PAGE) ===== */
const ALL_PROJECTS = [ 
  {
    name: "Lending Tree",
    url: "https://www.lendingtree.com/",
    image: "/portfolio/lendingtree.png",
    tech: "Wordpress + React · E-commerce",
  },
  {
    name: "Miko",
    url: "https://miko.ai/",
    image: "/portfolio/miko.png",
    tech: "Vuestorefront ( vue js, shopify) · E-commerce",
  },
  {
    name: "Nua Women",
    url: "https://nuawoman.com/",
    image: "/portfolio/nua-women.png",
    tech: "Vuestorefront ( vue js, shopify) · E-commerce",
  },
  {
    name: "Pukka Herbs",
    url: "https://www.pukkaherbs.com/uk/en",
    image: "/portfolio/pukka-herbs.png",
    tech: "Vuestorefront ( vue js, shopify) · E-commerce",
  },
  {
    name: "Sassy Dog Fashions",
    url: "https://sassydogfashions.com/",
    image: "/portfolio/sassy-dog.png",
    tech: "Wordpress · Woocommerce",
  },
  {
    name: "CarzSpa",
    url: "https://www.carzspa.com/",
    image: "/portfolio/carzspa.png",
    tech: "Wordpress · CMS",
  },
  {
    name: "OmniRisc",
    url: "https://www.omnirisc.com/",
    image: "/portfolio/omnirisc.png",
    tech: "Wordpress · CMS",
  },
  {
    name: "Absolute Apparel",
    url: "https://absoluteapparel.com.au/",
    image: "/portfolio/absolute-apparel.png",
    tech: "Wordpress · Woocommerce",
  },
  {
    name: "eShave",
    url: "https://eshave.com/",
    image: "/portfolio/eshave.png",
    tech: "Wordpress · Woocommerce",
  },
  {
    name: "TriCounty Paving",
    url: "https://tricountypaving.net/",
    image: "/portfolio/tricounty.png",
    tech: "Wordpress · CMS",
  },
  {
    name: "Praction Network",
    url: "https://www.praction.in/",
    image: "/portfolio/praction.png",
    tech: "Wordpress · CMS",
  },
  {
    name: "Kvsar",
    url: "https://kvaser.com/",
    image: "/portfolio/kvsar.png",
    tech: "Wordpress · Woocommerce",
  },
  {
    name: "Spray Net",
    url: "https://www.spray-net.com/",
    image: "/portfolio/spray-net.png",
    tech: "Wordpress · Woocommerce",
  },
  {
    name: "Ousourcery",
    url: "https://outsourcery.uk/",
    image: "/portfolio/outsourcery.png",
    tech: "Wordpress · Woocommerce",
  },
  {
    name: "Promotions Warehouse",
    url: "https://promotionswarehouse.com.au/",
    image: "/portfolio/promotions-warehouse.png",
    tech: "Wordpress · Woocommerce",
  },
  {
    name: "Hampers With Bite",
    url: "https://www.hamperswithbite.com.au/",
    image: "/portfolio/hampers-with-bite.png",
    tech: "Wordpress · Woocommerce",
  },
  {
    name: "Enviro Master",
    url: "https://enviro-master.com/",
    image: "/portfolio/enviro-master.png",
    tech: "Wordpress · CMS",
  },
  {
    name: "Naike Skine",
    url: "https://naikeskine.com/",
    image: "/portfolio/naike-skine.png",
    tech: "Wordpress · Woocommerce",
  },
  {
    name: "All i see is ART",
    url: "https://www.alliseeisart.com/",
    image: "/portfolio/aii-i-see-art.png",
    tech: "Wordpress · Woocommerce",
  },
];

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 grid grid-cols-1 lg:grid-cols-[320px_1fr]">

      {/* ================= LEFT SIDEBAR (DESKTOP) ================= */}
      <aside className="hidden lg:flex bg-slate-900 border-r border-white/10 p-6 flex-col items-center">
        {/* <img
          src="https://via.placeholder.com/160"
          alt="Profile"
          className="rounded-2xl mb-4"
        /> */}

        <h1 className="text-xl font-bold">Deepak Gupta</h1>
        <p className="text-sm text-slate-400 mb-6">
          Senior Software Engineer
        </p>

        <div className="w-full space-y-4 text-sm">
          <div className="bg-white/5 rounded-xl p-3">
            📧 deepakgupta2195@gmail.com
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            📞 7405743394
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            📍 India
          </div>
        </div>
      </aside>

      {/* ================= RIGHT CONTENT ================= */}
      <main className="p-6 sm:p-8 lg:p-10">

        {/* ===== TOP MENU ===== */}
        <div className="flex gap-6 overflow-x-auto border-b border-white/10 pb-4 mb-10 text-sm">
          {["home", "portfolio", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`whitespace-nowrap capitalize pb-2 transition ${
                active === item
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ================= HOME ================= */}
        {active === "home" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-14"
          >
            {/* INTRO */}
            <div className="max-w-4xl space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Digital Identity
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I’m <strong>Deepak Gupta</strong>, a Senior Software Engineer with
                7+ years of experience building scalable, high-performance web
                applications using React, Vue, and modern frontend technologies.
                I’m open to part-time & freelance projects.
              </p>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                My expertise includes <strong>React JS, Vue JS, JavaScript
                (ES6+), Tailwind CSS, and Headless CMS</strong>. I’ve worked on
                enterprise platforms, SaaS products, and large-scale e-commerce
                websites.
              </p>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                I collaborate closely with designers, backend teams, and product
                stakeholders to translate complex requirements into intuitive,
                user-friendly interfaces with a strong focus on performance and
                maintainability.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                ["7+", "Years Experience"],
                ["30+", "Projects Delivered"],
                ["10+", "Happy Clients"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold">{num}</div>
                  <div className="text-slate-400 text-sm mt-2">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* FEATURED WORK */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Featured Work
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURED_PROJECTS.map((project) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-gradient-to-br from-slate-800 to-slate-900
                               rounded-2xl overflow-hidden border border-white/10
                               hover:-translate-y-1 transition"
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-40 object-cover
                                   group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0
                                      group-hover:opacity-100 transition
                                      flex items-center justify-center">
                        <span className="text-indigo-400 font-semibold">
                          Visit Website →
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-slate-400 mt-1">
                        {project.tech}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* ================= PORTFOLIO ================= */}
        {active === "portfolio" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {ALL_PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-br from-slate-800 to-slate-900
                           rounded-2xl overflow-hidden border border-white/10
                           hover:-translate-y-1 transition"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-44 object-cover
                               group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0
                                  group-hover:opacity-100 transition
                                  flex items-center justify-center">
                    <span className="text-indigo-400 font-semibold">
                      Visit Website →
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    {project.tech}
                  </p>
                </div>
              </a>
            ))}
          </motion.section>
        )}

        {/* ================= CONTACT ================= */}
        {active === "contact" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-center max-w-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">
              Let’s Work Together
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Available for freelance & part-time opportunities.
            </p>
            <p className="mb-2">📧 deepakgupta2195@gmail.com</p>
            <p className="mb-6">📞 7405743394</p>
            
          </motion.section>
        )}
      </main>
    </div>
  );
}
