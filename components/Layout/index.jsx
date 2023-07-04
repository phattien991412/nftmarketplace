import React from "react";
import dynamic from "next/dynamic";

import { AiOutlineArrowUp } from "react-icons/ai";

const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col max-w-screen-[100vw] overflow-x-hidden">
      <Header />
      <main className="flex-grow-1">{children}</main>
      <div
        // onClick={handleToTop}
        className="totop opacity-1 grid place-items-center w-14 h-14 rounded-full bg-button text-white text-3xl fixed right-10 bottom-20 cursor-pointer hover:bg-[#8047cb]"
      >
        <AiOutlineArrowUp />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
