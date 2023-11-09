import LanguageSwitch from "./LanguageSwitch";
import Links from "./Links";
import Logo from "./Logo";
import { Master } from "@/app/store";
import { useStore } from "zustand";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const { theme } = useStore(Master);

  return (
    <header
      className={`${
        theme ? "bg-light1/75" : "bg-dark1/75"
      } sticky top-0 z-30 hidden h-12 items-center drop-shadow-lg backdrop-blur transition duration-300 sm:h-10 md:h-16 lg:flex 2xl:h-24`}
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
            <ThemeSwitch />
            <LanguageSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
