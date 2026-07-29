import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Button from "../components/ui/Button";

const plans = [
  {
    name: "Essential",
    price: "10,000",
    duration: "3 Hours",
    desc: "Perfect for birthdays, intimate gatherings, and small celebrations.",
    features: [
      "1 Booth of your choice",
      "3-hour hire period",
      "Unlimited photo sessions",
      "Instant photo print-outs",
      "Choice of 3 photo templates",
      "Free use of premium props",
      "Digital copies via QR Code",
      "Online digital album",
      "Professional booth attendant",
      "Customized welcome screen",
      "Special gift for the client",
    ],
    featured: false,
  },
  {
    name: "Celebration",
    price: "14,500",
    duration: "3 Hours",
    desc: "Our most popular package for weddings, debuts, and special occasions.",
    features: [
      "1 Booth of your choice",
      "3-hour hire period",
      "Unlimited photo sessions",
      "Instant photo print-outs",
      "Custom photo template",
      "Premium prop collection",
      "Digital copies via QR Code",
      "Online digital album",
      "Professional booth attendant",
      "Customized welcome screen",
      "Special gift for the client",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "24,000",
    duration: "4 Hours",
    desc: "The ultimate experience for corporate events, weddings, and grand celebrations.",
    features: [
      "2 Booths of your choice",
      "8-hour hire period",
      "Unlimited photo sessions",
      "Instant photo print-outs",
      "Fully customized photo template",
      "Premium prop collection",
      "Digital copies via QR Code",
      "Online digital album",
      "Dedicated event coordinator",
      "Priority setup & pack-down",
      "Customized welcome screen",
      "Special gift for the client",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-base-300 px-6 py-24 lg:py-30">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4956A]">
            Packages
          </span>

          <h2
            className="mt-3 text-4xl font-bold leading-tight text-[#1C1410] sm:text-5xl sm:leading-[1.3]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Simple Pricing,
            <br />
            Extraordinary Memories
          </h2>

          <p className="mt-5 text-[#7A6A5A]">
            No hidden fees. Every package includes delivery, setup and
            pack-down.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
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
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className={`relative ${plan.featured ? "lg:scale-105" : ""}`}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E8DCCC] bg-[#C4956A] px-5 py-2 text-xs font-bold tracking-[0.12em] text-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star size={14} fill="currentColor" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div
                className={`card h-full border ${
                  plan.featured
                    ? "border-[#7A3B1E] bg-[#7A3B1E] text-white shadow-2xl shadow-[#7A3B1E]/30"
                    : "border-[#E8DCCC] bg-base-100"
                }`}
              >
                <div className="card-body p-8">
                  <h3
                    className="text-3xl font-semibold"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`text-sm ${
                      plan.featured ? "text-white/70" : "text-[#7A6A5A]"
                    }`}
                  >
                    {plan.duration}
                  </p>

                  <p
                    className={` text-sm ${
                      plan.featured ? "text-white/80" : "text-[#7A6A5A]"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div>
                    <span
                      className={`text-6xl font-bold ${
                        plan.featured ? "text-white" : "text-[#7A3B1E]"
                      }`}
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {plan.price}
                    </span>

                    <span
                      className={`ml-2 text-sm ${
                        plan.featured ? "text-white/70" : "text-[#7A6A5A]"
                      }`}
                    >
                      PHP
                    </span>
                  </div>

                  <div
                    className={`my-3 h-px ${
                      plan.featured ? "bg-white/15" : "bg-[#E8DCCC]"
                    }`}
                  />

                  {/* Features */}
                  <div className="space-y-2">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 rounded-full p-1 ${
                            plan.featured ? "bg-white/15" : "bg-[#EDE4D6]"
                          }`}
                        >
                          <Check
                            size={14}
                            className={
                              plan.featured ? "text-white" : "text-[#7A3B1E]"
                            }
                          />
                        </div>

                        <span
                          className={`text-sm leading-6 ${
                            plan.featured ? "text-white/85" : "text-[#5A4535]"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    {plan.featured ? (
                      <Button className="w-full border-white/30 bg-white/15 text-white hover:bg-white/25">
                        Book {plan.name}
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full">
                        Book {plan.name}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-12 text-center text-sm text-[#7A6A5A]"
        >
          Need something custom?
          <button className="ml-2 font-semibold text-[#7A3B1E] transition-colors hover:text-[#C4956A] cursor-pointer">
            Get in touch
          </button>
          — we love creating bespoke packages.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
