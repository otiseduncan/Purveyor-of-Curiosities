import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section id="process" className="relative z-10 bg-espresso/70 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionLabel>How It Works</SectionLabel>

            <h2 className="font-serif text-4xl font-black text-ivory md:text-5xl">
              Found, Sorted, Documented, Claimed
            </h2>

            <p className="mt-5 text-sand">
              The workflow is part of the trust system: no mystery listings, no
              vague condition claims, and no pretending every item is perfect.
            </p>

            <div className="mt-7 rounded-[2rem] border border-bronze/60 bg-charcoal/70 p-6">
              <div className="text-3xl text-gold">▣</div>

              <h3 className="mt-4 text-lg font-bold text-ivory">
                Risk-aware product rules
              </h3>

              <p className="mt-2 text-sm leading-6 text-sand">
                Personal-care items must be sealed, labeled, and not expired.
                Auto parts stay non-safety-critical at launch. Untested
                electronics are marked clearly.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-bronze/55 bg-charcoal/75 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-sm font-black text-charcoal">
                    {step.icon}
                  </div>

                  <span className="text-sm font-black uppercase tracking-[0.2em] text-sand">
                    Process
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-ivory">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-sand">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}