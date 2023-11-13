import React, { useState } from "react";
import MoonSVG from "../assets/MoonSVG";
import SunSVG from "../assets/SunSVG";
import useDarkSide from "../hooks/useDarkSide";
import DarkModeToggle from "react-dark-mode-toggle";

const ThemeButton = () => {
  const [colorTheme, setTheme] = useDarkSide();
  console.log(colorTheme)

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };
  return (
    <button
      className=" cursor-pointer h-auto w-auto flex items-center justify-center border-2 border-primary p-[4px] rounded-3xl  dark:bg-[#fce9b1] bg-[#25afed] "
      onClick={toggleDarkMode}
    >
      {colorTheme === "light" ? <SunSVG /> : <MoonSVG />}
    </button>
  );
};

export default ThemeButton;
