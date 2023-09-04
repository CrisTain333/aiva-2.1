import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        {/* <Sidebar
          isPro={isPro}
          apiLimitCount={apiLimitCount}
        /> */}
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
