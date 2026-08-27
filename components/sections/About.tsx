import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <span className="eyebrow">{profile.about.eyebrow}</span>
          <h2 className="mt-4 max-w-sm text-3xl font-extrabold leading-snug text-mist sm:text-4xl">
            {profile.about.heading}
          </h2>

          <dl className="mt-10 grid max-w-sm grid-cols-3 gap-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="panel px-3 py-4 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl font-bold text-turquoise">{stat.value}</dd>
                <p className="mt-1 text-[15px] leading-tight text-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.1}>
            <div className="space-y-5">
              {profile.about.paragraphs.map((p) => (
                <p key={p} className="text-base leading-8 text-muted sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-5 sm:grid-cols-2">
              {profile.skillGroups.map((group) => (
                <div key={group.title} className="panel p-5">
                  <h3 className="mb-4 text-sm font-bold text-turquoise/90">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="ltr rounded-full border border-hairline bg-panel2/70 px-3 py-1 text-xs font-medium text-mist"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
