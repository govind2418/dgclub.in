import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbName,
  crumbPath,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbName: string;
  crumbPath: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-gold/10 bg-[radial-gradient(circle_at_50%_0%,rgba(107,16,25,0.35),transparent_55%)]">
      <Breadcrumbs items={[{ name: crumbName, path: crumbPath }]} />
      <Container className="pb-16 pt-8 sm:pb-20">
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-2xl font-heading text-4xl font-bold leading-tight text-cream sm:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-4 max-w-xl text-base text-cream/60 sm:text-lg">{description}</p>}
      </Container>
    </div>
  );
}
