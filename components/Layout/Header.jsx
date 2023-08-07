import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaBars } from "react-icons/fa";

import BlurredImage from "../ReuseComponents/BlurredImage";
import Button from "../ReuseComponents/Button";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const route = useRouter();
  const [select, setSelect] = useState(route.pathname);
  const nav = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Marketplace",
      link: "/marketplace"
    },
    // {
    //   title: "Rankings",
    //   link: "/rankings"
    // },
    // {
    //   title: "Connect a wallet",
    //   link: "/wallet"
    // },
    {
      title: "Sign Up",
      link: "/signup"
    }
  ];
  return (
    <nav className="flex justify-between items-center my-10 w-[90%] mx-auto">
      <Link href={"/"} passHref>
        <div className="flex items-center gap-2 ">
          <div className="cursor-pointer w-[50px] h-[50px]">
            <BlurredImage
              className="object-scale-down"
              width={30}
              height={30}
              src="/images/logo.webp"
              alt="logo"
            />
          </div>
          <h2 className=" text-3xl xl:text-[40px] font-semibold">NFT Marketplace</h2>
        </div>
      </Link>
      <ul className="nav xl:flex gap-10 text-center items-center text-xl hidden">
        {nav.map((item) => (
          <li
            key={item.title}
            onClick={() => setSelect(item.link !== "/signup" ? item.link : "")}
            className={`${
              item.link === select ? "selected" : ""
            }`}
            style={{}}
          >
            <Link href={item.link} passHref >
              {item.link !== "/signup" ? item.title : <Button text={item.title} icon={<AiOutlineUser/>} />}
            </Link>
          </li>
        ))}
      </ul>
      <>
        <p
          // onClick={showDrawer}
          className="xl:hidden block"
        >
          <FaBars />
        </p>
        {/* 
        <Drawer
          className="w-1/2 h-screen"
          title={
            <Link href={"/"} onClick={() => setSelect("/")} passHref>
              <div className="flex items-center gap-2 ">
                <div className="cursor-pointer">
                  <BlurredImage
                    className="object-scale-down"
                    width={30}
                    height={30}
                    src="/images/logo.webp"
                    alt="logo"
                  />
                </div>
                <h2 className="text-[40px] font-semibold">Interno</h2>
              </div>
            </Link>
          }
          placement="left"
          onClose={onClose}
          open={open}
        >
          <ul className=" text-xl ">
            {nav.map((item) => (
              <li key={item.title} className="my-4">
                <Link href={item.link} passHref>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Drawer> */}
      </>
    </nav>
  );
};

export default Header;
