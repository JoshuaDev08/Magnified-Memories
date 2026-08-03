const defaultAddons = [
  {
    type: "Souvenir",
    name: "Keychain Station",
    img: "/images/addons/keychain.jpg",
    price: "₱1,500",
    pieces: "50 pcs",
  },
  {
    type: "Print Upgrade",
    name: "Magnetic Print",
    img: "/images/addons/magnetic.jpg",
    price: "₱500/hr",
  },
  {
    type: "Extra Hour",
    name: "Classic Print Extra Hour",
    img: "/images/addons/clock.jpg",
    price: "₱1,000/hr",
  },
  {
    type: "Extra Hour",
    name: "Magnetic Print Extra Hour",
    img: "/images/addons/clock.jpg",
    price: "₱1,300/hr",
  },
  {
    type: "LCD Guestbook",
    name: "LCD Guestbook",
    img: "/images/addons/video-guestbook.jpg",
    price: "₱2,500",
    description:
      "Guests can record heartfelt video messages using our elegant video guestbook, creating a digital keepsake for the couple or celebrant.",
  },
];

export const booths = [
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

    price: "Starting at ₱8,000",

    duration: "3 Hours",

    idealFor: ["Wedding", "Birthday", "Debut", "Corporate Event"],

    addons: defaultAddons,
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

    price: "Starting at ₱10,000",

    duration: "3 Hours",

    idealFor: ["Wedding", "Luxury Events", "Corporate"],

    addons: defaultAddons,
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

    price: "Starting at ₱14,500",

    duration: "3 Hours",

    idealFor: ["Wedding", "Birthday", "Couples"],

    addons: defaultAddons,
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

    price: "Starting at ₱6,000",

    duration: "Whole Event",

    idealFor: ["Wedding", "Birthday", "Debut"],

    addons: defaultAddons,
  },

  {
    name: "Look Up Booth",
    tag: "Open-Air Experience",
    emoji: "📸",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=480&fit=crop&auto=format",

    desc: "Designed for larger groups, our Look Up Booth features an overhead camera that captures everyone in the frame.",

    features: [
      "Overhead camera setup",
      "Fits large group photos",
      "Unlimited photo sessions",
      "Instant print-outs & digital copies",
      "Custom photo templates",
    ],

    price: "Starting at 15,000",

    duration: "3 Hours",

    idealFor: ["Wedding", "Corporate", "Large Parties"],

    addons: defaultAddons,
  },
];
