import React, { useState } from "react";
import Browse from "./Browse.MarketplacePage";
import ListNFT from "./ListNFT.MarketplacePage";

const MarketplacePage = () => {
  const [select, setSelect] = useState("NFTs");
  const title = ["NFTs", "Colections"];
  return (
    <>
      <div className="w-[90%] xl:w-[70%] mx-auto mt-10">
        <Browse />
      </div>
      <div>
        <div className="grid grid-cols-2 w-[90%] xl:w-[70%] mx-auto mt-10 text-center">
          {title.map((item) => (
            <div key={item} onClick={() => setSelect(item)} className={`${select === item && "border-b-4 border-text"} cursor-pointer pb-2`}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="bg-secondary">
          <div className="w-[90%] xl:w-[70%] mx-auto pt-6 pb-20">
            <ListNFT type={select} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketplacePage;
