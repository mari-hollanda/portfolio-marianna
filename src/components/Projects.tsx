"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/project1.jpg",
    stack: ["Lorem", "Ipsum", "Dolor"],
  },
  {
    title: "Dolor Sit",
    desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/project2.jpg",
    stack: ["Sit", "Amet", "Consectetur"],
  },
  {
    title: "Consectetur Adipiscing",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "/project3.jpg",
    stack: ["Adipiscing", "Elit", "Magna"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding container-clean">
      {/* LABEL */}
      <span className="text-sm tracking-[0.25em] text-(--accent)">
        PROJECTS
      </span>

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-semibold mt-3 mb-4">
        Selected Work
      </h2>

      <span className=" block w-24 h-0.5 bg-linear-to-r from-(--accent) to-transparent mb-16" />

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover="hover"
            className="
              group
              relative
              rounded-3xl
              overflow-hidden
              border border-(--border-soft)
              bg-white
              cursor-pointer
            ">
            {/* IMAGE */}
            <div className="overflow-hidden">
              <motion.img
                src={p.img}
                alt={p.title}
                variants={{
                  hover: { scale: 1.05 },
                }}
                transition={{ duration: 0.6 }}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* GLOW */}
            <div
              className="
              absolute inset-0
              bg-linear-to-tr
              from-pink-500/0
              to-pink-500/0
              group-hover:from-pink-500/10
              group-hover:to-purple-500/10
              transition
              pointer-events-none
            "
            />

            {/* CONTENT */}
            <div className="p-8 space-y-4">
              <motion.h3
                variants={{
                  hover: { x: 6 },
                }}
                className="text-2xl font-semibold">
                {p.title}
              </motion.h3>

              <p className="text-muted">{p.desc}</p>

              {/* STACK */}
              <div className="flex gap-3 flex-wrap text-sm text-muted">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="
                      px-3 py-1
                      border border-(--border-soft)
                      rounded-full
                      bg-(--bg-soft)
                    ">
                    {s}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <motion.div
                variants={{
                  hover: { x: 4 },
                }}
                className="pt-3">
                <div className="flex gap-4 pt-4">
                  {/* LIVE DEMO */}
                  <a
                    href="#"
                    target="_blank"
                    className="
      btn-primary
      flex items-center gap-2
    ">
                    Live Demo
                    {/* external link icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path d="M14 3h7m0 0v7m0-7L10 14" />
                      <path d="M21 14v7H3V3h7" />
                    </svg>
                  </a>

                  {/* GITHUB */}
                  <a
                    href="#"
                    target="_blank"
                    className="
      btn-secondary
      flex items-center gap-2
    ">
                    GitHub
                    {/* github icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.704-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.909-.62.069-.608.069-.608 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.255-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.255-.447-1.285.098-2.678 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.393.202 2.423.1 2.678.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.693-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.417-.012 2.745 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
