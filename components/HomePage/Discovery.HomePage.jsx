import React from "react";

import { AiOutlineEye } from "react-icons/ai";

import Button from "../ReuseComponents/Button";
import BlurredImage from "../ReuseComponents/BlurredImage";

const Discovery = () => {
  const data = [
    {
      cover: "/images/discovery.webp",
      avatar: "/images/avatar4.webp",
      title: "Distant Galaxy",
      name: "MoonDancer"
    },
    {
      cover: "/images/discovery1.webp",
      avatar: "/images/avatar5.webp",
      title: "Life On Edena",
      name: "NebulaKid"
    },
    {
      cover: "/images/discovery2.webp",
      avatar: "/images/avatar6.webp",
      title: "AstroFiction",
      name: "Spaceone"
    }
  ];
  return (
    <div className="mt-20">
      <h3>Discover More NFTs</h3>
      <div className="block lg:flex justify-between items-center mb-14">
        <p className="lg:py-0 py-4">Explore new trending NFTs</p>
        <Button
          text={"See All"}
          icon={<AiOutlineEye />}
          color={"transparent border border-button"}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.avatar}
            className="hover:scale-90 transition-all duration-500 cursor-pointer"
          >
            <div className="rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
              <BlurredImage
                src={item.cover}
                width={400}
                height={400}
                alt={"discovery"}
              />
            </div>
            <div className="bg-[#3B3B3B] rounded-br-[20px] rounded-bl-[20px] ">
              <div className="p-8">
                <h5>{item.title}</h5>
                <div className="flex items-center gap-4 my-4">
                  <div>
                    <BlurredImage
                      src={item.avatar}
                      width={100}
                      height={100}
                      alt={"avatar"}
                    />
                  </div>
                  <p>{item.name}</p>
                </div>

                <div className="flex justify-between font-mono">
                  <div>
                    <p className="text-[#858584] text-[12px]">Price</p>
                    <p className="text-base">1.63 ETH</p>
                  </div>

                  <div className="text-right">
                    <p className="text-[#858584] text-[12px]">Highest Bid</p>
                    <p className="text-base">0.33 wETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discovery;
