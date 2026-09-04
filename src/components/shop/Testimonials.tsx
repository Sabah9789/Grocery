import { motion } from "motion/react";
import { testimonials } from "@/lib/shop-data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-accent-foreground/70">In their words</p>
        </Reveal>
      </div>

      <div className="mt-12 md:mt-16">
        <motion.ul
          className="flex w-max gap-6 md:gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((item, i) => (
            <li
              key={`${item.name}-${i}`}
              className="w-[78vw] max-w-[520px] border-t border-border pt-8"
            >
              <blockquote className="display text-[clamp(1.7rem,3vw,2.6rem)] text-primary">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <p className="eyebrow mt-8 text-muted-foreground">
                {item.name} · {item.place}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
