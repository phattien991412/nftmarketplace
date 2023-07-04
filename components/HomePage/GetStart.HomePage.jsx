import React from "react";

import BlurredImage from "../ReuseComponents/BlurredImage";

const GetStart = () => {
  const data = [
    {
      icon: "/images/icon.webp",
      title: "Setup Your wallet",
      text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
    },
    {
      icon: "/images/icon1.webp",
      title: "Create Collection",
      text: "Upload your work and setup your collection. Add a description, social links and floor price."
    },
    {
      icon: "/images/icon2.webp",
      title: "Start Earning",
      text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
    }
  ];
  return (
    <div className="mt-20">
      <div>
        <h3>How it works</h3>
        <p className="pt-4">Find out how to get started</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {data.map((item) => (
          <div key={item.icon} className="bg-[#3B3B3B] rounded-[20px]">
            <div className="p-8 pt-3">
              <div className="grid place-items-center">
                <BlurredImage
                  src={item.icon}
                  width={200}
                  height={200}
                  alt={"get's started"}
                />
              </div>

              <div className="pt-5 text-center">
                <h5 className="pb-4">{item.title}</h5>
                <p className="text-base">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStart;
