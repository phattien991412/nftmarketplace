import React from "react";

import BlurredImage from "../ReuseComponents/BlurredImage";

const Category = () => {
    const data = [
        {
            cover: "/images/category.webp",
            icon: "/images/PaintBrush.webp",
            category: "Art"
        },
        {
            cover: "/images/category1.webp",
            icon: "/images/Swatches.webp",
            category: "Collectibles"
        },
        {
            cover: "/images/category2.webp",
            icon: "/images/MusicNotes.webp",
            category: "Music"
        },
        {
            cover: "/images/category3.webp",
            icon: "/images/Camera.webp",
            category: "Photography"
        },
        {
            cover: "/images/category4.webp",
            icon: "/images/VideoCamera.webp",
            category: "Video"
        },
        {
            cover: "/images/category5.webp",
            icon: "/images/MagicWand.webp",
            category: "Utility"
        },
        {
            cover: "/images/category6.webp",
            icon: "/images/Basketball.webp",
            category: "Sport"
        },
        {
            cover: "/images/category7.webp",
            icon: "/images/Planet.webp",
            category: "Virtual Worlds"
        },
    ]
  return (
    <div className="mt-20">
      <h3>Browse Categories</h3>
     
     <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center ">
        {
            data.map((item) => (
                <div key={item.category} className="hover:scale-90 transition-all duration-500 cursor-pointer w-full">
                    <div className="relative rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
                        <BlurredImage src={item.cover} width={300} height={300} alt={"category"} className={"blur-lg"} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <BlurredImage src={item.icon} width={100} height={100} alt={"category"} />
                        </div>
                    </div>
                    <div className="bg-secondary rounded-br-[20px] rounded-bl-[20px] ">
                        <h5 className="px-7 py-6">{item.category}</h5>
                    </div>
                </div>
            ))
        }
     </div>
    </div>
  );
};

export default Category;
