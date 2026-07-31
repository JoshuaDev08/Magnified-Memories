import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Expand, X } from "lucide-react";
import Button from "../components/ui/Button";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=1000&fit=crop&auto=format",
    alt: "Guests celebrating",
    category: "Celebration",
    width: 800,
    height: 1000,
  },
  {
    url: "https://images.unsplash.com/photo-1714972383570-44ddc9738355?w=800&h=600&fit=crop&auto=format",
    alt: "Dance floor moments",
    category: "Party",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1713519341017-431ec17a211a?w=800&h=600&fit=crop&auto=format",
    alt: "Mirror booth glamour",
    category: "Mirror Booth",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1595854875339-4d60795dcb65?w=800&h=1000&fit=crop&auto=format",
    alt: "Wedding photobooth",
    category: "Wedding",
    width: 800,
    height: 1000,
  },
  {
    url: "https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?w=800&h=600&fit=crop&auto=format",
    alt: "Evening party",
    category: "Event",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1578376706507-35e6dd7af19c?w=800&h=600&fit=crop&auto=format",
    alt: "Retro booth",
    category: "Classic Booth",
    width: 800,
    height: 600,
  },
  {
    url: "https://images.unsplash.com/photo-1578376706507-35e6dd7af19c?w=800&h=360&fit=crop&auto=format",
    alt: "Retro boothness",
    category: "Classic Booth",
    width: 800,
    height: 360,
  },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof photos)[number] | null
  >(null);

  return (
    <section
      id="gallery"
      className="overflow-hidden bg-base-100 px-6 py-24 lg:py-30"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4956A]">
              Real Events
            </span>

            <h2
              className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[#1C1410] sm:text-5xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Moments That
              <br />
              Matter
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#7A6A5A] sm:text-base">
              Every smile, every laugh, and every unforgettable moment —
              captured beautifully.
            </p>
          </div>

          <Button
            variant="outline"
            className="group shrink-0"
            onClick={() => {
              document
                .querySelector("#pricing")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Your Event
            <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Gallery */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <motion.button
              key={photo.alt}
              type="button"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-[#DDD0BC] text-left shadow-sm"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={photo.url}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="absolute inset-0 flex items-end bg-gradient-to-t from-[#7A3B1E]/90 via-[#7A3B1E]/25 to-transparent p-5"
              >
                <div className="flex w-full translate-y-3 items-end justify-between transition-transform duration-300 group-hover:translate-y-0">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E8DCCC]">
                      {photo.category}
                    </p>

                    <h3 className="mt-1 font-serif text-lg font-semibold text-white">
                      {photo.alt}
                    </h3>
                  </div>

                  <span className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                    <Expand className="size-4" />
                  </span>
                </div>
              </motion.div>

              {/* Small top label */}
              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                View Photo
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom Gallery Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="h-px w-20 bg-[#C4956A]/50" />

          <p className="font-serif text-lg text-[#5A4535]">
            Your event could be our next favorite memory ✦
          </p>
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1410]/90 p-4 backdrop-blur-md"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#2B2118] shadow-2xl"
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />

              {/* Lightbox Details */}
              <div className="flex items-center justify-between gap-5 p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#C4956A]">
                    {selectedPhoto.category}
                  </p>

                  <h3 className="mt-1 font-serif text-xl font-semibold text-white">
                    {selectedPhoto.alt}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Close image"
                >
                  <X className="size-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
