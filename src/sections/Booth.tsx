import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import { booths } from "../data/ourbooth";

const OurBooths = () => {
  const [active, setActive] = useState(0);

  const booth = booths[active];

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
            Four Ways to Capture the Night
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
              <motion.img
                key={booth.img}
                src={booth.img}
                alt={booth.name}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-cover"
              />
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
                <Button className="group">
                  Book This Booth
                  <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <Button variant="outline">Learn More</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurBooths;
