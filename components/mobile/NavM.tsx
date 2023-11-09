import { GiHamburgerMenu } from "react-icons/gi";
import LogoM from "./LogoM";
import { Master } from "@/app/store";
import { useStore } from "zustand";

export default function NavM() {
  const { theme, setIsOpen } = useStore(Master);

  const navTheme = ["bg-dark1/75", "bg-light1/75"];

  return (
    <header
      className={`${navTheme[theme]} sticky top-0 z-30 flex h-12 items-center py-10 drop-shadow-2xl backdrop-blur transition duration-300 sm:h-[4dvw] lg:hidden`}
    >
      <nav className={`w-full select-none px-10`}>
        <ul className="flex items-center justify-between">
          <li
            onClick={() => setIsOpen()}
            className={`text-3xl ${
              theme == 0 ? "text-color1" : "text-colorA"
            } cursor-pointer transition duration-300 lg:hidden`}
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
