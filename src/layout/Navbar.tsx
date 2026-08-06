import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.png";
import Button from "../components/ui/Button";
import { navLinks } from "../data/Navbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "pt-2 px-2 sm:px-4" : "pt-0 px-0"
        }`}
      >
        <div
          className={`navbar relative overflow-hidden transition-all duration-500 ease-out ${
            isScrolled
              ? "rounded-2xl bg-white/12 backdrop-blur-lg border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
              : "bg-transparent border border-transparent shadow-none"
          }`}
        >
          {/* Glass Highlight */}
          {isScrolled && (
            <>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 via-white/5 to-transparent" />

              <div className="pointer-events-none absolute -top-10 left-1/2 h-20 w-[70%] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
            </>
          )}

          {/* Logo */}
          <div className="navbar-start">
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "#home")}
              className="flex items-center gap-2 cursor-pointer lg:ml-1"
            >
              <img
                src={Logo}
                alt="Magnified Memories Logo"
                className="w-12 h-12 rounded-box object-cover"
              />

              <div
                className="leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                <h1
                  className={`text-sm sm:text-base lg:text-xl font-bold whitespace-nowrap transition-all duration-500 ${
                    isScrolled
                      ? "text-[#2B2118] drop-shadow-none"
                      : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  Magnified
                  <span className="text-[#C4956A]">Memories</span>
                </h1>
              </div>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className={`relative group transition-all duration-500 ${
                  isScrolled
                    ? "text-[#2B2118] hover:text-[#C4956A]"
                    : "text-white hover:text-[#C4956A] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                }`}
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#C4956A] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          {/* Right Side */}
          <div className="navbar-end gap-2">
            <div className="hidden lg:block">
              <Button
                className="mr-1"
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book a Booth
              </Button>
            </div>

            <button
              className={`lg:hidden w-12 h-10 rounded-lg border backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? "bg-[#7A3B1E]/10 border-[#7A3B1E]/20"
                  : "bg-white/10 border-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <X
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isScrolled ? "text-[#2B2118]" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isScrolled ? "text-[#2B2118]" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 z-50 h-full w-full sm:w-80 bg-base-300 border-l border-white/10 shadow-xl lg:hidden"
            >
              <div className="flex flex-col h-full p-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="self-end w-12 h-10 rounded-lg  flex items-center justify-center mb-10 bg-[#7A3B1E]/10 border-[#7A3B1E]/20"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="text-lg text-black hover:text-warning transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                <div
                  className="mt-auto"
                  onClick={() =>
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Button variant="outline">Book a Booth</Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
