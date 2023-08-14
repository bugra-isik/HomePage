import MainContext from "@/context/Context";
import { useCallback, useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import LanguageSwitchM from "./LanguageSwitchM";
import LinksM from "./LinksM";
import ToggleSwitchM from "./ToggleSwitchM";

export default function Drawer() {
  const { arr, isOpen, setIsOpen } = useContext(MainContext);

  const [startX, setStartX] = useState(0);

  const toggleDrawer = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 100 && isOpen) {
      setIsOpen(false);
    }
  };
  const drawerBg: string[] = ["bg-dark3", "bg-light3"];
  const iconColor: string[] = ["text-yellow", "text-blue"];
  const bgColor: string[] = ["bg-dark", "bg-light"];

  return (
    <main
      className="flex select-none sm:hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <section
        className={`fixed inset-y-0 ${isOpen ? "left-0" : "-left-3/4"} ${
          drawerBg[arr]
        }  z-50 w-3/4 overflow-hidden drop-shadow-xl duration-300 ease-in-out`}
      >
        <ul className="flex flex-col ">
          <li>
            <i
              className={`${iconColor[arr]} ${bgColor[arr]} flex h-12 cursor-pointer items-center justify-end pr-4 text-3xl drop-shadow-lg transition duration-300`}
            >
              <AiOutlineClose onClick={toggleDrawer} />
            </i>
          </li>
          <li className={`pl-8`}>
            <div className={` flex w-full flex-col pt-10 text-2xl`}>
              <LinksM />
            </div>
            <div className=" mt-4 flex w-1/2 select-none flex-col items-start justify-between gap-8">
              <ToggleSwitchM />
              <LanguageSwitchM />
            </div>
          </li>
        </ul>
      </section>
      <section
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen
            ? "left-0 bg-black/50 backdrop-blur"
            : "-left-full bg-black/0 backdrop-blur-none "
        } absolute inset-y-0 z-40 w-full  overflow-hidden  transition duration-300`}
      ></section>
    </main>
  );
}
