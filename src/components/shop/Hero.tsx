import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, MapPin } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-svh min-h-[640px] overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -bottom-[14%]">
        <img
          src={heroImage}
          alt="Fresh vegetables, herbs, bread and milk arranged on a sunlit stone table"
          width={1920}
          height={1200}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/70 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24"
      >
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-cream/90 backdrop-blur-sm"
        >
          <MapPin className="size-3" strokeWidth={1.75} />
          Currently delivering in Badr City
        </motion.span>

        <h1 className="display max-w-[16ch] text-[clamp(3.2rem,10vw,8.5rem)] text-cream">
          {["Freshness,", "delivered differently."].map((line, i) => (
            <motion.span
              key={line}
              className="block overflow-hidden"
              initial={{ opacity: 0, y: "0.4em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-9 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-[34ch] text-[15px] leading-relaxed text-cream/75">
            Everything your home needs. Freshly picked, carefully packed, and delivered to your
            door.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#fresh-picks"
              className="rounded-full bg-cream px-9 py-4 text-xs font-medium uppercase tracking-[0.22em] text-primary transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:bg-sand"
            >
              Shop Fresh
            </a>
            <a
              href="#categories"
              className="rounded-full border border-cream/40 px-9 py-4 text-xs font-medium uppercase tracking-[0.22em] text-cream transition-all duration-500 ease-editorial hover:-translate-y-0.5 hover:border-cream"
            >
              Explore Categories
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-cream/50 md:block"
      >
        <ArrowDown className="size-4" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
