"use client";

import { useEffect, useState } from "react";
import type { UiStrings } from "@/content/profile";

const sectionIds = ["hero", "about", "timeline", "work", "gallery", "next", "contact"] as const;

export function SectionNav({ ui }: { ui: UiStrings }) {
  const sections = sectionIds.map((id) => ({ id, label: ui.sectionLabels[id] }));
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={ui.navLabel}
      className="fixed inset-y-0 left-4 z-40 hidden flex-col items-center justify-center gap-4 md:flex lg:left-6"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          aria-current={active === section.id ? "true" : undefined}
          className="group relative flex items-center"
        >
          <span
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              active === section.id
                ? "scale-125 bg-turquoise shadow-[0_0_10px_2px_rgba(67,234,211,0.6)]"
                : "bg-hairline group-hover:bg-muted"
            }`}
          />
          <span className="pointer-events-none absolute left-full ms-3 whitespace-nowrap rounded-md bg-panel px-2.5 py-1 text-xs text-mist opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            {section.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
