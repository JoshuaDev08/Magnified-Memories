import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";

interface LoaderProps {
  ready: boolean;
  onDone: () => void;
}

const Loader = ({ ready, onDone }: LoaderProps) => {
  useEffect(() => {
    if (!ready) return;

    const timer = setTimeout(() => {
      onDone();
    }, 800); // Time for your exit animation

    return () => clearTimeout(timer);
  }, [ready, onDone]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.7 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#1C1410]"
      >
        {/* Background Orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-120px] top-[10%] h-[420px] w-[420px] rounded-full bg-[#7A3B1E]/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-120px] right-[-100px] h-[360px] w-[360px] rounded-full bg-[#C4956A]/15 blur-3xl"
        />

        <div className="relative flex flex-col items-center">
          {/* Ring + Camera */}
          <div className="relative flex h-24 w-24 items-center justify-center">
            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-[#C4956A]/40"
            />

            {/* Camera */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#7A3B1E] to-[#C4956A] shadow-xl"
            >
              <Camera className="h-7 w-7 text-white" />
            </motion.div>
          </div>

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="mt-8 text-center"
          >
            <h1
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Magnified
              <span className="text-[#C4956A]">Memories</span>
            </h1>

            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/45">
              Lipa City • Batangas
            </p>
          </motion.div>

          {/* Loading Dots */}
          <div className="mt-10 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-[#C4956A]"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
