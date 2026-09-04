import { Heart } from "lucide-react";
import { egp, products } from "@/lib/shop-data";
import { useCart } from "./cart-store";
import { Reveal } from "./Reveal";

export function FreshPicks() {
  const { add } = useCart();

  return (
    <section id="fresh-picks" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-3 pb-12 md:flex-row md:items-end md:justify-between md:pb-16">
            <h2 className="display text-[clamp(2.4rem,5vw,4.2rem)] text-primary">Fresh Picks</h2>
            <p className="text-sm text-muted-foreground">Good things, picked today.</p>
          </div>
        </Reveal>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-auto md:max-w-[1400px] md:gap-5 md:px-10">
        {products.map((product, i) => (
          <Reveal
            key={product.id}
            delay={(i % 4) * 0.06}
            className="w-[62vw] shrink-0 snap-start sm:w-[42vw] md:w-auto md:flex-1"
          >
            <article className="group flex h-full flex-col rounded-2xl bg-cream p-4 transition-all duration-700 ease-editorial hover:-translate-y-1.5 hover:shadow-lift">
              <div className="relative overflow-hidden rounded-xl bg-sand/60">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                />
                <button
                  type="button"
                  aria-label={`Save ${product.name}`}
                  className="absolute right-3 top-3 rounded-full bg-cream/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:text-primary"
                >
                  <Heart className="size-3.5" strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex flex-1 flex-col px-1 pt-5">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{product.unit}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-serif text-xl text-primary">{egp(product.price)}</span>
                  <button
                    type="button"
                    onClick={() =>
                      add({
                        id: product.id,
                        name: product.name,
                        unit: product.unit,
                        price: product.price,
                        image: product.image,
                      })
                    }
                    className="rounded-full border border-border px-5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-primary transition-all duration-500 ease-editorial hover:border-primary hover:bg-primary hover:text-primary-foreground md:opacity-0 md:group-hover:opacity-100"
                  >
                    Add
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
