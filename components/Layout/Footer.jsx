import React from "react";
import Link from "next/link";

import { BsInstagram } from "react-icons/bs";
import { RxDiscordLogo, RxTwitterLogo } from "react-icons/rx";
import { AiOutlineMail, AiOutlineYoutube } from "react-icons/ai";

import Button from "../ReuseComponents/Button";
import BlurredImage from "../ReuseComponents/BlurredImage";

const Footer = () => {
  return (
    <div className="mt-20 w-[90%] xl:w-[70%] mx-auto px  ">
      <div className="grid grid-cols-5 gap-x-4 items-start lg:px-16 border-b-2 border-[#858584] pb-10">
        <div className="col-span-5 lg:col-span-2">
          <Link href={"/"} passHref>
            <div className="flex items-center gap-x-2  ">
              <div className="cursor-pointer">
                <BlurredImage
                  className="object-scale-down"
                  width={30}
                  height={30}
                  src="/images/logo.webp"
                  alt="logo"
                />
              </div>
              <h2 className="text-2xl font-semibold">
                NFT Marketplace
              </h2>
            </div>
          </Link>

          <ul className="text-base mt-8">
            <li className="my-4">
              NFT marketplace UI created with Anima for Figma.
            </li>
            <li className="my-4">Join our community</li>
            <li className="my-4">
              <ul className="flex gap-4 text-2xl">
                <li>
                  <RxDiscordLogo />
                </li>
                <li>
                  <AiOutlineYoutube />
                </li>
                <li>
                  <RxTwitterLogo />
                </li>
                <li>
                  <BsInstagram />
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="col-span-5 md:col-span-2 lg:col-span-1">
          <h2 className="text-2xl w-full font-semibold">Explore</h2>

          <ul className="mt-8">
            <li className="my-4">Marketplace</li>
            <li className="my-4">Rankings</li>
            <li className="my-4">Connect a wallet</li>
          </ul>
        </div>

        <div className="col-span-5 md:col-span-3 lg:col-span-2">
          <h2 className="text-2xl w-full font-semibold">
            Join our weekly digest
          </h2>

          <ul className="mt-8 ">
            <li className="my-4">
              Get exclusive promotions & updates straight to your inbox.
            </li>
            <li className="my-4">Rankings</li>
            <li className="my-4">
              <div className="pt-8 flex items-center self-stretch mix-blend-normal relative">
                <input
                  className="text-black px-6 py-4 rounded-[20px] w-full flex flex-1"
                  type="text"
                  placeholder="Enter your email here"
                />
                <div className="absolute right-0">
                  <Button text={"Subscribe"} icon={<AiOutlineMail />} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="pt-5 pb-10">Ⓒ NFT Market. Use this template freely.</p>
    </div>
  );
};

export default Footer;
