import { Facebook, Instagram, Twitter } from "lucide-react";
import { BRAND } from "@/lib/shop-data";

const columns = [
  { title: "Shop", links: ["Shop", "Categories", "Fresh Picks"] },
  { title: "Company", links: ["About", "Contact", "Delivery", "FAQ"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream pb-28 pt-20 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl tracking-[0.3em] text-primary">{BRAND}</p>
            <p className="display mt-8 text-4xl text-primary">
              Fresh groceries.
              <br />
              Better everyday.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} className="md:col-span-2" aria-label={col.title}>
              <p className="eyebrow text-muted-foreground">{col.title}</p>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-3">
            <p className="eyebrow text-muted-foreground">Newsletter</p>
            <p className="mt-6 text-sm leading-loose text-muted-foreground">
              Fresh ideas, seasonal picks, and offers.
            </p>
            <form
              className="mt-6 flex items-center gap-2 border-b border-border pb-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
              />
              <button
                type="submit"
                className="eyebrow shrink-0 text-primary transition-opacity hover:opacity-60"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-9 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social profile"
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {BRAND}. Badr City, Egypt.</p>
          <p>Delivering daily, 9am — 11pm.</p>
        </div>
      </div>
    </footer>
  );
}
