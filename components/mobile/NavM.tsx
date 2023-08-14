import MainContext from "@/context/Context";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoM from "./LogoM";

export default function NavM() {
  const { arr, data, drawer, setDrawer, isOpen, setIsOpen } =
    useContext(MainContext);

  const navTheme = ["bg-dark2", "bg-light2"];

  return (
    <header
      className={`${navTheme[arr]} sticky top-0 z-30 flex h-12 items-center drop-shadow-lg backdrop-blur transition duration-300 sm:hidden sm:h-[4dvw]`}
    >
      <nav className={`w-full select-none px-10`}>
        <ul className="flex items-center justify-between">
          <li
            onClick={() => setIsOpen(!isOpen)}
            className={`text-3xl ${
              arr == 0 ? "text-yellow" : "text-blue"
            } cursor-pointer transition duration-300 sm:hidden`}
          >
            <GiHamburgerMenu />
          </li>
          <li>
            <LogoM />
          </li>
        </ul>
      </nav>
    </header>
  );
}
