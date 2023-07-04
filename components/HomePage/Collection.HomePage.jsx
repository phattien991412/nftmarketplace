import React from "react";
import Link from "next/link";

import BlurredImage from "../ReuseComponents/BlurredImage";

const Collection = () => {
  const data = [
    {
      cover: "/images/collectionp3.webp",
      images: ["/images/collections5.webp", "/images/collections1.webp"],
      card: "DSGN Animals",
      avatar: "/images/avatar3.webp",
      name: "MrFox"
    },
    {
      cover: "/images/collectionp1.webp",
      images: ["/images/collections2.webp", "/images/collections6.webp"],
      card: "Magic Mushrooms",
      avatar: "/images/avatar1.webp",
      name: "Shroomie"
    },
    {
      cover: "/images/collectionp2.webp",
      images: ["/images/collections3.webp", "/images/collections4.webp"],
      card: "Disco Machines",
      avatar: "/images/avatar2.webp",
      name: "BeKind2Robots"
    }
  ];
  return (
    <div className="mt-20">
      <h3>Trending Collection</h3>
      <p>Checkout our weekly updated trending collection.</p>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((item) => (
          <div key={item.card}>
            <div>
              <BlurredImage
                className={
                  "hover:scale-90 cursor-pointer transition-all duration-500"
                }
                src={item.cover}
                width={300}
                height={400}
                alt={"collection"}
              />
            </div>
            <ul className="h-[100px] flex items-center my-8 gap-4">
              {item.images.map((image) => (
                <li key={image} className="h-[70px] w-[70px] lg:h-[100px] lg:w-[100px]">
                  <BlurredImage
                    className={
                      "rounded-[20px] transition-all duration-500 hover:scale-90 cursor-pointer"
                    }
                    src={image}
                    width={100}
                    height={100}
                    alt={"collection"}
                  />
                </li>
              ))}
              <li className="grid place-items-center font-semibold h-[70px] w-[70px] lg:h-[100px] lg:w-[100px] bg-button rounded-[20px] cursor-pointer transition-all duration-500 hover:scale-90 ">
                <p>1025+</p>
              </li>
            </ul>
            <h5 className="text-[22px] font-semibold">{item.card}</h5>
            <div className="flex items-center gap-4 py-4">
              <Link href={"/artis"} passHref >
                <BlurredImage
                  src={item.avatar}
                  width={50}
                  height={50}
                  alt={"avatar"}
                />
              </Link>
              <p className="text-base">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
