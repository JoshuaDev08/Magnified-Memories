import InstagramIcon from "../assets/icons/instagram.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";

export const footerLinks = [
  {
    title: "Our Booths",
    links: [
      { label: "Retro Photobooth", href: "#our-booths" },
      { label: "Mirror Photobooth", href: "#our-booths" },
      { label: "Enclosed Photobooth", href: "#our-booths" },
      { label: "Look Up Photobooth", href: "#our-booths" },
      { label: "Video Guestbook", href: "#our-booths" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "Weddings", href: null },
      { label: "Birthdays", href: null },
      { label: "Corporate Events", href: null },
      { label: "School Events", href: null },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Gallery", href: "#gallery" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
];

export const socials = [
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
