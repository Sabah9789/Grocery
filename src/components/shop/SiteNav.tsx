import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { BRAND } from "@/lib/shop-data";
import { useCart } from "./cart-store";
import { cn } from "@/lib/utils";
import logo from "../../assets/ChatGPT Image Sep 4, 2026, 09_30_07 PM.png";
import video from "../../assets/Untitled - September 04, 2026 at 20.46.49.mp4";


const links = [
  { label: "Shop", href: "#fresh-picks" },
  { label: "Categories", href: "#categories" },
  { label: "Fresh Picks", href: "#fresh-picks" },
  { label: "Offers", href: "#offers" },
  { label: "About", href: "#story" },
];

export function SiteNav() {
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tone = scrolled ? "text-foreground" : "text-cream";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-editorial",
        scrolled ? "bg-cream/85 backdrop-blur-xl border-b border-border/70" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-700 ease-editorial md:px-10",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <a
          href="#top"
          className={cn(
            "flex items-center gap-3 font-serif text-2xl tracking-[0.3em] transition-colors duration-500",
            tone,
          )}
        >
         <img src={logo} alt="" className="w-9 h-15" />

          <span>{BRAND}</span>
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  "eyebrow relative py-1 transition-colors duration-500 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100",
                  tone,
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={cn("flex items-center gap-1 transition-colors duration-500", tone)}>
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2.5 transition-colors hover:bg-current/10"
          >
            <Search className="size-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden rounded-full p-2.5 transition-colors hover:bg-current/10 sm:block"
          >
            <User className="size-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={open}
            aria-label={`Basket, ${count} items`}
            className="relative rounded-full p-2.5 transition-colors hover:bg-current/10"
          >
            <ShoppingBag className="size-[18px]" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-4.5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="rounded-full p-2.5 transition-colors hover:bg-current/10 lg:hidden"
          >
            <Menu className="size-[18px]" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-cream px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl tracking-[0.3em] text-primary">{BRAND}</span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-2.5 text-foreground"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>
          <ul className="mt-14 space-y-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="display block text-5xl text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
