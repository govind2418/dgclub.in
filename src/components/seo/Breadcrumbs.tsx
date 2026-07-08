import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="section-container pt-32 sm:pt-36">
      <JsonLd data={breadcrumbSchema(full)} />
      <ol className="flex flex-wrap items-center gap-2 text-sm text-cream/50">
        {full.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && <span className="text-cream/25">/</span>}
            {index === full.length - 1 ? (
              <span className="text-gold-light">{item.name}</span>
            ) : (
              <Link href={item.path} className="transition-colors hover:text-gold-light">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
