import { motion } from "framer-motion";
import { steps } from "../data/howitworks";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-base-300 px-6 py-24 lg:py-30">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-18 max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4956A]">
            The Process
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[#1C1410] sm:text-5xl">
            Simple. Seamless. Spectacular.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#7A6A5A] sm:text-lg">
            From enquiry to gallery, we make the whole thing effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {/* Connecting Line - Desktop Only */}
          <div className="absolute top-13 right-[16.67%] left-[16.67%] z-0 hidden h-px bg-gradient-to-r from-[#DDD0BC] via-[#C4956A] to-[#DDD0BC] md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(122, 59, 30, 0.12)",
                }}
                className="card relative z-10  border border-[#E8DCCC] bg-base-100 "
              >
                <div className="card-body p-8 lg:p-10">
                  {/* Icon and Number */}
                  <div className="mb-6 flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-content"
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </motion.div>

                    <span className="text-4xl font-bold leading-none text-[#DDD0BC]" style={{ fontFamily: "var(--font-serif)" }}>
                      {step.num}
                    </span>
                  </div>

                  {/* Card Content */}
                  <h3 className=" text-2xl font-semibold text-[#1C1410]" style={{ fontFamily: "var(--font-serif)" }}>
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#5A4535]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
