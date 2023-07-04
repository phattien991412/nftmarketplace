import React from 'react';

import { PiRocketLaunch } from "react-icons/pi"

import Button from '../ReuseComponents/Button';
import BlurredImage from '../ReuseComponents/BlurredImage';

const Banner = () => {
    const count = [
        {
            count: "240K+",
            title: "Total Sale"
        },
        {
            count: "100K+",
            title: "Autions"
        },
        {
            count: "240K+",
            title: "Artists"
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
            <div>
                <h1 className='text-[36px] lg:text-[67px]'>Discover digital art & Collect NFTs</h1>
                <p className='py-8'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                <Button text={"Get Started"} icon={<PiRocketLaunch/>} />
                
                <ul className='flex items-center flex-wrap lg:flex-nowrap gap-20 py-8'>
                    {
                        count.map((item) => (
                            <li key={item.title} className='' >
                                <h4 className='text-3xl font-semibold'>{item.count}</h4>
                                <p className='text-base py-2'>{item.title}</p>
                            </li>
                        ))
                    }
                </ul>
            
            </div>
            <div>
                <BlurredImage src={"/images/hero.gif"} width={300} height={300} alt={"hero"}  />
            </div>
        </div>
    );
};

export default Banner;