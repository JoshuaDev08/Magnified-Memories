import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";
import BookingModal from "../components/ui/BookingModal";
import { useRef, useEffect, useState } from "react";

const CTABanner = () => {
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
  return (
    <section className="bg-base-200 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#7A3B1E] via-[#63301A] to-[#4A2010] px-8 py-20 text-center shadow-[0_30px_80px_rgba(122,59,30,0.35)] sm:px-14"
      >
        {/* Background Glow */}
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#C4956A]/15 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

        {/* Floating Sparkles */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="absolute left-12 top-12 text-[#C4956A]/40"
        >
          <Sparkles size={32} />
        </motion.div>

        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
          }}
          className="absolute bottom-12 right-12 text-[#C4956A]/40"
        >
          <Camera size={36} />
        </motion.div>

        <div className="relative z-10">
          {/* Badge */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <Sparkles
              className="text-[#E8BF8A]"
              size={18}
              fill="currentColor"
            />

            <span className="rounded-full border border-[#C4956A]/40 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#E8BF8A] backdrop-blur-md">
              Creating Unforgettable Memories Across Batangas
            </span>

            <Sparkles
              className="text-[#E8BF8A]"
              size={18}
              fill="currentColor"
            />
          </div>

          {/* Heading */}
          <h2
            className="text-4xl font-bold leading-tight text-white md:text-5xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Your Event Deserves
            <br />
            Memories That Last Forever
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Our calendar fills up quickly—especially during wedding and
            graduation season. Reserve your preferred date today and let us help
            create unforgettable moments for you and your guests.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={openBookingModal}
              className="btn btn-lg rounded-box border border-white/30 bg-white/15 px-8 text-sm font-bold text-white backdrop-blur-md transition-all duration-100 hover:border-white/50 hover:bg-white/25 hover:text-white"
            >
              Check Availability
            </button>

            <BookingModal
              isOpen={bookingModal}
              countdown={countdown}
              messengerUrl={messengerUrl}
              onClose={closeBookingModal}
            />

            <button
              className="btn btn-lg btn-secondary btn-outline text-sm rounded-box"
              onClick={() =>
                document
                  .getElementById("our-booths")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Our Booths
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
