import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Master } from "@/app/store";
import { useStore } from "zustand";
import LinksM from "./LinksM";
import ThemeSwitch from "../navigation/ThemeSwitch";
import LanguageSwitch from "../navigation/LanguageSwitch";

export default function Drawer() {
  const { theme, isOpen, setIsOpen } = useStore(Master);

  const toggleDrawer = useCallback(() => {
    setIsOpen();
  }, [setIsOpen]);

  let a: number;
  const handleTouchStart = (e: any) => {
    a = e.touches[0].clientX;
  };
  const handleTouchMove = (e: any) => {
    if (a - e.touches[0].clientX > 100) {
      setIsOpen();
    }
  };

  const drawerBg: string[] = ["bg-dark2/75", "bg-light2/75"];
  const iconColor: string[] = ["text-color1", "text-colorA"];
  const bgColor: string[] = ["bg-dark1/75", "bg-light1/75"];

  return (
    <nav
      className="flex select-none lg:hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <section
        className={`fixed inset-y-0 ${isOpen ? "left-0" : "-left-3/4"} ${
          drawerBg[theme]
        }  z-50 w-3/4 overflow-hidden drop-shadow-xl duration-300 ease-in-out`}
      >
        <ul className="flex flex-col">
          <li>
            <i
              className={`${iconColor[theme]} ${bgColor[theme]} flex cursor-pointer items-center justify-end py-6 pr-4 text-3xl drop-shadow transition duration-300`}
            >
              <AiOutlineClose onClick={toggleDrawer} />
            </i>
          </li>
          <div className={`pl-10 sm:pl-12 md:pl-14`}>
            <LinksM />
            <div className="mt-4 flex w-1/2 select-none flex-col items-start justify-between gap-6 sm:gap-8 md:gap-10">
              <ThemeSwitch />
              <LanguageSwitch />
            </div>
          </div>
        </ul>
      </section>
      <section
        onClick={() => setIsOpen()}
        className={`${
          isOpen
            ? "left-0 bg-black/50 backdrop-blur"
            : "-left-full bg-black/0 backdrop-blur-none "
        } absolute inset-y-0 z-40 w-full  overflow-hidden  transition duration-300`}
      ></section>
    </nav>
  );
}
