import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/components/shop/cart-store";
import { SiteNav } from "@/components/shop/SiteNav";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { MobileCartBar } from "@/components/shop/MobileCartBar";
import { Hero } from "@/components/shop/Hero";
import { TrustStrip } from "@/components/shop/TrustStrip";
import { StorySection } from "@/components/shop/StorySection";
import { CategoryPanels } from "@/components/shop/CategoryPanels";
import { FreshPicks } from "@/components/shop/FreshPicks";
import { BasketBuilder } from "@/components/shop/BasketBuilder";
import { DeliverySection } from "@/components/shop/DeliverySection";
import { HowItWorks } from "@/components/shop/HowItWorks";
import { Testimonials } from "@/components/shop/Testimonials";
import { PromoSection } from "@/components/shop/PromoSection";
import { SiteFooter } from "@/components/shop/SiteFooter";

const title = "SAHL — Fresh groceries delivered in Badr City";
const description =
  "Freshly picked produce, dairy, bakery and pantry essentials, carefully packed and delivered to your door across Badr City.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <SiteNav />
      <main>
        <Hero />
        <TrustStrip />
        <StorySection />
        <CategoryPanels />
        <FreshPicks />
        <BasketBuilder />
        <DeliverySection />
        <HowItWorks />
        <Testimonials />
        <PromoSection />
      </main>
      <SiteFooter />
      <CartDrawer />
      <MobileCartBar />
    </CartProvider>
  );
}
