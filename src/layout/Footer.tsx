import { motion } from "framer-motion";
import { Camera, Trophy } from "lucide-react";
import InstagramIcon from "../assets/icons/instagram.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";

const footerLinks = [
  {
    title: "Our Booths",
    links: [
      "Retro Photobooth",
      "Mirror Photobooth",
      "Enclosed Photobooth",
      "Look Up Photobooth",
      "Video Guestbook",
    ],
  },
  {
    title: "Events",
    links: ["Weddings", "Birthdays", "Corporate Events", "School Events"],
  },
  {
    title: "Company",
    links: ["Why Choose Us", "Gallery", "Pricing"],
  },
];

const socials = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/magnifiedmem/",
    label: "Instagram",
  },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/magnifiedmemories/",
    label: "Facebook",
  },
  {
    icon: TiktokIcon,
    href: "https://www.tiktok.com/@magnifiedmem",
    label: "TikTok",
  },
];

const Footer = () => {
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7A3B1E] to-[#C4956A] shadow-lg">
                <Camera className="h-4 w-4 text-white" />
              </div>

              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Magnified
                <span className="text-[#C4956A]">Memories</span>
              </h3>
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
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-all duration-300 hover:pl-1 hover:text-[#C4956A]"
                    >
                      {link}
                    </a>
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
