import promoImage from "@/assets/promo.jpg";
import { Reveal } from "./Reveal";

export function PromoSection() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-deep">
      <img
        src={promoImage}
        alt="Fresh green vegetables, herbs and olive oil in dramatic light"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/20" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
        <Reveal>
          <div className="max-w-[20ch]">
            <h2 className="display text-[clamp(2.6rem,6.5vw,5.6rem)] text-cream">
              Good food starts with good ingredients.
            </h2>
            <a
              href="#fresh-picks"
              className="mt-12 inline-block rounded-full bg-cream px-9 py-4 text-xs font-medium uppercase tracking-[0.22em] text-primary transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:bg-sand"
            >
              Shop the Fresh Collection
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
