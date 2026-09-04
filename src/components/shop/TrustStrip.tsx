import { Leaf, PackageCheck, Sprout, Truck } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Sprout, label: "Fresh Every Day" },
  { icon: Truck, label: "Fast Local Delivery" },
  { icon: Leaf, label: "Carefully Selected" },
  { icon: PackageCheck, label: "Simple Checkout" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 md:px-10">
        {items.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 0.08}>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Icon className="size-4 text-primary" strokeWidth={1.5} />
              <span className="eyebrow">{label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
