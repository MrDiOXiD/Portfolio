import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Timeline() {
  return (
    <section id="timeline" className="relative px-6 py-28 md:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal>
          <span className="eyebrow">{profile.timelineEyebrow}</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-snug text-mist sm:text-4xl">
            {profile.timelineHeading}
          </h2>
        </Reveal>

        <ol className="relative mt-16 space-y-12 border-r-2 border-hairline/60 pr-8">
          {profile.timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.06} className="relative">
              <span className="absolute -right-[41px] top-1 h-3 w-3 rounded-full bg-turquoise shadow-[0_0_14px_2px_rgba(67,234,211,0.55)]" />
              <span className="ltr eyebrow">{item.year}</span>
              <h3 className="mt-2 text-xl font-bold text-mist">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-muted leading-7">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
