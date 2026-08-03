import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  countdown: number;
  messengerUrl: string;
  onClose: () => void;
  title?: string;
  description?: string;
}

const BookingModal = ({
  isOpen,
  countdown,
  messengerUrl,
  onClose,
  title = "Online Booking Coming Soon",
  description = "We're currently developing our online booking and availability system to provide you with a better experience.",
}: BookingModalProps) => {
  const handleMessenger = () => {
    window.open(messengerUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    if (countdown === 0) {
      handleMessenger();
    }
  }, [countdown, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg rounded-3xl bg-base-100 p-8 shadow-2xl"
          >
            <div className="text-center">
              <div className="text-5xl">💬</div>

              <h2
                className="mt-5 text-3xl font-bold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {title}
              </h2>

              <p className="mt-4 leading-7 text-base-content/70">
                {description}
              </p>

              <p className="mt-5 leading-7 text-base-content/70">
                In the meantime, our customer service team can assist you
                through Facebook Messenger with:
              </p>

              <ul className="mt-5 space-y-2 text-left">
                <li>✔ Check available dates</li>
                <li>✔ Reserve your preferred booth</li>
                <li>✔ Package recommendations</li>
                <li>✔ Custom event requests</li>
              </ul>

              <div className="mt-8 rounded-xl bg-[#C4956A]/10 py-4">
                <p className="font-semibold">Redirecting in</p>

                <p className="mt-2 text-4xl font-bold text-[#C4956A]">
                  {countdown}
                </p>

                <p className="text-sm">seconds</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="outline" className="flex-1" onClick={onClose}>
                  Cancel
                </Button>

                <Button className="flex-1" onClick={handleMessenger}>
                  Open Messenger
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
