import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Choose", copy: "Browse fresh groceries and everyday essentials." },
  { n: "02", title: "Pack", copy: "We carefully prepare your order." },
  { n: "03", title: "Enjoy", copy: "Your groceries arrive at your door." },
];

export function HowItWorks() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.12}>
              <div className="border-t border-border pt-8">
                <span className="display block text-[clamp(4rem,9vw,7.5rem)] text-beige">
                  {step.n}
                </span>
                <h3 className="display mt-6 text-3xl text-primary">{step.title}</h3>
                <p className="mt-4 max-w-[28ch] text-sm leading-loose text-muted-foreground">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
