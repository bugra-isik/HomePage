import { useContext, useState, useRef, useEffect } from "react";
import LanguageSwitch from "./languageSwitch/LanguageSwitch";

import ToggleSwitch from "./toggleSwitch/Switch";
import Logo from "./logo/Logo";
import Links from "./links/Links";
import MainContext from "@/context/Context";

export default function Nav() {
  const { arr, data } = useContext(MainContext);

  const navTheme = ["bg-dark2", "bg-light2"];

  return (
    <header
      className={`${navTheme[arr]} sticky top-0 z-50 mb-[5dvw] h-[4dvw] flex items-center drop-shadow-lg backdrop-blur transition duration-300`}
    >
      <nav
        className={`items-stretch container sticky left-0 right-0 top-0 mx-auto grid h-auto select-none grid-cols-4 gap-5 px-10 font-inter text-[4.5px] font-medium sm:text-[7.5px] lg:text-[12px] 2xl:text-[18px]`}
      >
        <ul className={`col-span-1 flex h-[4dvw] items-center justify-start`}>
          <Logo />
        </ul>

        <ul className={`col-span-2 flex h-[4dvw] items-center justify-evenly`}>
          <Links />
        </ul>
        <ul className={`col-span-1 flex h-[4dvw] items-center justify-end`}>
          <ul className="flex w-1/3  h-[4dvw] items-center justify-between ">
            <ToggleSwitch />
            <LanguageSwitch />
          </ul>
        </ul>
      </nav>
    </header>
  );
}
