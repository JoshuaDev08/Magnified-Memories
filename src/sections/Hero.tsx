import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

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
          backgroundImage: "url('/src/assets/Background.jpg')",
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
      {/* Content */}
      <div className="hero-content relative z-10 text-center">
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
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C4956A]"
          >
            Premium Photobooth Experience
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-5xl font-bold leading-tight text-white md:text-7xl"
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
            className="mx-auto max-w-2xl py-8 text-lg leading-relaxed text-white/75 md:text-xl"
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
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="group px-8 text-sm">
              Explore Booths
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <button
              type="button"
              className="btn btn-lg rounded-box border border-white/30 bg-white/15 px-8 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/25 hover:text-white"
            >
              Check Availability
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 grid grid-cols-1 border-t border-white/20 pt-8 md:grid-cols-3"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="py-6"
            >
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                500+
              </h2>

              <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                Events Served
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="border-white/20 py-6 md:border-x"
            >
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                4
              </h2>

              <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                Booth Types
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="py-6"
            >
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                48h
              </h2>

              <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
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
    </section>
  );
};

export default Hero;
