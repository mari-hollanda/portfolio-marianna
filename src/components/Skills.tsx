export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-clean max-w-4xl text-center">
        {/* CARD */}
        <div className="mt-12 bg-white/60 backdrop-blur-md border border-soft rounded-2xl p-10 space-y-10">
          <span className="text-sm tracking-widest text-muted">EXPERTISE</span>

          <h2 className="text-4xl md:text-5xl mt-4">Skills & Stack</h2>
          {/* CORE */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl">Core</h3>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Tailwind",
                "Prisma",
                "REST APIs",
              ].map((skill) => (
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
            <h3 className="font-serif text-xl">Tools</h3>

            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "GitHub", "Figma"].map((tool) => (
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
