import Image from "next/image";
import { ArrowDownLeft, Mail } from "lucide-react";
import type { Profile, UiStrings } from "@/content/profile";
import { BLUR_DATA_URL } from "@/lib/blur";

// Plain Server Component — no "use client". The very first thing a
// visitor sees should not have to wait on JS hydration to become
// visible, so every entrance effect here is a CSS @keyframes animation
// (see tailwind.config.ts: fade-up / fade-scale / fade-in). Locale is
// resolved server-side (via the /(fa) and /(en) route groups) and passed
// in as plain props, so this stays fully static HTML — no client state.

export function Hero({ profile, ui }: { profile: Profile; ui: UiStrings }) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-24 pt-32 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-hairline bg-panel2/70 px-4 py-1.5 motion-safe:animate-fade-up">
            <span className="h-2 w-2 animate-pulse rounded-full bg-turquoise" />
            <span className="text-sm text-muted">{profile.status}</span>
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.28] tracking-tight text-mist sm:text-5xl md:text-6xl">
            {profile.heroHeadline.map((line, i) => (
              <span
                key={line}
                style={{ animationDelay: `${100 + i * 90}ms` }}
                className="block motion-safe:animate-fade-up"
              >
                {i === 1 ? <span className="text-turquoise">{line}</span> : line}
              </span>
            ))}
          </h1>

          <p
            style={{ animationDelay: "320ms" }}
            className="mt-7 max-w-xl text-base leading-8 text-muted motion-safe:animate-fade-up sm:text-lg"
          >
            {profile.heroSubtext}
          </p>

          <div
            style={{ animationDelay: "420ms" }}
            className="mt-10 flex flex-wrap items-center gap-4 motion-safe:animate-fade-up"
          >
            <a href="#about" className="btn-primary">
              {ui.readMore}
              <ArrowDownLeft size={16} />
            </a>
            <a href={`mailto:${profile.contact.email}`} className="btn-ghost">
              <Mail size={16} />
              {ui.directContact}
            </a>
          </div>

          <p
            style={{ animationDelay: "550ms" }}
            className="ltr eyebrow mt-12 text-muted motion-safe:animate-fade-in"
          >
            {profile.handle}@github ~ {profile.terminalLine}
            <span className="ms-1 inline-block h-3.5 w-[7px] translate-y-[2px] animate-pulse bg-turquoise/80 align-middle" />
          </p>
        </div>

        <div
          style={{ animationDelay: "80ms" }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm motion-safe:animate-fade-scale"
        >
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-turquoise/25 via-blue/15 to-purple/25 blur-2xl" />
          <div className="panel relative h-full w-full overflow-hidden rounded-[32px] p-2">
            <div className="relative h-full w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/profile.webp"
                alt={`${ui.profilePhotoAlt} ${profile.name}`}
                fill
                priority
                fetchPriority="high"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
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
        </div>
      </div>
    </section>
  );
}
