import { Master } from "@/app/store";
import data from "@/db/data.json";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { useStore } from "zustand";

export default function ThemeSwitch() {
  const { theme, setTheme, language } = useStore(Master);

  useEffect(() => {
    const local = localStorage.getItem("theme");
    setTheme(Number(local));
  }, [theme, setTheme]);

  const setLocal = () => localStorage.setItem("theme", String(theme ? 0 : 1));

  const mouseOver = data?.content.mouseOverText.themeSwitch[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      title={mouseOver}
      className={`flex items-center justify-end gap-1`}
    >
      <div
        onClick={() => {
          setTheme(theme ? 0 : 1);
          setLocal();
        }}
        className="cursor-pointer text-3xl transition duration-700 sm:text-4xl md:text-5xl lg:text-sm xl:text-lg 2xl:text-2xl"
      >
        {theme ? (
          <BiSolidSun className={`text-colorA`} />
        ) : (
          <BiSolidMoon className={`text-color1`} />
        )}
      </div>
    </motion.div>
  );
}
