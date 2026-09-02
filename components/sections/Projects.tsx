import type { Profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Projects({ profile }: { profile: Profile }) {
  return (
    <section id="work" className="relative px-6 py-28 md:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <span className="eyebrow">{profile.workEyebrow}</span>
          <h2 className="mt-4 max-w-lg text-3xl font-extrabold leading-snug text-mist sm:text-4xl">
            {profile.workHeading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="panel group h-full p-6 transition-colors duration-300 hover:border-turquoise/60">
                <h3 className="text-lg font-bold text-mist">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="ltr rounded-full border border-hairline bg-panel2/70 px-3 py-1 text-[11px] font-medium text-turquoise/90"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
