"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  return (
    <div className="text-white font-bold pt-[6rem] text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500  to-sky-400">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Code Generation.",
                "Bug Fixer.",
                "Translation.",
                "Grammar Correction.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={"/dashboard"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">No credit card required.</div>
    </div>
  );
};
