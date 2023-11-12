import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { HashLink } from "react-router-hash-link";
import ThemeButton from "../Theme/ThemeButton";

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setisOpen(false));

  const HandleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="h-[80px] w-full flex justify-between px-[30px] py-[25px] bg-secondary dark:bg-secondary m-0 top-0 left-0 fixed items-center z-[200] drop-shadow-[0_0_10px_rgba(0,0,0,.09)] dark:shadow-[0_0_10px_#147efb] md:pl-[50px] md:pr-[40px]  ">
      <h3 className="box-border block m-0 p-0 text-xl font-bold cursor-pointer">
        <HashLink smooth to="/#home">
          Tayyab.dev
        </HashLink>
      </h3>
      <ul className=" box-border m-0 p-0 text-lg gap-x-[20px] font-semibold text-left hidden lg:flex items-center ">
        <li className="hover:text-[#147efb] hover:transition-all duration-300">
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>

        <li className="hover:text-[#147efb] hover:transition-all duration-300">
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>

        <li className="hover:text-[#147efb] hover:transition-all duration-300">
          <HashLink smooth to="/#projects">
            Projects
          </HashLink>
        </li>

        <li className="hover:text-[#147efb] hover:transition-all duration-300">
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
        <li>
          <ThemeButton />
        </li>
      </ul>
      <div className="cursor-pointer lg:hidden" ref={node}>
        <button className="flex items-center">
          <svg
            xmlns="http:www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mobile-menu "
            onClick={HandleClick}
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </button>
        <div
          className="w-[150px] absolute top-[90px] right-8 overflow-hidden shadow-[0_0_10px_rgba(0,0,0,.1)]  rounded-lg"
          style={{
            maxHeight: isOpen ? "250px" : 0,
            transition: isOpen
              ? "max-height 0.70s ease-in"
              : "max-height 0.70s ease-out",
          }}
        >
          <ul className="flex flex-col bg-secondary h-full gap-4 p-2 box-border m-0  text-lg gap-x-[20px] font-semibold text-left lg:hidden items-center py-[12px]">
            <li
              className="hover:text-[#147efb] hover:transition-all duration-300"
              onClick={HandleClick}
            >
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>

            <li
              className="hover:text-[#147efb] hover:transition-all duration-300"
              onClick={HandleClick}
            >
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>

            <li
              className="hover:text-[#147efb] hover:transition-all duration-300"
              onClick={HandleClick}
            >
              <HashLink smooth to="/#projects">
                Projects
              </HashLink>
            </li>

            <li
              className="hover:text-[#147efb] hover:transition-all duration-300"
              onClick={HandleClick}
            >
              <HashLink smooth to="/#contact" onClick={HandleClick}>
                Contact
              </HashLink>
            </li>
            <li>
              <ThemeButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
