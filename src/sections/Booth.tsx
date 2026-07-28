import { useState } from "react";
import { Check } from "lucide-react";
import Button from "../components/ui/Button";
import { ArrowRight } from "lucide-react";

const booths = [
  {
    name: "Retro Photobooth",
    tag: "Classic & Timeless",
    emoji: "📷",
    img: "https://images.unsplash.com/photo-1578376706507-35e6dd7af19c?w=600&h=480&fit=crop&auto=format",
    desc: "Step into a slice of nostalgia. Our vintage-inspired Retro Photobooth delivers classic strips and instant prints with that warm, timeless feel your guests will treasure long after the night ends.",
    features: [
      "Instant 2×6 & 4×6 prints",
      "Vintage & modern filter options",
      "Custom-branded print templates",
      "Unlimited photo sessions",
      "Dedicated attendant included",
    ],
  },
  {
    name: "Mirror Photobooth",
    tag: "Glamorous & Interactive",
    emoji: "🪞",
    img: "https://images.unsplash.com/photo-1713519341017-431ec17a211a?w=600&h=480&fit=crop&auto=format",
    desc: "Floor-to-ceiling glamour. Our full-length mirror engages guests with animated prompts, fun animations, and a sleek touchscreen interface.",
    features: [
      "Full-length touch mirror display",
      "Animated prompts",
      "Signature & doodle",
      "Instant social sharing",
      "Elegant frame",
    ],
  },
  {
    name: "Enclosed Photobooth",
    tag: "Private Experience",
    emoji: "🎞️",
    img: "https://images.unsplash.com/photo-1583258919354-95996dcc7ea2?w=600&h=480&fit=crop&auto=format",
    desc: "A private booth where guests can truly be themselves and create unforgettable memories.",
    features: [
      "Private enclosure",
      "Seats up to 6",
      "GIF & Boomerang",
      "Backdrop options",
      "Online gallery",
    ],
  },
  {
    name: "Video Guestbook",
    tag: "Modern Keepsake",
    emoji: "🎤",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=480&fit=crop&auto=format",
    desc: "Capture heartfelt video messages that you'll cherish forever.",
    features: [
      "HD recording",
      "Guest prompts",
      "Highlight reel",
      "7-day delivery",
      "Unlimited messages",
    ],
  },
];

const OurBooths = () => {
  const [active, setActive] = useState(0);

  const booth = booths[active];

  return (
    <section id="our-booths" className="py-24 bg-base-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#C4956A] uppercase tracking-[0.15em] font-semibold text-xs">
            What We Offer
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Four Ways to Capture the Night
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {booths.map((item, index) => (
            <Button
              key={item.name}
              onClick={() => setActive(index)}
              variant={active === index ? "primary" : "outline"}
              className="min-w-40 rounded-full"
              size="md"
            >
              <span>{item.emoji}</span>
              <span>{item.name}</span>
            </Button>
          ))}
        </div>

        {/* Card */}
        <div className="card lg:card-side bg-base-200 shadow-sm z mt-12 overflow-hidden">
          {/* Image */}
          <figure className="lg:w-1/2">
            <img
              src={booth.img}
              alt={booth.name}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </figure>

          {/* Content */}
          <div className="card-body lg:w-1/2">
            <div className="text-[#C4956A] uppercase tracking-[0.15em] font-semibold text-xs">
              {booth.tag}
            </div>

            <h3
              className="card-title text-3xl mt-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {booth.name}
            </h3>

            <p className="text-base-content/70 leading-8">{booth.desc}</p>

            <div className="space-y-3 mt-4">
              {booth.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-warning/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-warning" />
                  </div>

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="card-actions mt-8 gap-3">
              <Button className="group">
                Book This Booth
                <ArrowRight className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBooths;
