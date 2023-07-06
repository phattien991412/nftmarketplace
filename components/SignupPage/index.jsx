import React from "react";
import BlurredImage from "../ReuseComponents/BlurredImage";
import Input from "../ReuseComponents/Input";
import Button from "../ReuseComponents/Button";

const SignupPage = () => {
  return (
    <div className="block lg:flex gap-20 items-center lg:-mb-20  w-[90%] mx-auto">
      <div className="w-[45%] hidden lg:block">
        <BlurredImage
          src={"/images/signup.webp"}
          height={700}
          width={700}
          className={"h-[700px]"}
          alt={"sign up"}
        />
      </div>

      <div className="w-full lg:w-[55%]">
        <div className="mt-10 mb-4">
          <h2 className="text-[51px]">Create account</h2>
          <p className="py-4 lg:w-3/5">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
        </div>

        <form className="lg:w-1/2" action="">
          <Input id="name" type="text" label="Username" />
          <Input id="email" type="email" label="Email Address" />
          <Input id="password" type="password" label="Password" />
          <Input id="password" type="password" label="Confirm Password" />
          <Button text={"Create Account"} className={"w-full"} />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
