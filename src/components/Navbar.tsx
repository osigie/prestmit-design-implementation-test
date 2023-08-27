import { navLinks } from "../constants";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="mx-auto flex items-center justify-between py-6 bg-brand-10 px-5 sm:px-10 md:px-14 ">
      {/* logo */}
      <div className="flex items-center gap-x-2">
        <Image
          src={"/assets/logo-green.svg"}
          width="50"
          height="50"
          alt="boldo logo"
          className="h-[30px] sm:h-[35px]"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Boldo</h1>
      </div>
      {/* nav */}
      <div className="space-x-1 hidden sm:flex">
        {navLinks.map((navlink) => (
          <div key={navlink.id}>
            <a
              className={`${
                navlink.title === "Login"
                  ? "rounded-lg bg-white px-6 py-2 hover:bg-brand-20 duration-300"
                  : "rounded-lg px-6 py-2 text-white hover:bg-brand-30 duration-300"
              }`}
              href={`#${navlink.id}`}
            >
              {navlink.title}
            </a>
          </div>
        ))}
      </div>
      {/* nav mobile */}
      <div className="sm:hidden">
        <Image
          src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
          onClick={() => setToggle(!toggle)}
          alt=""
          width="18"
          height="18"
        />
        <div
          className={` ${
            !toggle ? "hidden" : "flex"
          } sidebar absolute right-5 top-16 z-20 flex-col items-center space-y-3 rounded-[10px] bg-[#1C3D5B] p-5 font-semibold md:hidden`}
        >
          {navLinks.map((navlink) => (
            <div key={navlink.id}>
              <a
                className={`${
                  navlink.title === "Login"
                    ? "rounded-lg bg-white px-6 py-1 hover:bg-brand-20"
                    : "rounded-lg px-6 py-1 text-white hover:bg-brand-30"
                }`}
                href={`#${navlink.id}`}
              >
                {navlink.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
