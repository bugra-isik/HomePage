import { useContext, useState, useRef, useEffect } from "react";
import LanguageSwitch from "./languageSwitch/LanguageSwitch";
import ToggleSwitch from "./toggleSwitch/ToggleSwitch";
import Logo from "./logo/Logo";
import Links from "./links/Links";
import MainContext from "@/context/Context";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const { arr, data, drawer, setDrawer, isOpen, setIsOpen } =
    useContext(MainContext);

  const navTheme = ["bg-dark2", "bg-light2"];

  return (
    <header
      className={`${navTheme[arr]} sticky top-0 z-30 mb-[5dvw] flex h-12 items-center drop-shadow-lg backdrop-blur transition duration-300 sm:h-[4dvw]`}
    >
      <nav
        className={`container sticky left-0 right-0 top-0 mx-auto grid h-auto select-none grid-cols-4 items-stretch gap-5 px-10 font-inter text-[4.5px] font-medium sm:text-[7.5px] lg:text-[12px] 2xl:text-[18px]`}
      >
        <ul className="">
          <div onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-5xl text-yellow">
            <GiHamburgerMenu />
          </div>
        </ul>
        <ul className={`col-span-1 flex h-[4dvw] items-center justify-start`}>
          <Logo />
        </ul>

        <ul className={`col-span-2 flex h-[4dvw] items-center justify-evenly`}>
          <Links />
        </ul>

        <ul className={`col-span-1 flex h-[4dvw] items-center justify-end`}>
          <ul className="flex h-[4dvw]  w-1/3 items-center justify-between ">
            <ToggleSwitch />
            <LanguageSwitch />
          </ul>
        </ul>
      </nav>
    </header>
  );
}
