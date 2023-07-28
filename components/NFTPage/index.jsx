import React from "react";
import Banner from "./Banner.NFTPage";
import Collections from "./Collections.NFTPage";

const NFTPage = () => {
  return (
    <>
      <Banner />
      <div className="w-[90%] xl:w-[70%] mx-auto mt-20">
        <Collections />
      </div>
    </>
  );
};

export default NFTPage;
