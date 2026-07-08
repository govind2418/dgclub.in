import { Container } from "@/components/ui/Container";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalContent({ intro, sections, updated }: { intro?: string; sections: LegalSection[]; updated?: string }) {
  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        {updated && <p className="mb-8 text-xs uppercase tracking-widest text-cream/60">Last updated: {updated}</p>}
        {intro && <p className="mb-10 text-base leading-relaxed text-cream/65">{intro}</p>}
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-heading text-xl font-semibold text-cream">{section.heading}</h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-cream/60">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 flex flex-col gap-2">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-cream/60">
                      <span className="text-gold-light">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
