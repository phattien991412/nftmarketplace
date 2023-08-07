import React from "react";
import Link from "next/link";

import AOS from "./AOS";
import BlurredImage from "./BlurredImage";

const ListCard = ({ data, alt, className }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {data.length > 0
        ? data.map(item =>
            <div key={item.avatar} className=" cursor-pointer">
              <AOS
                className={
                  alt === "discovery"
                    ? "fadeRight"
                    : alt === "get's started" ? "fadeLeft" : "fadeUp"
                }
              >
                <Link href={"/nft/orbitians"} passHref>
                  <div className="rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
                    <BlurredImage
                      className={"hover:scale-125 transition-all duration-500"}
                      src={item.cover}
                      width={400}
                      height={400}
                      alt={alt}
                    />
                  </div>
                  <div
                    className={`${className} rounded-br-[20px] rounded-bl-[20px] `}
                  >
                    <div className="p-8">
                      <h5>
                        {item.title}
                      </h5>
                      <div className="flex items-center gap-4 my-4">
                        <BlurredImage
                          src={item.avatar}
                          width={100}
                          height={100}
                          alt={"avatar"}
                        />
                        <p>
                          {item.name}
                        </p>
                      </div>

                      <div className="flex justify-between font-mono">
                        <div>
                          <p className="text-text text-[12px]">Price</p>
                          <p className="text-base">1.63 ETH</p>
                        </div>

                        <div className="text-right">
                          <p className="text-text text-[12px]">Highest Bid</p>
                          <p className="text-base">0.33 wETH</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AOS>
            </div>
          )
        : <div className="w-full text-3xl text-text font-semibold">
            Nothing to show here
          </div>}
    </div>
  );
};

export default ListCard;
