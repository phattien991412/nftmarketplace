import React from "react";

import Banner from "./Banner.HomePage";
import Collection from "./Collection.HomePage";
import Creators from "./Creators.HomePage";
import Category from "./Category.HomePage";
import Discovery from "./Discovery.HomePage";
import GetStart from "./GetStart.HomePage";
import MailBox from "./MailBox.HomePage";

const HomePage = () => {
  return (
    <>
      <div className="w-[90%] xl:w-[70%] mx-auto mt-10">
        <Banner />
        <Collection />
        <Creators />
        <Category />
        <Discovery />
      </div>
      <div
        style={{ backgroundImage: "url(/images/NFTHighlight.webp)" }}
        className="bg-cover bg-no-repeat h-[660px] mt-20 lg:bg-inherit bg-center"
      />
      <div className="w-[90%] xl:w-[70%] mx-auto mt-10">
        <GetStart />
        <MailBox/>
      </div>
    </>
  );
};

export default HomePage;
