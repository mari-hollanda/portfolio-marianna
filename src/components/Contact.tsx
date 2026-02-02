"use client";

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: any;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="
        group
        flex items-center justify-between
        py-5
        border-b border-(--border-soft)
      ">
      <div className="flex items-center gap-5">
        {/* ICON BOX */}
        <div
          className="
            w-11 h-11
            flex items-center justify-center
            rounded-xl
            border border-(--border-soft)
            bg-white
            shadow-sm
          ">
          <Icon size={18} />
        </div>

        {/* TEXT */}
        <div>
          <p className="text-sm text-muted">{label}</p>
          <p className="font-medium">{value}</p>
        </div>
      </div>

      {/* ARROW */}
      <ArrowUpRight
        size={18}
        className="
          text-muted
          group-hover:text-(--accent)
          transition
        "
      />
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section className="container-clean pt-12 pb-20">
      <div className="max-w-3xl mx-auto">
        {/* LABEL */}
        <span className="text-sm tracking-[0.25em] text-(--accent)">
          CONTACT
        </span>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">
          Let's connect
        </h2>

        {/* SUBTEXT */}
        <p className="text-muted mb-12 max-w-xl">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        {/* CONTACT LIST */}
        <div>
          <ContactItem
            icon={Mail}
            label="Email"
            value="mariannacpedroso@gmail.com"
            href="mailto:mariannacpedroso@gmail.com"
          />

          <ContactItem
            icon={Github}
            label="GitHub"
            value="github.com/mari-hollanda"
            href="https://github.com/mari-hollanda"
          />

          <ContactItem
            icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/marianna-hc-pedroso"
            href="https://www.linkedin.com/in/marianna-hc-pedroso"
          />
        </div>
      </div>
    </section>
  );
}
