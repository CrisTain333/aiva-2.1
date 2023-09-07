import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" rounded-lg  m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4">
          <span className="block text-sm text-white text-center ">
            Developed By{" "}
            <Link
              className="text-sky-500"
              href="https://github.com/cristain333"
              target="_blank"
            >
              Sukanta
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
