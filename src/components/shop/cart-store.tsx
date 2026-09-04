import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DELIVERY_FEE, FREE_DELIVERY_THRESHOLD } from "@/lib/shop-data";

export type CartLine = {
  id: string;
  name: string;
  unit: string;
  price: number;
  image?: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  delivery: number;
  total: number;
  remainingForFreeDelivery: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (item: Omit<CartLine, "qty">, qty?: number) => void;
  addMany: (items: Omit<CartLine, "qty">[]) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const upsert = useCallback((prev: CartLine[], item: Omit<CartLine, "qty">, qty: number) => {
    const existing = prev.find((line) => line.id === item.id);
    if (existing) {
      return prev.map((line) =>
        line.id === item.id ? { ...line, qty: line.qty + qty } : line,
      );
    }
    return [...prev, { ...item, qty }];
  }, []);

  const add = useCallback(
    (item: Omit<CartLine, "qty">, qty = 1) => {
      setLines((prev) => upsert(prev, item, qty));
      setIsOpen(true);
    },
    [upsert],
  );

  const addMany = useCallback(
    (items: Omit<CartLine, "qty">[]) => {
      setLines((prev) => items.reduce((acc, item) => upsert(acc, item, 1), prev));
      setIsOpen(true);
    },
    [upsert],
  );

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((line) => line.id !== id)
        : prev.map((line) => (line.id === id ? { ...line, qty } : line)),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = lines.reduce((sum, line) => sum + line.price * line.qty, 0);
    const freeDelivery = subtotal >= FREE_DELIVERY_THRESHOLD;
    return {
      lines,
      count: lines.reduce((sum, line) => sum + line.qty, 0),
      subtotal,
      delivery: subtotal === 0 || freeDelivery ? 0 : DELIVERY_FEE,
      total: subtotal + (subtotal === 0 || freeDelivery ? 0 : DELIVERY_FEE),
      remainingForFreeDelivery: Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      addMany,
      setQty,
      remove,
    };
  }, [lines, isOpen, add, addMany, setQty, remove]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
