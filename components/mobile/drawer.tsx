import { useCallback, useContext, useRef, useState } from "react";

import MainContext from "@/context/Context";
import { AiOutlineClose } from "react-icons/ai";
import LinksM from "./LinksM";
import ToggleSwitchM from "./ToggleSwitchM";
import LanguageSwitchM from "./LanguageSwitchM";

export default function Drawer() {
  const { arr, isOpen, setIsOpen } = useContext(MainContext);

  const toggleDrawer = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  const drawerBg: string[] = ["bg-dark3", "bg-light3"];
  const iconColor: string[] = ["text-yellow", "text-blue"];
  const bgColor: string[] = ["bg-dark", "bg-light"];

  return (
    <div className="flex sm:hidden">
      <div
        className={`fixed inset-y-0 ${isOpen ? "left-0" : "-left-3/4"} ${
          drawerBg[arr]
        }  z-50 w-3/4 overflow-hidden drop-shadow-xl duration-300 ease-in-out`}
      >
        <ul className="flex flex-col ">
          <i
            className={`${iconColor[arr]} ${bgColor[arr]} flex h-12 cursor-pointer items-center justify-end pr-4 text-3xl drop-shadow-lg transition duration-300`}
          >
            <AiOutlineClose onClick={() => setIsOpen(!isOpen)} />
          </i>
          <div className={`pl-8`}>
            <ul className={` flex w-full flex-col pt-10 text-2xl`}>
              <LinksM />
            </ul>
            <ul className=" mt-4 flex w-1/2 select-none flex-col items-start justify-between gap-8">
              <ToggleSwitchM />
              <LanguageSwitchM />
            </ul>
          </div>
        </ul>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "left-0" : "-left-full"
        } absolute inset-y-0 z-40 w-full  overflow-hidden bg-red-700/0`}
      ></div>
    </div>
  );
}
