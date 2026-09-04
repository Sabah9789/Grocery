import { Reveal } from "./Reveal";

const facts = [
  { label: "Coverage", value: "Badr City" },
  { label: "Delivery", value: "Under 90 minutes" },
  { label: "Packing", value: "Freshly packed" },
  { label: "Handover", value: "To your doorstep" },
];

export function DeliverySection() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-14 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow text-accent-foreground/70">Hyper-local</p>
            <h2 className="display mt-6 text-[clamp(2.3rem,5vw,4.2rem)] text-primary">
              Badr, we're bringing the market closer.
            </h2>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow text-muted-foreground">{fact.label}</dt>
                  <dd className="mt-2 font-serif text-2xl text-primary">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              className="mt-12 rounded-full border border-primary px-9 py-4 text-xs font-medium uppercase tracking-[0.22em] text-primary transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              Check Your Area
            </button>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary">
              <svg
                viewBox="0 0 400 400"
                aria-hidden
                className="absolute inset-0 size-full text-primary/12"
              >
                <g stroke="currentColor" strokeWidth="0.75" fill="none">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />
                  ))}
                  {Array.from({ length: 11 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} />
                  ))}
                  <path d="M0 250 C 90 210, 150 300, 260 240 S 360 190, 400 210" strokeWidth="1.5" />
                  <path d="M120 0 C 140 110, 90 190, 150 400" strokeWidth="1.5" />
                </g>
                <g fill="currentColor" opacity="0.55">
                  <circle cx="90" cy="140" r="3" />
                  <circle cx="300" cy="110" r="3" />
                  <circle cx="250" cy="310" r="3" />
                  <circle cx="140" cy="290" r="3" />
                  <circle cx="330" cy="250" r="3" />
                </g>
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 -m-16 animate-ping rounded-full border border-primary/25" />
                <span className="absolute inset-0 -m-8 rounded-full border border-primary/25" />
                <span className="relative flex size-3 items-center justify-center rounded-full bg-primary" />
              </div>

              <p className="eyebrow absolute bottom-8 left-8 text-primary">Badr City · Live</p>
              <p className="eyebrow absolute right-8 top-8 text-muted-foreground">
                Next: El Shorouk · Madinaty · Obour
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
