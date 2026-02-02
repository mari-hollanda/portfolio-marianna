"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center w-full">
      <div className="container-clean section-padding grid lg:grid-cols-2 gap-16 items-center mx-auto">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6">
          <span className="text-sm tracking-[0.3em] text-muted">
            HELLO, I'M
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05] mt-6">
            Marianna Pedroso
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-(--accent)">
            Fullstack Developer
          </h2>

          <p className="text-muted max-w-xl leading-relaxed text-lg">
            I design and develop modern web applications from front-end to
            back-end, focusing on performance, usability and clean architecture.
            I turn ideas into scalable digital products.
          </p>

          <div className="flex gap-5 pt-4">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>

            <a
              href="/cv-marianna.pdf"
              download
              className="btn-secondary flex items-center gap-2">
              Download CV ↓
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-300/20 blur-3xl rounded-full scale-110" />
            <div
              className="
                relative
                rounded-3xl
                overflow-hidden
                shadow-[0_30px_60px_rgba(0,0,0,0.12)]
                bg-white/60
                backdrop-blur-xl
                border border-white/40
              ">
              <img
                src="/illustration.jpg"
                alt="Marianna illustration"
                className="w-48 sm:w-64 md:w-lg lg:w-lg h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
