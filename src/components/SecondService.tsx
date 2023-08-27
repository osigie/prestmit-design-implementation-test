import { secondService } from "../constants";
import Image from "next/image";

const SecondService = () => {
  return (
    <section className="md:container mx-auto mt-20 px-5 sm:px-10">
      {secondService.map((service, index) => (
        <div
          key={service.id}
          className={`mb-20 md:mb-24 grid sm:grid-cols-5 md:grid-cols-2 gap-x-10   max-w-md sm:max-w-full mx-auto`}
        >
          <div
            className={` ${
              index === 1 ? "sm:order-last  sm:justify-end w-full" : ""
            } sm:col-span-2 md:col-span-1 flex justify-center`}
          >
            <Image
              src={service.Image}
              className="hover:scale-105 duration-300 object-cover rounded-xl max-w-full h-auto"
              alt={service.id}
              width="494"
              height="506"
            />
          </div>
          <div className=" sm:col-span-3  md:col-span-1 pt-10 sm:pt-24">
            <h3 className="mb-8 text-[26px] leading-8 sm:leading-[50px] xs:text-3xl  tracking-tight text-gray-900 sm:text-4xl">
              {service.title}
            </h3>
            {service.content.map((content) => {
              const IconContent = content.icon;
              return (
                <div
                  key={content.content}
                  className={` ${
                    index === 1 &&
                    "group p-4 shadow-md hover:bg-brand-10 hover:text-white duration-300"
                  } mb-4 flex  items-center gap-x-3 rounded-md `}
                >
                  <IconContent
                    className={` ${
                      index === 0 && "bg-brand-10 text-white rounded-full p-0.5"
                    }  text-[22px] md:text-[24px] text-brand-10 group-hover:text-white `}
                  />
                  <p
                    className={` ${
                      index === 1 && "font-medium"
                    } text-base sm:text-lg `}
                  >
                    {content.content}
                  </p>
                </div>
              );
            })}
            <button
              className={` ${
                index === 1 && "hidden"
              } mt-6 md:mt-8 rounded-lg bg-brand-10 px-10 py-2.5 text-lg font-semibold text-white hover:bg-white hover:ring-2 hover:ring-brand-10 hover:text-brand-10 duration-300`}
            >
              Start now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SecondService;
