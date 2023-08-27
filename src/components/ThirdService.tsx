import { thirdService } from "../constants";
import Image from "next/image";
import { useState } from "react";
import Accordion from "./Accordion";

const ThirdService = () => {
  return (
    <section>
      {thirdService.map((content) => (
        <div
          key={content.id}
          className=" space-y-5 md:container mx-auto my-20 sm:space-y-10  px-5 sm:px-10 md:px-14 "
        >
          <div className="grid relative [@media(max-width:900px)]:h-[300px] rounded-xl">
            <Image
              width="1100"
              src={content.Image}
              className="w-full h-full object-cover rounded-xl"
              alt="Group Work"
              height="403"
            />
          </div>
          <div className="flex flex-col gap-x-5 justify-between space-y-7 md:flex-row md:space-y-0 ">
            <h3 className="text-center mx-auto md:mx-0 md:text-left max-w-2xl md:max-w-lg text-[26px] leading-8 sm:leading-[50px] xs:text-3xl  tracking-tight text-gray-900 sm:text-4xl">
              {content.title}
            </h3>

            <div className="p-4  w-full  mx-auto md:mx-0 max-w-lg sm:max-w-xl md:max-w-md">
              <Accordion
                question="We connect our customers with the best?"
                answer="At our core, we are dedicated to delivering unparalleled excellence to our customers. We tirelessly seek out the finest solutions that cater to their unique needs. Our commitment to quality knows no bounds, ensuring that each connection we facilitate is nothing short of exceptional. With a deep focus on customer satisfaction, we strive to exceed expectations at every turn."
              />
              <Accordion
                question="Android research & development rockstar?"
                answer="Behold our Android Research & Development team - true rockstars in their field! They are the driving force behind our innovative strides in the realm of Android technology. With a harmonious blend of expertise and creativity, our team pioneers groundbreaking solutions that push the boundaries of what's possible. From crafting seamless user experiences to unraveling complex challenges, they're the beating heart of our technological advancement."
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThirdService;
