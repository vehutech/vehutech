import { Palette, PenTool, Code, Pen } from "lucide-react";

export const currentYear = new Date().getFullYear();

export const companyName = "Vehutech";

export const shortBrief =
  "I am a passionate software engineer dedicated to crafting modern interactions and intuitive design experiences that just work.";
  
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

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jon Breitegan",
    company: "Spectrum",
    text: "Evolvion company absolutely nailed it! Their professionalism in website development made the process smooth and enjoyable.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Grant Bolton",
    company: "Bolton & AL",
    text: "Expert SaaS developers! They built a scalable, high-performing platform with seamless features. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Michelle Blake",
    company: "Auto-Auctions",
    text: "We've had an amazing experience with Evolvion—excellent communication, efficiency, and a deep understanding of our goals.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sarah Chen",
    company: "TechFlow",
    text: "Outstanding work! The team delivered beyond our expectations with innovative solutions and exceptional attention to detail.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "David Rodriguez",
    company: "InnovateLab",
    text: "Professional, reliable, and creative. Evolvion transformed our vision into a powerful digital platform that drives results.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
  },
];
