import React from "react";

import { PiRocketLaunch } from "react-icons/pi";

import Button from "../ReuseComponents/Button";
import BlurredImage from "../ReuseComponents/BlurredImage";
import Count from "../ReuseComponents/Count";

const Banner = () => {
  const count = [
    {
      count: "240K+",
      title: "Total Sale"
    },
    {
      count: "100K+",
      title: "Autions"
    },
    {
      count: "240K+",
      title: "Artists"
    }
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
      <div className="fadeLeft">
        <h1 className="text-clamp">
          Discover digital art & Collect NFTs
        </h1>
        <p className="py-8">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
        <Button text={"Get Started"} icon={<PiRocketLaunch />} />

        <Count data={count} />
      </div>
      <div className="fadeRight">
        <BlurredImage
          src={"/images/hero.gif"}
          width={300}
          height={300}
          alt={"hero"}
        />
      </div>
    </div>
  );
};

export default Banner;
