"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="bg-(--bg-soft) py-24">
      <div className="container-clean max-w-5xl">
        {/* LABEL */}
        <span className="text-xs tracking-[0.3em] text-(--accent)">
          {t("label")}
        </span>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6">
          {t("title")}
        </h2>

        <span className="block w-24 h-0.5 bg-linear-to-r from-(--accent) to-transparent mb-16" />

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
              alt={t("imageAlt")}
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
              {t.rich("p1", {
                highlight: (chunks) => (
                  <span className="text-(--text-main) font-medium">
                    {chunks}
                  </span>
                ),
              })}
            </p>

            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <p>{t("p4")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
