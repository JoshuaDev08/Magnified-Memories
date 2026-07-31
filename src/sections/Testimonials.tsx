import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "../data/reviews";

const particles = Array.from({ length: 20 });

const Testimonials = () => {
  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-gradient-to-br from-[#1C1410] via-[#2B2118] to-[#1C1410] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-20 top-10 h-72 w-72 rounded-full bg-[#C4956A]/20 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#7A3B1E]/30 blur-[150px]"
        />

        {/* Floating particles */}

        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[#C4956A]/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.15, 0.7, 0.15],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4956A]">
            Real Reviews
          </span>

          <h2
            className="mt-3 text-4xl font-bold leading-tight text-[#FAF7F2] sm:text-5xl sm:leading-[1.3]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Loved by Every Guest
            <br />
            at Every Event
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                borderColor: "#C4956A",
              }}
              className="relative flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 h-12 w-12 text-[#C4956A]/10" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: starIndex * 0.08,
                    }}
                  >
                    <Star size={16} fill="#C4956A" className="text-[#C4956A]" />
                  </motion.div>
                ))}
              </div>

              {/* Event */}
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#C4956A]">
                {review.event}
              </p>

              {/* Review */}
              <p className="mb-8 leading-8 text-white/80 italic">
                "{review.text}"
              </p>

              {/* Pushes author to bottom */}
              <div className="mt-auto flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7A3B1E] to-[#C4956A] font-serif font-bold text-white">
                  {review.initials}
                </div>

                <div>
                  <h3
                    className="text-lg text-white"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {review.name}
                  </h3>

                  <p className="text-sm text-white/50">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
