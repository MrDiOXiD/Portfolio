import Link from "next/link";
import { Languages } from "lucide-react";

// Plain server-rendered link to the other locale's real URL — no client
// JS, no context, no localStorage. Search engines (and users with JS
// disabled) can follow it exactly like any other link.
export function LanguageToggle({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      hrefLang={href === "/" ? "fa" : "en"}
      className="fixed top-4 z-40 flex items-center gap-2 rounded-full border border-hairline bg-panel/80 px-3.5 py-2 text-xs font-bold text-mist backdrop-blur-md transition-colors hover:border-turquoise/70 hover:text-turquoise end-4"
    >
      <Languages size={14} />
      {label}
    </Link>
  );
}
