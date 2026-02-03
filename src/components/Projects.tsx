"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: t("p1.title"),
      desc: t("p1.desc"),
      img: "/sweetbakeryrun.png",
      stack: ["Python", "PgZero"],
      github: "https://github.com/mari-hollanda/sweet-bakery-run",
    },
    {
      title: t("p2.title"),
      desc: t("p2.desc"),
      img: "/tutorai.png",
      stack: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "FastAPI",
        "OpenAI GPT-3",
        "Axios",
        "LangChain",
      ],
      demo: "https://tutor-ai-bay.vercel.app",
      github: "https://github.com/mari-hollanda/tutor-ai",
    },
    {
      title: t("p3.title"),
      desc: t("p3.desc"),
      img: "/loginpage.png",
      stack: ["Next.js", "React", "Typescript", "TailwindCSS"],
      demo: "https://login-page-eta-beige-16.vercel.app",
      github: "https://github.com/mari-hollanda/login-page",
    },
  ];

  return (
    <section id="projects" className="section-padding container-clean">
      {/* LABEL */}
      <span className="text-sm tracking-[0.25em] text-(--accent)">
        {t("label")}
      </span>

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-semibold mt-3 mb-4">
        {t("title")}
      </h2>

      <span className="block w-24 h-0.5 bg-linear-to-r from-(--accent) to-transparent mb-16" />

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover="hover"
            className="group relative rounded-3xl overflow-hidden border border-(--border-soft) bg-white">
            {/* IMAGE */}
            <div className="overflow-hidden">
              <motion.img
                src={p.img}
                alt={p.title}
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.6 }}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 space-y-4">
              <motion.h3
                variants={{ hover: { x: 6 } }}
                className="text-2xl font-semibold">
                {p.title}
              </motion.h3>

              <p className="text-muted">{p.desc}</p>

              {/* STACK */}
              <div className="flex gap-3 flex-wrap text-sm text-muted">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 border border-(--border-soft) rounded-full bg-(--bg-soft)">
                    {s}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4 pt-4">
                <a
                  href={p.demo}
                  target="_blank"
                  className="btn-primary flex items-center gap-2">
                  {t("live")}
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  className="btn-secondary flex items-center gap-2">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
