"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-(--bg-soft) py-24">
      <div className="container-clean max-w-5xl">
        {/* LABEL */}
        <span className="text-xs tracking-[0.3em] text-(--accent)">ABOUT</span>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6">
          A bit about me
        </h2>
        <span className=" block w-24 h-0.5 bg-linear-to-r from-(--accent) to-transparent mb-16" />
        {/* GRID */}
        <div className="grid md:grid-cols-[140px_1fr] gap-12 items-start">
          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-xl
              overflow-hidden
              border border-(--border-soft)
              bg-white
            ">
            <img
              src="/marianna.png"
              alt="Marianna"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-7 text-muted leading-relaxed text-lg">
            <p>
              I'm a{" "}
              <span className="text-(--text-main) font-medium">
                fullstack developer
              </span>{" "}
              who enjoys building products end-to-end — from intuitive
              interfaces to solid back-end architecture.
            </p>

            <p>
              My focus is creating applications that are not only functional,
              but pleasant to use. Performance, accessibility and clean code are
              things I genuinely care about.
            </p>

            <p>
              I love turning ideas into real products and solving problems that
              impact people’s daily lives. I'm always refining my workflow and
              learning better ways to build.
            </p>

            <p>
              When I'm not coding, I'm usually studying new tech or polishing my
              projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
