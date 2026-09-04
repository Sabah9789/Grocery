import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { baskets, egp } from "@/lib/shop-data";
import { useCart } from "./cart-store";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function BasketBuilder() {
  const [activeId, setActiveId] = useState(baskets[1]!.id);
  const active = baskets.find((b) => b.id === activeId)!;
  const { addMany } = useCart();
  const total = active.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="offers" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-accent-foreground/70">Curated for you</p>
          <h2 className="display mt-6 max-w-[20ch] text-[clamp(2.4rem,5.5vw,4.6rem)] text-primary">
            Build your perfect basket.
          </h2>
          <p className="mt-6 max-w-[36ch] text-[15px] leading-loose text-muted-foreground">
            Tell us what you're cooking. We'll help with the rest.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="no-scrollbar -mx-6 mt-12 flex gap-2.5 overflow-x-auto px-6 md:mx-0 md:mt-16 md:flex-wrap md:px-0">
            {baskets.map((basket) => (
              <button
                key={basket.id}
                type="button"
                onClick={() => setActiveId(basket.id)}
                aria-pressed={basket.id === activeId}
                className={cn(
                  "shrink-0 rounded-full border px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-500 ease-editorial",
                  basket.id === activeId
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {basket.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="eyebrow text-muted-foreground">{active.items.length} items</p>
                <h3 className="display mt-4 text-4xl text-primary">{active.label}</h3>
                <p className="mt-4 text-sm leading-loose text-muted-foreground">{active.note}</p>
                <p className="mt-10 font-serif text-3xl text-primary">{egp(total)}</p>
                <button
                  type="button"
                  onClick={() =>
                    addMany(
                      active.items.map((item) => ({
                        id: `${active.id}-${item.name}`,
                        name: item.name,
                        unit: item.unit,
                        price: item.price,
                      })),
                    )
                  }
                  className="mt-7 w-full rounded-full bg-primary px-9 py-4 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:bg-primary-deep md:w-auto"
                >
                  Add Basket to Cart
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-border border-y border-border">
              <AnimatePresence mode="popLayout" initial={false}>
                {active.items.map((item, i) => (
                  <motion.li
                    key={`${active.id}-${item.name}`}
                    layout
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      duration: 0.65,
                      delay: i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-baseline justify-between gap-6 py-5"
                  >
                    <span className="font-serif text-2xl text-primary">{item.name}</span>
                    <span className="flex items-baseline gap-6">
                      <span className="text-xs text-muted-foreground">{item.unit}</span>
                      <span className="text-sm">{egp(item.price)}</span>
                    </span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
