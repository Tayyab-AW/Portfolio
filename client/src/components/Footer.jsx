import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="py-[50px] bg-[#1d232a] w-full ">
      <div className="container px-[17px] max-w-[1070px] m-auto md:px-[40px]">
        <div className="footerc flex flex-col justify-center items-center text-center flex-wrap p-0 m-0 text-[white] gap-x-[20px] gap-y-[20px] md:flex-row md:justify-between">
          <h3 className="text-[17px] font-bold">
            Copyright © 2023. All rights are reserved
          </h3>
          <div className="footerc__socials flex flex-row items-center justify-center gap-x-[20px] gap-y-[20px] mt-[10px]">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
