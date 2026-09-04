import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import storyImage from "@/assets/story.jpg";
import { Reveal } from "./Reveal";

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="story" ref={ref} className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-44">
      <div className="grid gap-14 md:grid-cols-12 md:items-center md:gap-8">
        <div className="md:col-span-5 md:col-start-1">
          <Reveal>
            <p className="eyebrow text-accent-foreground/70">The Daily Fresh</p>
            <h2 className="display mt-7 text-[clamp(2.6rem,6vw,5rem)] text-primary">
              Your kitchen
              <br />
              deserves better.
            </h2>
            <p className="mt-9 max-w-[42ch] text-[15px] leading-loose text-muted-foreground">
              We choose the everyday essentials with the same care you would — from crisp produce to
              pantry staples and everything in between.
            </p>
            <a
              href="#categories"
              className="eyebrow mt-11 inline-block border-b border-primary pb-1 text-primary transition-opacity duration-500 hover:opacity-60"
            >
              Our standards
            </a>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl bg-sand">
              <motion.img
                style={{ y }}
                src={storyImage}
                alt="A woman placing fresh vegetables into a woven basket in a sunlit kitchen"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[520px] w-full scale-110 object-cover md:h-[720px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
