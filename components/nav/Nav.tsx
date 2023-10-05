import MainContext from "@/context/Context";
import { useContext } from "react";
import LanguageSwitch from "./languageSwitch/LanguageSwitch";
import Links from "./links/Links";
import Logo from "./logo/Logo";
import ToggleSwitch from "./toggleSwitch/ToggleSwitch";

export default function Nav() {
  const { arr } = useContext(MainContext);

  const navTheme = ["bg-dark2", "bg-light2"];

  return (
    <header
      className={`${navTheme[arr]} sticky top-0 z-30 hidden h-12 items-center drop-shadow-lg backdrop-blur transition duration-300 lg:flex sm:h-10 md:h-16 2xl:h-24`}
    >
      <nav
        className={`container sticky left-0 right-0 top-0 mx-auto grid h-auto select-none grid-cols-4 items-stretch gap-5 px-10 font-inter text-[4.5px] font-medium sm:px-20 sm:text-[7.5px] md:text-base lg:text-[12px] 2xl:text-[18px]`}
      >
        <Logo />
        <Links />
        <ul
          className={`col-span-1 hidden h-[4dvw] items-center justify-end sm:flex`}
        >
          <li className="flex h-[4dvw]  w-1/3 items-center justify-between ">
            <ToggleSwitch />
            <LanguageSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
