import {
  Palette,
  PenTool,
  Code,
  Pen,
} from "lucide-react";

export const currentYear = new Date().getFullYear();

export const companyName = "Vehutech";

export const shortBreif =
  "A renowned PR and Media firm offering complete range of services from designed photography to digital marketing since 2014.";

export const services = [
  {
    name: "Design",
    href: "/#design",
    icon: Pen,
  },
  {
    name: "Web Development",
    href: "/#web-dev",
    icon: Code,
  },
  {
    name: "Mobile Dev",
    href: "/#mobile-dev",
    icon: PenTool,
  },
  {
    name: "Desktop Dev",
    href: "/#desktop-dev",
    icon: Palette,
  },
];
