import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { egp } from "@/lib/shop-data";
import { useCart } from "./cart-store";

export function CartDrawer() {
  const { isOpen, close, lines, subtotal, delivery, total, remainingForFreeDelivery, setQty } =
    useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60]">
          <motion.button
            type="button"
            aria-label="Close basket"
            onClick={close}
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.aside
            role="dialog"
            aria-label="Your basket"
            className="absolute inset-y-0 right-0 flex w-full max-w-[440px] flex-col bg-cream"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-7 pb-5 pt-7">
              <h2 className="display text-3xl text-primary">Your Basket</h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close basket"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>

            {remainingForFreeDelivery > 0 && lines.length > 0 && (
              <p className="mx-7 mb-4 border-y border-border py-3 text-xs text-muted-foreground">
                Add {egp(remainingForFreeDelivery)} more for free delivery.
              </p>
            )}

            <div className="no-scrollbar flex-1 overflow-y-auto px-7">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 pb-20 text-center">
                  <ShoppingBag className="size-7 text-beige" strokeWidth={1.25} />
                  <p className="display text-2xl text-primary">Nothing picked yet</p>
                  <p className="max-w-[220px] text-sm text-muted-foreground">
                    Your basket is waiting. Start with today's fresh picks.
                  </p>
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  <AnimatePresence initial={false}>
                    {lines.map((line) => (
                      <motion.li
                        key={line.id}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-4 py-5"
                      >
                        <div className="size-18 shrink-0 overflow-hidden rounded-xl bg-sand">
                          {line.image && (
                            <img
                              src={line.image}
                              alt={line.name}
                              loading="lazy"
                              width={800}
                              height={800}
                              className="size-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-sm font-medium">{line.name}</p>
                              <p className="mt-0.5 text-xs text-muted-foreground">{line.unit}</p>
                            </div>
                            <p className="text-sm">{egp(line.price * line.qty)}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              aria-label={`Decrease ${line.name}`}
                              onClick={() => setQty(line.id, line.qty - 1)}
                              className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                              <Minus className="size-3" strokeWidth={1.75} />
                            </button>
                            <span className="w-4 text-center text-sm">{line.qty}</span>
                            <button
                              type="button"
                              aria-label={`Increase ${line.name}`}
                              onClick={() => setQty(line.id, line.qty + 1)}
                              className="rounded-full border border-border p-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                              <Plus className="size-3" strokeWidth={1.75} />
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            <div className="border-t border-border px-7 py-6">
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <dt>Subtotal</dt>
                  <dd>{egp(subtotal)}</dd>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <dt>Delivery</dt>
                  <dd>{delivery === 0 ? "Free" : egp(delivery)}</dd>
                </div>
                <div className="flex justify-between pt-2 text-base">
                  <dt className="font-serif text-xl text-primary">Total</dt>
                  <dd className="font-serif text-xl text-primary">{egp(total)}</dd>
                </div>
              </dl>
              <button
                type="button"
                disabled={lines.length === 0}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-xs font-medium uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 ease-editorial hover:bg-primary-deep disabled:opacity-40"
              >
                Checkout <span aria-hidden>&rarr;</span>
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
