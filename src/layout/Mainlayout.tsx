import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "../components/ui/Loader";

import Navbar from "./Navbar";
import Hero from "../sections/Hero";
import OurBooths from "../sections/Booth";
import HowItWorks from "../sections/How_it_works";
import WhyUs from "../sections/Why_choose_us";
import Gallery from "../sections/Gallery";
import Pricing from "../sections/Pricing";
import Testimonials from "../sections/Testimonials";
import CTABanner from "../sections/CTAbanner";
import Footer from "./Footer";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />

          <main>
            <Hero />
            <OurBooths />
            <HowItWorks />
            <WhyUs />
            <Gallery />
            <Pricing />
            <Testimonials />
            <CTABanner />
          </main>

          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
