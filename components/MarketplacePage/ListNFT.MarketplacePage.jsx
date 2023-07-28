import React from "react";
import ListCard from "../ReuseComponents/ListCard";

const ListNFT = ({ type }) => {
  const data = [
    {
      cover: "/images/marketplace.webp",
      title: "Magic Mushroom 0325",
      name: "Shroomie",
      avatar: "/images/shroomie.webp"
    },
    {
      cover: "/images/marketplace1.webp",
      title: "Happy Robot 032",
      name: "BeKind2Robots",
      avatar: "/images/bekind.webp"
    },
    {
      cover: "/images/marketplace2.webp",
      title: "Happy Robot 024",
      name: "BeKind2Robots",
      avatar: "/images/bekind.webp"
    },
    {
      cover: "/images/marketplace3.webp",
      title: "Designer Bear",
      name: "Mr Fox",
      avatar: "/images/mrfox.webp"
    },
    {
      cover: "/images/marketplace4.webp",
      title: "Colorful Dog 0356",
      name: "Keepitreal",
      avatar: "/images/keepitreal.webp"
    },
    {
      cover: "/images/marketplace5.webp",
      title: "Dancing Robot 0312",
      name: "Robotica",
      avatar: "/images/robotica.webp"
    },
    {
      cover: "/images/marketplace6.webp",
      title: "Cherry Blossom Girl 035",
      name: "MoonDancer",
      avatar: "/images/moondancer.webp"
    },
    {
      cover: "/images/marketplace7.webp",
      title: "Space Travel",
      name: "NebulaKid",
      avatar: "/images/nebulakid.webp"
    },
    {
      cover: "/images/marketplace8.webp",
      title: "Sunset Dimension",
      name: "Animakid",
      avatar: "/images/animakid.webp"
    },
    {
      cover: "/images/marketplace9.webp",
      title: "Desert Walk",
      name: "Catch 22",
      avatar: "/images/catch22.webp"
    },
    {
      cover: "/images/marketplace10.webp",
      title: "IceCream Ape 0324",
      name: "Ice Ape Club",
      avatar: "/images/ape.webp"
    },
    {
      cover: "/images/marketplace11.webp",
      title: "Colorful Dog 0344",
      name: "PuppyPower",
      avatar: "/images/puppypower.webp"
    }
  ];
  return (
    <div className="mt-20">
      <ListCard data={type === "NFTs" ? data : []} className={"bg-primary"} alt={"nft"} />
    </div>
  );
};

export default ListNFT;
