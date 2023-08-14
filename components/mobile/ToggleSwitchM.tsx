import MainContext from "@/context/Context";
import { motion } from "framer-motion";
import { useCallback, useContext, useEffect } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

export default function ToggleSwitch() {
  const { data, arr, setArr, langArr } = useContext(MainContext);

  const switchTheme = useCallback(() => {
    setArr((x: number) => (x === 0 ? 1 : 0));
  }, [setArr]);

  useEffect(() => {
    const local = localStorage.getItem("theme");
    Number(local) && switchTheme();
  }, [switchTheme]);

  const hiddenity = [true, false];
  const mouseOver = data?.content.mouseOverText.themeSwitch[langArr];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      title={mouseOver}
      className={`flex items-center justify-end gap-1`}
    >
      <div
        hidden={!hiddenity[arr]}
        onClick={() => switchTheme()}
        className={`cursor-pointer text-2xl text-moon transition duration-700`}
      >
        <BiSolidMoon />
      </div>
      <div
        hidden={hiddenity[arr]}
        onClick={() => switchTheme()}
        className={`cursor-pointer text-2xl text-blue transition duration-700`}
      >
        <BiSolidSun />
      </div>
    </motion.div>
  );
}
