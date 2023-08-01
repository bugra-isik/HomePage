import MainContext from "@/context/Context";
import { useCallback, useContext, useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

/*--------------------------------------------------------------------------------*/

export default function ToggleSwitchM() {
  const { data, arr, setArr, langArr } = useContext(MainContext);
  const [moonCheck, setMoonCheck] = useState<string>();
  const [sunCheck, setSunCheck] = useState<string>("hidden");

  const switchTheme = useCallback(() => {
    setArr((x: number) => (x === 0 ? 1 : 0));
    setMoonCheck((p) => (p === "hidden" ? "" : "hidden"));
    setSunCheck((p) => (p === "hidden" ? "" : "hidden"));
  }, [setArr]);

  useEffect(() => {
    const local = localStorage.getItem("theme");
    switch ("1") {
      case local:
        switchTheme();
        break;
    }
  }, [switchTheme]);

  const bgColor = ["bg-dark", "bg-light2"];

  const mouseOver = data?.content.mouseOverText.themeSwitch[langArr];

  return (
    <li title={mouseOver} className={`flex items-center justify-end gap-1 `}>
      <div
        onClick={() => switchTheme()}
        className={`${moonCheck} cursor-pointer text-2xl text-[#767676] transition-colors duration-300 `}
      >
        <BiSolidMoon />
      </div>
      <div
        onClick={() => switchTheme()}
        className={`${sunCheck} cursor-pointer text-2xl text-blue transition-colors duration-300`}
      >
        <BiSolidSun />
      </div>
    </li>
  );
}
