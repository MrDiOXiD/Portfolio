import type { Profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";

export function NextPlans({ profile }: { profile: Profile }) {
  return (
    <section id="next" className="relative px-6 py-28 md:px-16">
      <div className="mx-auto w-full max-w-4xl">
        <Reveal>
          <span className="eyebrow">{profile.nextEyebrow}</span>
          <h2 className="mt-4 max-w-lg text-3xl font-extrabold leading-snug text-mist sm:text-4xl">
            {profile.nextHeading}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {profile.nextPlans.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 0.08}>
              <div className="panel flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-mist">{plan.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-muted">{plan.description}</p>
                </div>
                <span className="shrink-0 self-start rounded-full border border-turquoise/40 bg-turquoise/10 px-4 py-1.5 text-xs font-bold text-turquoise sm:self-center">
                  {plan.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
