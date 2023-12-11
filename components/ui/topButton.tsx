"use client";
import { Master } from "@/app/store";
import { useWindowScroll } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useStore } from "zustand";

export default function TopButton() {
  const { theme } = useStore(Master);

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

  const bgColor = ["text-color2", "text-colorB"];

  const scrollToTop = useCallback(() => {
    const p = document.documentElement || document.body;

    p.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <AnimatePresence>
      {y && y > 250 && (
        <motion.span
          initial={{ scale: 1 }}
          animate={{ opacity: [0, 90], rotate: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, rotate: -180 }}
          className={`fixed right-4 top-3/4 z-10 cursor-pointer text-xl drop-shadow-2xl sm:right-14 sm:text-2xl md:right-16 md:text-3xl lg:right-12 lg:text-lg xl:right-14 xl:text-2xl 2xl:right-16 2xl:text-3xl`}
        >
          <BsFillArrowUpCircleFill
            onClick={() => scrollToTop()}
            className={`${bgColor[theme]}`}
          />
        </motion.span>
      )}
    </AnimatePresence>
  );
}
// ${scale} ${rotate} ${hidden}
