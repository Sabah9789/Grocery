import { AnimatePresence, motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { egp } from "@/lib/shop-data";
import { useCart } from "./cart-store";

export function MobileCartBar() {
  const { count, total, open, isOpen } = useCart();

  return (
    <AnimatePresence>
      {count > 0 && !isOpen && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 md:hidden"
        >
          <button
            type="button"
            onClick={open}
            className="flex w-full items-center justify-between rounded-full bg-primary px-6 py-4 text-primary-foreground shadow-lift"
          >
            <span className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em]">
              <ShoppingBag className="size-4" strokeWidth={1.5} />
              {count} {count === 1 ? "item" : "items"}
            </span>
            <span className="font-serif text-lg">{egp(total)}</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
