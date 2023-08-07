import React from "react";

import { AiOutlineMail } from "react-icons/ai";

import Button from "../ReuseComponents/Button";
import BlurredImage from "../ReuseComponents/BlurredImage";

const MailBox = () => {
  return (
    <div className="mt-20 bg-secondary rounded-[20px]">
      <div className="p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <BlurredImage
            src={"/images/astronaut.webp"}
            width={300}
            height={300}
            alt={"join"}
          />
        </div>
        <div>
          <h3>Join our weekly digest</h3>
          <p className="py-2">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <div className="pt-8 block lg:flex items-center self-stretch mix-blend-normal relative">
            <input
              className="text-black px-6 py-4 rounded-[20px] w-full flex flex-1 my-4"
              type="text"
              placeholder="Enter your email here"
            />
            <div className="lg:absolute -right-4">
              <Button text={"Subscribe"} icon={<AiOutlineMail />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailBox;
