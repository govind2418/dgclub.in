import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { timelineSteps } from "@/lib/data";

export function WhyDgClub() {
  return (
    <Container as="section" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading badge="Getting Started" title="From Sign-Up to Withdrawal in Minutes" />
      </Reveal>

      <div className="relative mt-16">
        <div
          aria-hidden
          className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:left-1/2 lg:block"
        />
        <div className="flex flex-col gap-10 lg:gap-16">
          {timelineSteps.map((item, i) => (
            <Reveal
              key={item.step}
              type={i % 2 === 0 ? "slide-right" : "slide-left"}
              className={`relative flex items-start gap-6 lg:w-1/2 ${
                i % 2 === 0 ? "lg:pr-12" : "lg:ml-auto lg:flex-row-reverse lg:pl-12 lg:text-right"
              }`}
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-base font-heading text-sm font-bold text-gold-light shadow-gold-glow">
                {item.step}
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-cream">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/55">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}
