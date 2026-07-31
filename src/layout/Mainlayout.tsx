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

// Assets to preload
import background from "../assets/Background.jpg";
import Logo from "../assets/Logo.png";

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new Image();
    img.src = src;

    img.onload = () => resolve();
    img.onerror = () => resolve();
  });

const MainLayout = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);

  // Preload important assets
  useEffect(() => {
    const loadAssets = async () => {
      await Promise.all([preloadImage(background), preloadImage(Logo)]);

      setAssetsLoaded(true);
    };

    loadAssets();
  }, []);

  // Prevent scrolling until everything is ready
  useEffect(() => {
    document.body.style.overflow =
      assetsLoaded && loaderDone ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [assetsLoaded, loaderDone]);

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaderDone && (
          <Loader ready={assetsLoaded} onDone={() => setLoaderDone(true)} />
        )}
      </AnimatePresence>

      {assetsLoaded && loaderDone && (
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
