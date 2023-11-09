import { Master } from "@/app/store";
import { motion } from "framer-motion";
import { useStore } from "zustand";
import Social from "./social";
import Techs from "./techs";
import Bio from "./bio";

export const TextHeading = ({ theme, children }) => (
  <h1
    className={`${
      theme ? "text-colorA" : "text-color1"
    } select-none pr-5 text-3xl font-black drop-shadow-2xl transition duration-300 sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl`}
  >
    {children}
  </h1>
);

export const Line = ({ theme }) => (
  <div
    className={`${
      theme ? "bg-colorA" : "bg-color1"
    } h-0.5 grow rounded-l-full transition-colors duration-300 lg:h-[1.3px] 2xl:h-0.5`}
  />
);

export default function About() {
  const { language, theme } = useStore(Master);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${theme ? "text-dark1" : "text-light2"}`}
    >
      <Bio theme={theme} language={language} />
      <Techs theme={theme} language={language} />
      <Social theme={theme} language={language} />
    </motion.main>
  );
}
