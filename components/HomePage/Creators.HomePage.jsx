import React from "react";
import Link from "next/link";

import { PiRocketLaunch } from "react-icons/pi";

import Button from "../ReuseComponents/Button";
import BlurredImage from "../ReuseComponents/BlurredImage";
import AOS from "../ReuseComponents/AOS";

const Creators = () => {
  const data = [
    {
      avatar: "/images/creator.webp",
      name: "Keepitreal",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator1.webp",
      name: "DigiLab",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator2.webp",
      name: "GravityOne",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator3.webp",
      name: "Juanie",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator4.webp",
      name: "BlueWhale",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator5.webp",
      name: "Mr Fox",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator6.webp",
      name: "Shroomie",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator7.webp",
      name: "Robotica",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator8.webp",
      name: "RustyRobot",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator9.webp",
      name: "Animakid",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator10.webp",
      name: "Dotgu",
      total: "34.53 ETH"
    },
    {
      avatar: "/images/creator11.webp",
      name: "Ghiblier",
      total: "34.53 ETH"
    }
  ];
  return (
    <div className="mt-20">
      <h3>Top creators</h3>
      <div className="flex justify-between items-center mb-14">
        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        <Button
          text={"View Rankings"}
          icon={<PiRocketLaunch />}
          className={"transparent border border-button"}
        />
      </div>

      <div className="grid grid-cols-auto gap-8 items-center">
        {data.map((item, index) =>
          <AOS key={item.avatar} index={index} className="fadeUp" >
            <div
              className="relative bg-secondary p-5 rounded-[20px] hover:scale-90 transition-all duration-500 cursor-pointer"
            >
              <Link href={"/artis/animakid"} passHref>
                <div className="grid place-items-center">
                  <BlurredImage
                    src={item.avatar}
                    width={300}
                    height={300}
                    alt={"avatar"}
                  />
                </div>

                <div className="text-center mt-5">
                  <h5>
                    {item.name}
                  </h5>
                  <p className="font-mono">
                    <span className="text-text">Total Sales:</span>
                    {item.total}
                  </p>
                </div>

                <p className="absolute top-4 left-4 grid place-items-center h-10 w-10 bg-primary text-text rounded-full">
                  {index + 1}
                </p>
              </Link>
            </div>
          </AOS>
        )}
      </div>
    </div>
  );
};

export default Creators;
