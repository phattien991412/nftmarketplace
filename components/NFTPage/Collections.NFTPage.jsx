import React from 'react';
import ListCard from '../ReuseComponents/ListCard';
import Button from '../ReuseComponents/Button';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const Collections = () => {
    const data = [
        {
          cover: "/images/marketplace.webp",
          title: "Magic Mushroom 0325",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace1.webp",
          title: "Happy Robot 032",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace2.webp",
          title: "Happy Robot 024",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace3.webp",
          title: "Designer Bear",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace4.webp",
          title: "Colorful Dog 0356",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace5.webp",
          title: "Dancing Robot 0312",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace6.webp",
          title: "Cherry Blossom Girl 035",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace7.webp",
          title: "Space Travel",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace8.webp",
          title: "Sunset Dimension",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace9.webp",
          title: "Desert Walk",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace10.webp",
          title: "IceCream Ape 0324",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        },
        {
          cover: "/images/marketplace11.webp",
          title: "Colorful Dog 0344",
          name: "Orbitian",
          avatar: "/images/robotica.webp"
        }
      ];
    return (
        <>
            <div className='block lg:flex justify-between items-center my-20'>
                <h3 className='my-8 lg:my-0'>More from this artist</h3>
                <Link href={"/artis/animakid"}>
                <Button text={"Go To Artist Page"} icon={<BsArrowRight/>} className={"bg-transparent border-2 border-button"} />
                </Link>
            </div>
            <ListCard data={data} className={"bg-secondary"} alt={"nft"} />
        </>
    );
};

export default Collections;