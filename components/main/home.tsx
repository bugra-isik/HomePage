import { Master } from "@/app/store";
import { useWindowSize } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useStore } from "zustand";
import About from "./about/about";

export default function Home() {
  const { language, theme, setLoader } = useStore(Master);
  const [isClose, setIsClose] = useState<boolean>(true);

  const { width } = useWindowSize();

  const closeText = () =>
    setTimeout(() => {
      setIsClose(false);
    }, 5000);

  return (
    <>
      <div
        className={`relative -mx-10 mb-10 overflow-hidden lg:m-auto lg:w-3/4 2xl:w-4/5`}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: 1.5,
            animation: "ease-in-out",
            transitionDuration: "5s",
          }}
        >
          <Image
            src={theme ? "/lightTheme.jpg" : "/darkTheme.jpg"}
            alt="image"
            width={9999}
            height={1}
            onLoad={() => setLoader()}
          />
        </motion.div>
        {width && width >= 1024 && (
          <AnimatePresence>
            {isClose && (
              <motion.div
                onAnimationComplete={() => closeText()}
                initial={{ opacity: 0, fontSize: "0", display: "none" }}
                animate={{
                  display: "flex",
                  opacity: 1,
                  fontSize: "5rem",
                  animation: "ease-in",
                  transition: { duration: 5, delay: 2 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className={`${
                  theme ? "text-light1" : "text-dark1"
                } absolute inset-0  w-full items-center justify-center font-black`}
              >
                <span>{language ? "Hello!" : "Merhaba!"}</span>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {width && width < 1024 && <About />}
    </>
  );
}
