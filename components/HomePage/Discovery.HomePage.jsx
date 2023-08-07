import React from "react";

import { AiOutlineEye } from "react-icons/ai";

import Button from "../ReuseComponents/Button";
import ListCard from "../ReuseComponents/ListCard";

const Discovery = () => {
  const data = [
    {
      cover: "/images/discovery.webp",
      avatar: "/images/moondancer.webp",
      title: "Distant Galaxy",
      name: "MoonDancer"
    },
    {
      cover: "/images/discovery1.webp",
      avatar: "/images/nebulakid.webp",
      title: "Life On Edena",
      name: "NebulaKid"
    },
    {
      cover: "/images/discovery2.webp",
      avatar: "/images/keepitreal.webp",
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

      <ListCard data={data} className={"bg-secondary"} alt={"discovery"} />
    </div>
  );
};

export default Discovery;
