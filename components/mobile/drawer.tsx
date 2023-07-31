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

  return (
    <div className="flex sm:hidden">
      <div
        className={`fixed h-full ${isOpen ? "left-0" : "-left-3/4"} ${
          drawerBg[arr]
        }  z-50 w-3/4 overflow-hidden drop-shadow  duration-300 ease-in-out`}
      >
        <div className="pl-8 flex flex-col ">
          <i
            className={`flex justify-end pr-2 pt-2 text-3xl ${iconColor[arr]} cursor-pointer transition duration-300`}
          >
            <AiOutlineClose onClick={() => setIsOpen(!isOpen)} />
          </i>
          <ul
            className={` flex flex-col divide-y w-1/2 divide-[#3d3d3d] pt-10 text-2xl`}
          >
            <LinksM />
          </ul>
          <ul className=" flex pt-10 w-1/2 select-none items-center justify-between">
            <ToggleSwitchM />
            <LanguageSwitchM />
          </ul>
        </div>
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
