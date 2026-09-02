"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { BLUR_DATA_URL } from "@/lib/blur";

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    align: "start",
    loop: false,
    dragFree: true,
  });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const active = lightbox !== null ? profile.gallery[lightbox] : null;

  return (
    <section id="gallery" className="relative px-6 py-28 md:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">{profile.galleryEyebrow}</span>
            <h2 className="mt-4 max-w-lg text-3xl font-extrabold leading-snug text-mist sm:text-4xl">
              {profile.galleryHeading}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="عکس قبلی"
              className="rounded-full border border-hairline p-2.5 text-mist transition-colors hover:border-turquoise/70 hover:text-turquoise"
            >
              <ChevronRight size={18} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="عکس بعدی"
              className="rounded-full border border-hairline p-2.5 text-mist transition-colors hover:border-turquoise/70 hover:text-turquoise"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-hidden" >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-5">
              {profile.gallery.map((photo, i) => (
                <button
                  type="button"
                  key={photo.src}
                  onClick={() => setLightbox(i)}
                  className="panel relative aspect-[4/5] w-[260px] flex-none overflow-hidden bg-panel2 p-0 transition-transform duration-300 hover:-translate-y-1 sm:w-[300px]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    sizes="(min-width: 640px) 300px, 260px"
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bed/90 p-6 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative aspect-[4/5] w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="480px"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="rounded-[24px] object-contain"
              />
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="بستن"
                className="absolute -top-4 start-4 rounded-full bg-panel p-2 text-mist"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
