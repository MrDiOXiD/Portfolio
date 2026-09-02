import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";
import { profiles, uiStrings } from "@/content/profile";

const profile = profiles.en;
const ui = uiStrings.en;

// Everything below the fold is code-split into its own JS chunk via
// next/dynamic. ssr stays on (the default) so the full HTML is still
// server-rendered for SEO and no-JS visitors — this only changes how the
// *client* fetches the JS needed to hydrate each section.
const Timeline = dynamic(() => import("@/components/sections/Timeline").then((m) => m.Timeline), {
  loading: () => <SectionSkeleton heightClass="h-[520px]" />,
});
const Projects = dynamic(() => import("@/components/sections/Projects").then((m) => m.Projects), {
  loading: () => <SectionSkeleton heightClass="h-[420px]" />,
});
const Gallery = dynamic(() => import("@/components/sections/Gallery").then((m) => m.Gallery), {
  loading: () => <SectionSkeleton heightClass="h-[460px]" />,
});
const NextPlans = dynamic(() => import("@/components/sections/NextPlans").then((m) => m.NextPlans), {
  loading: () => <SectionSkeleton heightClass="h-[380px]" />,
});
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => m.Contact), {
  loading: () => <SectionSkeleton heightClass="h-[320px]" />,
});

export default function Home() {
  return (
    <main>
      <Hero profile={profile} ui={ui} />
      <About profile={profile} />
      <Timeline profile={profile} />
      <Projects profile={profile} />
      <Gallery profile={profile} ui={ui} locale="en" />
      <NextPlans profile={profile} />
      <Contact profile={profile} ui={ui} />
    </main>
  );
}
