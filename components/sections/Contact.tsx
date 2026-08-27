"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ArrowUpLeft } from "lucide-react";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — the mailto link below still works
    }
  }

  return (
    <section id="contact" className="relative px-6 pb-16 pt-28 md:px-16">
      <div className="mx-auto w-full max-w-4xl text-center">
        <Reveal>
          <span className="eyebrow">{profile.contactEyebrow}</span>
          <h2 className="mx-auto mt-4 max-w-xl text-3xl font-extrabold leading-snug text-mist sm:text-5xl">
            {profile.contactHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-muted">
            {profile.contactSubtext}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${profile.contact.email}`} className="btn-primary">
            نوشتن ایمیل
            <ArrowUpLeft size={16} />
          </a>
          <button type="button" onClick={copyEmail} className="btn-ghost">
            {copied ? <Check size={16} className="text-turquoise" /> : <Copy size={16} />}
            <span className="ltr">{profile.contact.email}</span>
          </button>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-turquoise hover:underline"
            >
              {social.label}
            </a>
          ))}
        </Reveal>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 text-center text-xs text-muted/70"
      >
        © {new Date().getFullYear()} {profile.name} — ساخته‌شده با Next.js
      </motion.p>
    </section>
  );
}
