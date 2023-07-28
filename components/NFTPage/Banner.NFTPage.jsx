import React from "react";
import BlurredImage from "../ReuseComponents/BlurredImage";
import Button from "../ReuseComponents/Button";
import { useCountdown } from "../ReuseComponents/useCountDown";
import { AiOutlineGlobal } from "react-icons/ai";

const Banner = () => {
  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterOneDay = NOW_IN_MS + ONE_DAY_IN_MS;

  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterOneDay);

  const tags = ["Animation", "illustration", "black", "moon"];

  return (
    <div>
      <BlurredImage
        src={"/images/nft-banner.webp"}
        className={"h-[560px]"}
        width={1400}
        height={500}
        alt={"nft"}
      />

      <div className="w-[90%] xl:w-[70%] mx-auto mt-10">
        <div className="block md:flex justify-between items-center">
          <div>
            <h2>The Orbitians</h2>
            <p className="text-text py-4">Minted on Sep 30, 2022</p>

            <h5 className="text-base text-text">Created By</h5>
            <div className="flex items-center gap-4 pt-4">
              {" "}
              <BlurredImage
                src={"/images/robotica.webp"}
                width={100}
                height={100}
                alt={"avatar"}
              />{" "}
              <p>Orbitian</p>
            </div>
          </div>

          <div className="bg-secondary rounded-[20px] grid place-items-center my-8 md:my-0">
            <div className="p-6">
              <p className="text-text text-base font-mono">Auction ends in:</p>
              <h3>
                {hours} : {minutes} : {seconds}
              </h3>
              <p className="text-base flex justify-between gap-8">
                <span>Hours</span> <span>Minutes</span> <span>Seconds</span>
              </p>
            </div>

            <div className="pb-6">
              <Button text={"Place Bid"} />
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-3/5">
          <h5 className="text-text text-base font-mono py-4">Description</h5>
          <p>
            The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
            blockchain. <br /> <br />
            There are all sorts of beings in the NFT Universe. The most advanced
            and friendly of the bunch are Orbitians. <br />
            <br />
            They live in a metal space machines, high up in the sky and only
            have one foot on Earth. These Orbitians are a peaceful race, but
            they have been at war with a group of invaders for many generations.
            The invaders are called Upside-Downs, because of their inverted
            bodies that live on the ground, yet do not know any other way to be.
            Upside-Downs believe that they will be able to win this war if they
            could only get an eye into Orbitian territory, so they've taken to
            make human beings their target.
          </p>
        </div>

        <div>
          <h5 className="text-text text-base font-mono py-4">Description</h5>
          <ul>
            <li className="flex items-center gap-4 text-[22px]">
              <AiOutlineGlobal /> <p>View on Etherscan</p>{" "}
            </li>
            <li className="flex items-center gap-4 text-[22px] my-2">
              <AiOutlineGlobal /> <p>View Original</p>{" "}
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-text text-base font-mono py-4">Tags</h5>
          <ul className="flex items-center flex-wrap md:flex-nowrap gap-4">
            {tags.map((item) => (
              <li key={item}>
                <Button text={item} color={"bg-secondary"} className={"rounded-[50px] text-center"}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
