import { useEffect, useState } from "react";
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
          backgroundImage: "url('/src/assets/background.jpg')",
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
      <div className="hero-content relative z-10 text-center">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="mb-4 uppercase tracking-[0.3em] text-[#C4956A] text-sm font-semibold">
            Premium Photobooth Experience
          </p>

          {/* Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Make Every Event{" "}
            <span className="italic text-[#C4956A]">Unforgettable</span>
          </h1>

          {/* Description */}
          <p className="py-8 text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
            Capture timeless memories with elegant photo booths designed for
            weddings, birthdays, corporate events, and every celebration in
            between.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="group px-8 text-sm">
              Explore Booths
                
            </Button>

            <button
              type="button"
              className="btn btn-lg rounded-box border border-white/30 bg-white/15 px-8 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/25 hover:text-white"
            >
              Check Availability
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-white/20 pt-8">
            <div className="py-6">
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                500+
              </h2>
              <p className="text-white/60 uppercase text-xs tracking-widest mt-2">
                Events Served
              </p>
            </div>

            <div className="py-6 md:border-x border-white/20">
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                4
              </h2>
              <p className="text-white/60 uppercase text-xs tracking-widest mt-2">
                Booth Types
              </p>
            </div>

            <div className="py-6">
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                48h
              </h2>
              <p className="text-white/60 uppercase text-xs tracking-widest mt-2">
                Response Time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce">
        <div className="w-px h-10 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
