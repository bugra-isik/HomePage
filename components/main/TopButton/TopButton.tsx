"use client";
import MainContext from "@/context/Context";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useCallback, useContext } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function TopButton() {
  const { arr } = useContext(MainContext);

  const [{ x, y }, scrollTo] = useWindowScroll();

  let scale: string = "scale-0",
    rotate: string = "-rotate-180",
    hidden: string = "hidden";

  if (y != null) {
    if (y > 100) {
      hidden = " ";
    }
    if (y > 300) {
      scale = "scale-[2]";
      rotate = "rotate-0";
    }
  }

  const bgColor = ["text-yellow2", "text-blue2"];

  const scrollToTop = useCallback(() => {
    const p = document.documentElement || document.body;

    p.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <BsFillArrowUpCircleFill
      onClick={() => scrollToTop()}
      className={`${bgColor[arr]} ${scale} ${rotate} ${hidden} fixed right-[5dvw] top-[90vh] z-10 cursor-pointer drop-shadow-2xl transition duration-700`}
    />
  );
}
