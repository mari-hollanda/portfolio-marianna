"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="container-clean section-padding bg-white rounded-3xl shadow-lg">
      <div className="max-w-5xl mx-auto">
        {/* SMALL LABEL */}
        <span className="text-sm tracking-[0.25em] text-(--accent)">ABOUT</span>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold mt-3 mb-12 relative">
          A bit about me
          <span className="block w-16 h-0.5 bg-(--accent) mt-4" />
        </h2>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-[160px_1fr] gap-10 items-start">
          {/* PHOTO / ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-2xl
              overflow-hidden
              border border-(--border-soft)
              shadow-sm
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
            className="space-y-6 text-muted leading-relaxed">
            <p>
              I'm a{" "}
              <span className="text-black font-medium">
                fullstack developer
              </span>{" "}
              who enjoys building products end-to-end — from intuitive
              interfaces to solid back-end architecture.
            </p>

            <p>
              My focus is creating applications that are not only functional,
              but pleasant to use. Performance, accessibility and clean code are
              things I genuinely care about, not just buzzwords.
            </p>

            <p>
              I like turning ideas into real products and solving problems that
              impact people’s daily lives. I’m always exploring new tools,
              improving my workflow and learning better ways to build.
            </p>

            <p>
              When I'm not coding, I'm usually studying new tech or refining my
              projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
