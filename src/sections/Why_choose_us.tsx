import { motion } from "framer-motion";

const features = [
  {
    icon: "🏆",
    title: "Award-Winning Service",
    desc: "Triple-awarded by Blows & Vows — Perth's most trusted wedding & event directory. Our reputation speaks louder than any ad.",
  },
  {
    icon: "📸",
    title: "Unlimited Prints",
    desc: "No coin slots, no limits. Every guest gets as many prints as they want, every single session, for the entire hire period.",
  },
  {
    icon: "🎨",
    title: "Fully Custom Branded",
    desc: "Your names, your date, your logo. Every print template is designed to match your event aesthetic perfectly.",
  },
  {
    icon: "👥",
    title: "Dedicated Attendant",
    desc: "A friendly team member stays with your booth all night — handling props, assisting guests, and keeping the fun going.",
  },
  {
    icon: "🚚",
    title: "Perth-Wide Delivery",
    desc: "We deliver, set up, and pack down anywhere in the Perth metro area. All included. No surprises on the invoice.",
  },
  {
    icon: "📱",
    title: "Instant Digital Gallery",
    desc: "Every photo lands in a beautiful online gallery delivered straight to your inbox within 24 hours of the event ending.",
  },
];

const awards = [
  {
    icon: "🏆",
    label: "Top Booker Award 2026",
    sub: "Blows & Vows",
  },
  {
    icon: "🏆",
    label: "Top Booker Award 2025",
    sub: "Blows & Vows",
  },
  {
    icon: "👁",
    label: "Online Visibility Champion 2025",
    sub: "Blows & Vows",
  },
];

const WhyUs = () => {
  return (
    <section id="about" className="bg-base-100 px-6 py-24 lg:py-30">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4956A]">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[#1C1410] sm:text-5xl" style={{ fontFamily: "var(--font-serif)" }}>
              Perth&apos;s Most
              <br />
              Trusted Booth Hire
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#5A4535] sm:text-lg">
              We&apos;ve been making events unforgettable since day one. Three
              awards later, we&apos;re still obsessed with every last detail —
              because your night deserves nothing less.
            </p>

            {/* Awards */}
            <div className="mt-8 flex flex-col gap-3">
              {awards.map((award, index) => (
                <motion.div
                  key={award.label}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    x: 5,
                    boxShadow: "0 10px 25px rgba(122, 59, 30, 0.08)",
                  }}
                  className="flex items-center gap-4 rounded-xl border border-[#E8DCCC] bg-base-200 px-5 py-3.5"
                >
                  <span className="text-2xl">{award.icon}</span>

                  <div>
                    <h4 className="text-sm font-semibold text-[#1C1410]" >
                      {award.label}
                    </h4>

                    <p className="mt-0.5 text-xs font-semibold tracking-wide text-[#C4956A]">
                      {award.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 15px 35px rgba(122, 59, 30, 0.1)",
                }}
                className="card border border-[#E8DCCC] bg-base-200"
              >
                <div className="card-body p-6">
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="mb-1 text-3xl"
                  >
                    {feature.icon}
                  </motion.div>

                  <h3 className="font-serif text-lg font-semibold text-[#1C1410]" >
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#7A6A5A]">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
