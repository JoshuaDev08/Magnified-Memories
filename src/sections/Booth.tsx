import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";
import Button from "../components/ui/Button";
import { booths } from "../data/ourbooth";
import BookingModal from "../components/ui/BookingModal";

const OurBooths = () => {
  const [active, setActive] = useState(0);
  const [selectedBooth, setSelectedBooth] = useState<
    (typeof booths)[number] | null
  >(null);

  const booth = booths[active];

  const [bookingModal, setBookingModal] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const messengerUrl = "https://m.me/magnifiedmemories";

  const hasRedirected = useRef(false);

  const openBookingModal = () => {
    hasRedirected.current = false;
    setCountdown(10);
    setBookingModal(true);
  };

  const closeBookingModal = () => {
    hasRedirected.current = true;
    setBookingModal(false);
  };

  useEffect(() => {
    if (!bookingModal) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [bookingModal]);

  useEffect(() => {
    if (bookingModal && countdown === 0 && !hasRedirected.current) {
      hasRedirected.current = true;
      closeBookingModal();
    }
  }, [bookingModal, countdown]);

  useEffect(() => {
    if (selectedBooth) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedBooth]);

  return (
    <section id="our-booths" className="py-24 bg-base-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[#C4956A] uppercase tracking-[0.15em] font-semibold text-xs">
            What We Offer
          </p>

          <h2
            className="mt-3 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Five Ways to Capture the Night
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {booths.map((item, index) => (
            <Button
              key={item.name}
              onClick={() => setActive(index)}
              variant={active === index ? "primary" : "outline"}
              className="min-w-40 rounded-full"
              size="md"
            >
              <span>{item.emoji}</span>
              <span>{item.name}</span>
            </Button>
          ))}
        </motion.div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="card z mt-12 overflow-hidden bg-base-200 shadow-sm lg:card-side"
          >
            {/* Image */}
            <motion.figure
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="group aspect-[5/4] overflow-hidden">
                <motion.img
                  key={booth.img}
                  src={booth.img}
                  alt={booth.name}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.figure>

            {/* Content */}
            <motion.div
              className="card-body lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.45,
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C4956A]">
                {booth.tag}
              </div>

              <h3
                className="card-title mt-2 text-3xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {booth.name}
              </h3>

              <p className="leading-8 text-base-content/70">{booth.desc}</p>

              <div className="mt-4 space-y-3">
                {booth.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.25 + index * 0.08,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-warning/20">
                      <Check className="h-4 w-4 text-warning" />
                    </div>

                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55,
                }}
                className="card-actions mt-8 gap-3"
              >
                <Button className="group" onClick={openBookingModal}>
                  Book This Booth
                  <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <BookingModal
                  isOpen={bookingModal}
                  countdown={countdown}
                  messengerUrl={messengerUrl}
                  onClose={closeBookingModal}
                />

                <Button
                  variant="outline"
                  onClick={() => setSelectedBooth(booth)}
                >
                  See More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {selectedBooth && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBooth(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-base-100 shadow-2xl relative "
              >
                <img
                  src={selectedBooth.img}
                  alt={selectedBooth.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8 ">
                  <div className="flex items-start justify-between">
                    <button
                      onClick={() => setSelectedBooth(null)}
                      className="absolute right-6 cursor-pointer top-6 flex h-11 w-11 items-center justify-center rounded-full bg-base-100/90 shadow-lg transition hover:bg-[#C4956A] hover:text-white"
                    >
                      <X size={20} />
                    </button>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4956A]">
                        {selectedBooth.tag}
                      </p>

                      <h2
                        className="mt-2 text-4xl font-bold"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {selectedBooth.name}
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-base-content/70">
                    {selectedBooth.desc}
                  </p>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl bg-base-200 p-6">
                      <h3 className="font-semibold">Package Price</h3>

                      <p className="mt-3 text-3xl font-bold text-[#C4956A]">
                        {selectedBooth.price}
                      </p>

                      <p className="mt-2 text-sm opacity-70">
                        Duration: {selectedBooth.duration}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-base-200 p-6">
                      <h3 className="font-semibold">Perfect For</h3>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedBooth.idealFor.map((item) => (
                          <div key={item} className="badge badge-outline">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="mb-5 text-xl font-semibold">
                      What's Included
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                      {selectedBooth.features.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-success" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="mb-5 text-xl font-semibold">
                      Available Add-ons
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      <div className="space-y-2">
                        {selectedBooth.addons.map((addon) => (
                          <div
                            key={addon.name}
                            className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-200 p-3 transition hover:border-[#C4956A]/40 sm:flex-row"
                          >
                            {/* Image */}
                            <img
                              src={addon.img}
                              alt={addon.name}
                              className="h-48 w-full rounded-xl object-cover sm:h-24 sm:w-24 sm:flex-shrink-0"
                            />

                            {/* Content */}
                            <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row">
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#C4956A]">
                                  {addon.type}
                                </p>

                                <h4 className="mt-1 text-lg font-semibold">
                                  {addon.name}
                                </h4>

                                {addon.pieces && (
                                  <p className="mt-1 text-sm text-base-content/60">
                                    Includes {addon.pieces}
                                  </p>
                                )}

                                {addon.description && (
                                  <p className="mt-2 text-sm leading-6 text-base-content/60">
                                    {addon.description}
                                  </p>
                                )}
                              </div>

                              <div className="flex items-start justify-start sm:justify-end">
                                <span className="whitespace-nowrap rounded-full bg-[#C4956A]/10 px-4 py-2 font-bold text-[#C4956A]">
                                  {addon.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button onClick={openBookingModal}>
                      Book This Booth
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => setSelectedBooth(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurBooths;
