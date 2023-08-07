import React from "react";
import BlurredImage from "../ReuseComponents/BlurredImage";
import Input from "../ReuseComponents/Input";
import Button from "../ReuseComponents/Button";
import AOS from "../ReuseComponents/AOS";

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
          <AOS className="fadeRight" index="1">
            <Input id="name" type="text" label="Username" />
          </AOS>
          <AOS className="fadeRight" index="2">
            <Input id="email" type="email" label="Email Address" />
          </AOS>
          <AOS className="fadeRight" index="3">
            <Input id="password" type="password" label="Password" />
          </AOS>
          <AOS className="fadeRight" index="4">
            <Input id="password" type="password" label="Confirm Password" />
          </AOS>
          <AOS className="fadeRight" index="5">
            <Button text={"Create Account"} className={"w-full"} />
          </AOS>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
