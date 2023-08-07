import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { AiOutlineArrowUp } from "react-icons/ai";

const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

const Layout = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  const handleToTop = () => {
    const scrollDuration = 800; // Duration of the scroll animation in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Amount to scroll on each frame

    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  const handleShowButton = () => {
    if (window.scrollY >= 800) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowButton);

    return () => window.removeEventListener("scroll", handleShowButton);
  }, []);

  return (
    <div className=" max-w-screen-[100vw] overflow-x-hidden">
      <Header />
      <main>
        {children}
      </main>
      <div
        onClick={handleToTop}
        className={`${showButton
          ? "right-10"
          : "-right-20"} totop opacity-1 grid place-items-center w-14 h-14 rounded-full bg-button text-white text-3xl fixed bottom-20 transition-all duration-500 cursor-pointer hover:bg-[#8047cb]`}
      >
        <AiOutlineArrowUp />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
