import {
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  BugOff,
  GraduationCap,
  Languages,
} from "lucide-react";

export const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Bug Fixer",
    icon: BugOff,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/bug-fixer",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
  {
    label: "Grammar correction",
    icon: GraduationCap,
    href: "/grammar-correction",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Translation",
    icon: Languages,
    href: "/translation",
    bgColor: "bg-yellow-500/10",
    color: "text-yellow-500",
  },
];
