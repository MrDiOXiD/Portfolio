"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownLeft, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-24 pt-32 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
        {/* متن اصلی */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-hairline bg-panel2/70 px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-turquoise" />
            <span className="text-sm text-muted">{profile.status}</span>
          </motion.div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.28] tracking-tight text-mist sm:text-5xl md:text-6xl">
            {profile.heroHeadline.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                {i === 1 ? <span className="text-turquoise">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg"
          >
            {profile.heroSubtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#about" className="btn-primary">
              بیشتر درباره‌ام بخوان
              <ArrowDownLeft size={16} />
            </a>
            <a href="tel:+989121318937" className="btn-ghost">
              <Mail size={16} />
              تماس مستقیم
            </a>
          </motion.div>

          {/* خط وضعیت، یادگاری از هویت ترمینالی نسخه‌ی اول، این‌بار به‌عنوان یک جزئیات کوچک */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="ltr eyebrow mt-12 text-muted"
          >
            {profile.handle}@github ~ {profile.terminalLine}
            <span className="ms-1 inline-block h-3.5 w-[7px] translate-y-[2px] animate-pulse bg-turquoise/80 align-middle" />
          </motion.p>
        </div>

        {/* پرتره */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-turquoise/25 via-blue/15 to-purple/25 blur-2xl" />
          <div className="panel relative h-full w-full overflow-hidden rounded-[32px] p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/profile.png"
                alt={`عکس پروفایل ${profile.name}`}
                fill
                priority
                sizes="(min-width: 768px) 380px, 80vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bed/70 via-transparent to-transparent" />
            </div>
          </div>
          <div className="panel absolute -bottom-6 start-6 flex items-center gap-3 px-4 py-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-turquoise/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-turquoise" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-mist">{profile.name}</p>
              <p className="text-xs text-muted">{profile.role} · {profile.affiliation}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
