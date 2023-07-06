import React, { useState } from "react";
import Banner from "./Banner.ProfilePage";
import ListNFT from "./ListNFT.ProfilePage";

const ProfilePage = () => {
  const [select, setSelect] = useState("Created");
  const title = ["Created", "Owned", "Colections"];
  return (
    <>
      <Banner />
      <div>
        <div className="grid grid-cols-3 w-[90%] xl:w-[70%] mx-auto mt-10 text-center">
          {title.map((item) => (
            <div
              key={item}
              onClick={() => setSelect(item)}
              className={`${
                select === item && "border-b-4 border-text"
              } cursor-pointer pb-2`}
            >
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

export default ProfilePage;
