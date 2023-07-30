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

  return (
    <div className="flex sm:hidden">
      <div
        className={`absolute inset-y-0 ${isOpen ? "left-0" : "-left-1/2"} ${
          drawerBg[arr]
        }  z-50 w-1/2 overflow-hidden drop-shadow duration-500 ease-in-out`}
      >
        <div className="flex flex-col ">
        <i className="flex justify-end text-5xl text-white">
          <AiOutlineClose onClick={() => setIsOpen(!isOpen)} />
        </i>
        <ul className={``}>
          <LinksM />
        </ul>
        <ul className="flex ">
          <ToggleSwitchM />
          <LanguageSwitchM />
        </ul>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "left-0" : "-left-full"
        } absolute inset-y-0 z-40 w-full  overflow-hidden bg-red-700/0 drop-shadow duration-500 ease-in-out`}
      ></div>
    </div>
  );
}
