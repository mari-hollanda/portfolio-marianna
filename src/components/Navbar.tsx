"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "PT">("EN");

  const toggleLang = () => {
    setLang((prev) => (prev === "EN" ? "PT" : "EN"));
  };

  return (
    <header className="sticky top-6 z-50 flex justify-center">
      <nav
        className="
          w-[95%] max-w-6xl
          px-6 py-3
          rounded-full
          flex items-center justify-between
          border shadow-sm
          backdrop-blur-md
        "
        style={{
          background: "rgba(255,255,255,0.6)",
          borderColor: "var(--border-soft)",
        }}>
        {/* LOGO + NAME */}
        <Link href="#top" className="flex items-center gap-3 group">
          <img
            src="/favicon.png"
            alt="Logo"
            className="
              w-7 h-7
              rounded-full
              object-cover
              transition-transform
              group-hover:scale-110
            "
          />

          <span className="font-serif text-lg tracking-tight">
            Marianna Pedroso
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-muted hover:text-black transition-colors">
                {link.name}
              </Link>

              <span
                className="
                  absolute -bottom-1 left-0
                  h-0.5 w-0
                  transition-all duration-300
                  group-hover:w-full
                "
                style={{ background: "var(--accent)" }}
              />
            </li>
          ))}
        </ul>

        {/* LANGUAGE TOGGLE */}
        <button
          onClick={toggleLang}
          className="
            hidden md:block
            px-4 py-1.5
            rounded-full
            border text-sm
            transition-all
            hover:scale-105
            active:scale-95
          "
          style={{ borderColor: "var(--text-main)" }}>
          {lang === "EN" ? "PT 🇧🇷" : "EN 🇺🇸"}
        </button>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            absolute top-20
            w-[95%] max-w-6xl
            rounded-2xl
            p-6
            flex flex-col gap-6
            md:hidden
            shadow-lg
            backdrop-blur-md
          "
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid var(--border-soft)",
          }}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg">
              {link.name}
            </Link>
          ))}

          <button onClick={toggleLang} className="btn-primary w-full">
            {lang === "EN" ? "Português 🇧🇷" : "English 🇺🇸"}
          </button>
        </div>
      )}
    </header>
  );
}
