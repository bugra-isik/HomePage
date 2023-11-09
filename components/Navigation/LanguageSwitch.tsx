import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Master } from "@/app/store";
import { useStore } from "zustand";
import data from "@/db/data.json";

const LanguageSwitch = () => {
  const { setLanguage, language } = useStore(Master);

  useEffect(() => {
    const local = localStorage.getItem("language");
    setLanguage(Number(local));
  }, [language, setLanguage]);

  const setLocal = () =>
    localStorage.setItem("language", String(language ? 0 : 1));

  const mouseOver = data?.content.mouseOverText.langButton[language];

  return (
    <button
      title={mouseOver}
      className={`text-3xl sm:text-4xl md:text-5xl lg:text-sm xl:text-lg 2xl:text-2xl`}
      onClick={() => {
        setLanguage(language === 0 ? 1 : 0);
        setLocal();
      }}
    >
      <span className={language === 0 ? "fi fi-tr" : "fi fi-us"} />
    </button>
  );
};

export default LanguageSwitch;
