"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
  GraduationCap,
  BugOff,
  Languages,
  Kanban,
  Mail,
  Hash,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/FreeCounter/FreeCounter";

const poppins = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Bug Fixer",
    icon: BugOff,
    color: "text-orange-700",
    href: "/bug-fixer",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },

  {
    label: "Grammar correction",
    icon: GraduationCap,
    color: "text-emerald-500",
    href: "/grammar-correction",
  },

  {
    label: "Translation",
    icon: Languages,
    href: "/translation",
    color: "text-yellow-500",
  },
  {
    label: "Lesson Plan Writer",
    icon: Kanban,
    href: "/lesson-plan-writer",
    color: "text-sky-500",
  },
  {
    label: "Email writer",
    icon: Mail,
    href: "/email-writer",
    color: "text-rose-500",
  },
  {
    label: "Blog writer",
    icon: Hash,
    href: "/blog-writer",
    color: "text-[#2ec4b6]",
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center pl-3 mb-14"
        >
          <div className="relative h-9 w-9 mr-3">
            <Image
              fill
              alt="Logo"
              src="/logo.png"
            />
          </div>
          <h1
            className={cn(
              "text-2xl font-bold",
              poppins.className
            )}
          >
            AIVA
          </h1>
        </Link>
        <div className="space-y-1 -mt-5">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    "h-5 w-5 mr-3",
                    route.color
                  )}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter
        apiLimitCount={apiLimitCount}
        isPro={isPro}
      /> */}
    </div>
  );
};
