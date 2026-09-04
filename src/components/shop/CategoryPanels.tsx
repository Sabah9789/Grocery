import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/shop-data";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function CategoryPanels() {
  return (
    <section id="categories" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 pb-12 md:flex-row md:items-end md:justify-between md:pb-16">
            <div>
              <p className="eyebrow text-accent-foreground/70">The Aisles</p>
              <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.2rem)] text-primary">
                Everything, in its place.
              </h2>
            </div>
            <p className="max-w-[30ch] text-sm leading-loose text-muted-foreground">
              Eight considered departments. No endless shelves, no filler brands.
            </p>
          </div>
        </Reveal>

        {/* Mobile: swipeable editorial panels */}
        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:hidden">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#fresh-picks"
              className="group relative h-[420px] w-[78vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-sand"
            >
              <CategoryMedia image={cat.image} name={cat.name} />
              <CategoryLabel name={cat.name} line={cat.line} />
            </a>
          ))}
        </div>

        {/* Desktop: asymmetric editorial mosaic */}
        <div className="hidden gap-4 md:grid md:grid-cols-6">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.name}
              delay={(i % 3) * 0.07}
              className={cn(
                cat.span === "wide" ? "md:col-span-3" : "md:col-span-2",
                i === 0 && "md:col-span-4",
                i === 1 && "md:col-span-2",
              )}
            >
              <a
                href="#fresh-picks"
                className={cn(
                  "group relative block h-full overflow-hidden rounded-2xl bg-sand",
                  i === 0 ? "h-[520px]" : "h-[400px]",
                )}
              >
                <CategoryMedia image={cat.image} name={cat.name} />
                <CategoryLabel name={cat.name} line={cat.line} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryMedia({ image, name }: { image: string; name: string }) {
  return (
    <>
      <img
        src={image}
        alt={name}
        loading="lazy"
        width={900}
        height={1200}
        className="size-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
    </>
  );
}

function CategoryLabel({ name, line }: { name: string; line: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7 transition-transform duration-700 ease-editorial group-hover:-translate-y-1.5">
      <div>
        <p className="eyebrow text-cream/70">{name}</p>
        <p className="display mt-2 text-3xl text-cream">{line}</p>
      </div>
      <span className="translate-x-3 rounded-full border border-cream/40 p-2.5 text-cream opacity-0 transition-all duration-700 ease-editorial group-hover:translate-x-0 group-hover:opacity-100">
        <ArrowUpRight className="size-4" strokeWidth={1.5} />
      </span>
    </div>
  );
}
