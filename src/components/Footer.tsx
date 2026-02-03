"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-24 border-t border-(--border-soft)">
      <div className="container-clean py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* COPYRIGHT */}
          <p className="text-sm text-muted text-center md:text-left">
            © {new Date().getFullYear()} Marianna Pedroso. {t("rights")}
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:mariannacpedroso@gmail.com"
              className="footer-icon"
              aria-label="Email">
              <Mail size={18} />
            </a>

            <a
              href="https://github.com/mari-hollanda"
              target="_blank"
              className="footer-icon"
              aria-label="GitHub">
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/marianna-hc-pedroso"
              target="_blank"
              className="footer-icon"
              aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
