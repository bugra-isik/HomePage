import { Master } from "@/app/store";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useStore } from "zustand";

export default function Spinner() {
  const { loader } = useStore(Master);
  const [delay, setDelay] = useState<boolean>(true);

  const { width } = useWindowSize();

  let switchTranslate;

  if ((width ?? 0) <= 770) {
    switchTranslate = { translateX: "-100vw" };
  } else if ((width ?? 0) > 770) {
    switchTranslate = { translateY: "-100vh" };
  }

  if (loader == false) {
    setTimeout(() => {
      setDelay(false);
    }, 1000);
  }

  return (
    <>
      {delay && (
        <motion.div
          id="loader"
          className="absolute z-50 flex h-screen w-screen items-center justify-center"
          initial={{ translate: 0 }}
          animate={{ ...switchTranslate, transitionDuration: "0.2s" }}
        >
          <TbFidgetSpinner
            className={`animate-spin text-7xl text-light1 sm:text-8xl xl:text-9xl 2xl:text-[10rem]`}
          />
        </motion.div>
      )}
    </>
  );
}
