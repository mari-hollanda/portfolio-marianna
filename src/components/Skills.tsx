"use client";

import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("Skills");

  const coreSkills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind",
    "Prisma",
    "REST APIs",
  ];

  const tools = ["Git", "GitHub", "Figma"];

  return (
    <section id="skills" className="section-padding">
      <div className="container-clean max-w-4xl text-center">
        <div className="mt-12 bg-white/60 backdrop-blur-md border border-soft rounded-2xl p-10 space-y-10">
          {/* LABEL */}
          <span className="text-sm tracking-widest text-muted">
            {t("label")}
          </span>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl mt-4">{t("title")}</h2>

          {/* CORE */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl">{t("core")}</h3>

            <div className="flex flex-wrap justify-center gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-soft rounded-full text-sm text-muted hover:text-(--accent) hover:border-(--accent) transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl">{t("tools")}</h3>

            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 border border-soft rounded-full text-sm text-muted hover:text-(--accent) hover:border-(--accent) transition">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
