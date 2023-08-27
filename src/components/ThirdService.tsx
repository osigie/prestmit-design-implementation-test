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
                answer="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. "
              />
              <Accordion
                question="Android research & development rockstar?"
                answer="Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis."
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThirdService;
