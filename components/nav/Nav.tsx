import { useContext, useState, useRef, useEffect } from "react";
import LanguageSwitch from "./languageSwitch/LanguageSwitch";

import ToggleSwitch from "./toggleSwitch/Switch";
import Logo from "./logo/Logo";
import Links from "./links/Links";
import MainContext from "@/context/Context";

export default function Nav() {
  const { arr, data } = useContext(MainContext);

  const navTheme = ["bg-dark-0.75", "bg-light-0.75"];

  return (
    <header
      className={`${navTheme[arr]} sticky top-0 z-50 mb-[5dvw] drop-shadow-lg backdrop-blur transition duration-300`}
    >
      <nav
        className={`container mx-auto grid h-[4dvw] select-none grid-cols-4 gap-5 px-10 font-inter text-xs font-medium sm:text-sm lg:text-base 2xl:text-lg`}
      >
        <ul className={`col-span-1 flex items-center  justify-start`}>
          <Logo />
        </ul>

        <ul className={`col-span-2 flex items-center justify-evenly`}>
          <Links />
        </ul>
        <ul className={`col-span-1 flex items-center justify-end`}>
          <ul className="flex w-1/3 items-center justify-between ">
            <ToggleSwitch />
            <LanguageSwitch />
          </ul>
        </ul>
      </nav>
      <div className="h-[3px] w-full bg-divider"></div>
    </header>
  );
}
