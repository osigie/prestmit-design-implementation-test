import { sliderItems } from "@/constants";
import Image from "next/image";
import "slick-carousel/slick/slick.css";



const Clients = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {sliderItems.map((item, index) => (
          <div className="slide" key={index}>
            <span>
              <div className=" flex items-center">
                <Image
                  src={item.src}
                  className="h-7"
                  alt={`${item.name} logo`}
                  width="32"
                  height="34"
                />
                <p className=" text-white font-bold text-2xl xs:text-4xl ml-1 ">
                  {item.name}
                </p>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
