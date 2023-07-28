import React from "react";
import BlurredImage from "../ReuseComponents/BlurredImage";
import Button from "../ReuseComponents/Button";
import { PiCopy } from "react-icons/pi";
import { BsInstagram, BsPlusLg } from "react-icons/bs";
import Count from "../ReuseComponents/Count";
import { RxDiscordLogo, RxTwitterLogo } from "react-icons/rx";
import { AiOutlineYoutube } from "react-icons/ai";

const Banner = () => {
  const count = [
    {
      count: "250K+",
      title: "Volume"
    },
    {
      count: "50K+",
      title: "NFTs Sold"
    },
    {
      count: "3000K+",
      title: "Followers"
    }
  ];
  return (
    <div>
      <div className="relative w-full">
        <BlurredImage
          src={"/images/banner-profile.webp"}
          width={1200}
          height={400}
          className={"h-[30vh]"}
          alt={"cover profile"}
        />
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-[15%]">
          <BlurredImage
            src={"/images/animakid-profile.webp"}
            width={100}
            height={100}
            alt={"avatar"}
          />
        </div>
      </div>

      <div className="w-[90%] xl:w-[70%] mx-auto mt-20">
        <div className="block lg:flex justify-between items-center mb-4">
          <h2>Animakid</h2>
          <div className="block sm:flex gap-4 mt-4 lg:mt-0">
            <Button text={"0xc0E3...B79C"} icon={<PiCopy />} />
            <Button
              text={"Follow"}
              icon={<BsPlusLg />}
              color={"transparent"}
              className={"border-2 border-button mt-4 sm:mt-0"}
            />
          </div>
        </div>

        <Count data={count} />

        <div>
          <h5 className="font-mono text-text">Bio</h5>
          <p>The internet's friendliest designer kid.</p>
        </div>
        <div className="text-text mt-8">
          <h5 className="font-mono">Links</h5>
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
