import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { footerLinks, socials } from "../data/footer";
import Logo from "../assets/Logo.png";

const Footer = () => {
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="bg-[#1C1410] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <a
                href="#home"
                onClick={(e) => handleNavLinkClick(e, "#home")}
                className="flex items-center gap-2 cursor-pointer lg:ml-1"
              >
                <img
                  src={Logo}
                  alt="Magnified Memories Logo"
                  className="w-8 h-8 rounded-box object-cover"
                />

                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Magnified
                  <span className="text-[#C4956A]">Memories</span>
                </h3>
              </a>
            </div>

            <p className="max-w-xs text-sm leading-6 text-white/60">
              Premium photobooth experiences for weddings, birthdays, corporate
              events, and unforgettable celebrations.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#C4956A] hover:bg-[#C4956A]/20"
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="h-4 w-4 brightness-0 invert"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <h4
                className="mb-3 text-base font-semibold text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {section.title}
              </h4>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <button
                        type="button"
                        onClick={() => {
                          const id = link.href.replace("#", "");
                          document
                            .getElementById(id)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="cursor-pointer text-sm text-white/60 transition-all duration-300 hover:pl-1 hover:text-[#C4956A]"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <span className="text-sm text-white/60">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <p className="text-center text-xs text-white/50 md:text-left">
            © {new Date().getFullYear()} Magnified Memories. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2 rounded-full border border-[#C4956A]/30 bg-[#C4956A]/10 px-3 py-1.5 text-[#C4956A]">
            <Trophy className="h-3.5 w-3.5" />

            <span className="text-xs font-medium">
              Creating unforgettable memories, one event at a time.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
