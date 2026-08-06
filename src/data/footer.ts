import type { LucideIcon } from "lucide-react";
import { Phone, Mail, MapPin } from "lucide-react";

import InstagramIcon from "../assets/icons/instagram.svg";
import FacebookIcon from "../assets/icons/facebook.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";

export interface FooterLink {
  label: string;
  href?: string | null;
  booth?: string;
  icon?: LucideIcon;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export const footerLinks: FooterSection[] = [
  {
    title: "Our Booths",
    links: [
      { label: "Retro Photobooth", booth: "retro" },
      { label: "Mirror Photobooth", booth: "mirror" },
      { label: "Enclosed Photobooth", booth: "enclosed" },
      { label: "Look Up Photobooth", booth: "lookup" },
      { label: "Video Guestbook", booth: "video" },
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
    title: "Contact Us",
    links: [
      {
        label: "+63 916 690 2717",
        href: null,
        icon: Phone,
      },
      {
        label: "magnifiedmem@gmail.com",
        href: null,
        icon: Mail,
      },
      {
        label: "Lipa City, Batangas",
        href: null,
        icon: MapPin,
      },
    ],
  },
];

export const socials: SocialLink[] = [
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