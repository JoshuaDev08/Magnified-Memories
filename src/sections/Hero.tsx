import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { ArrowRight } from "lucide-react";
import background from "../assets/Background.jpg";
import BookingModal from "../components/ui/BookingModal";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
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
    const handleScroll = () => setOffsetY(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${background})`,
          transform: `translateY(${offsetY * 0.55}px) scale(1.1)`,
          willChange: "transform",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A3B1E]/40 via-black/30 to-black/70" />

      {/* Decorative Blur */}
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#C4956A]/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-[450px] w-[450px] rounded-full bg-[#7A3B1E]/30 blur-3xl" />

      {/* Content */}
      <div className="hero-content relative z-10 px-6 text-center sm:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 px-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C4956A] sm:px-0 sm:text-sm sm:tracking-[0.3em]"
          >
            Premium Photobooth Experience
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Make Every Event{" "}
            <span className="italic text-[#C4956A]">Unforgettable</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mx-auto max-w-2xl px-2 py-6 text-base leading-relaxed text-white/75 sm:px-0 sm:py-8 sm:text-lg md:text-xl"
          >
            Capture timeless memories with elegant photo booths designed for
            weddings, birthdays, corporate events, and every celebration in
            between.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              className="group px-8 text-sm"
              onClick={() =>
                document
                  .getElementById("our-booths")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Booths
              <ArrowRight className=" h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <button
              type="button"
              onClick={openBookingModal}
              className="btn btn-lg rounded-box sm:w-auto border border-white/30 bg-white/15 px-8 text-sm font-bold text-white backdrop-blur-md transition-all duration-100 hover:border-white/50 hover:bg-white/25 hover:text-white"
            >
              Check Availability
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 flex justify-between border-t border-white/20 pt-6"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex-1 py-3 text-center"
            >
              <h2
                className="text-2xl font-bold text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                500+
              </h2>

              <p className="mt-2 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">
                Events Served
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex-1 border-x border-white/20 py-3 text-center"
            >
              <h2
                className="text-2xl font-bold text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                5
              </h2>

              <p className="mt-2 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">
                Booth Types
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex-1 py-3 text-center"
            >
              <h2
                className="text-2xl font-bold text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                48h
              </h2>

              <p className="mt-2 text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">
                Response Time
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center text-white/60"
      >
        <div className="h-10 w-px bg-white/50" />
      </motion.div>

      <BookingModal
        isOpen={bookingModal}
        countdown={countdown}
        messengerUrl={messengerUrl}
        onClose={closeBookingModal}
      />
    </section>
  );
};

export default Hero;
