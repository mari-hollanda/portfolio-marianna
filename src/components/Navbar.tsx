"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-6 z-50 flex justify-center">
      <nav
        className="
          w-[95%] max-w-6xl
          px-6 py-3
          rounded-full
          flex items-center justify-between
          
          border
          shadow-sm
          
          backdrop-blur-md
        "
        style={{
          background: "rgba(255,255,255,0.6)",
          borderColor: "var(--border-soft)",
        }}>
        {/* LOGO */}
        <div className="font-semibold text-lg">Marianna Pedroso</div>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="transition-colors"
                  style={{
                    color: active ? "var(--text-main)" : "var(--text-muted)",
                  }}>
                  {link.name}
                </Link>
                <span
                  className="
                    absolute -bottom-1 left-0
                    h-0.5 w-0
                    bg-black
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-black" />
                )}
              </li>
            );
          })}
        </ul>

        {/* DESKTOP BUTTON */}
        <button
          className="
            hidden md:block
            px-4 py-1.5
            rounded-full
            border
            text-sm
            transition-all
            hover:scale-105
            active:scale-95
          "
          style={{
            borderColor: "var(--text-main)",
          }}>
          Get in touch
        </button>

        {/* MOBILE BUTTON */}
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

          <button className="btn-primary w-full">Get in touch</button>
        </div>
      )}
    </header>
  );
}
