import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { heroSlides } from "../data/heroSlideimage";

type HeroBackgroundProps = {
  current: number;
};

export default function HeroBackground({ current }: HeroBackgroundProps) {


  return (
    <motion.div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={heroSlides[current].image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{
            opacity: 0,
            scale: 1.15,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.08,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/ via-black/60 to-[#1C1410]" />

    </motion.div>
  );
}
