import Footer from "@/components/Footer/Footer";
import { LandingHero } from "@/components/LandingHero/LadningHero";
import { LandingNavbar } from "@/components/LandingNav/LandingNav";

import { Montserrat } from "next/font/google";
import React from "react";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});
const LadingPage = () => {
  return (
    <div>
      {/* Nav Section */}
      <LandingNavbar />
      <LandingHero />
      <Footer />
    </div>
  );
};

export default LadingPage;
