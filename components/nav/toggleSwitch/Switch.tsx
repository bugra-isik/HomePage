import MainContext from "@/context/Context";
import { useCallback, useContext, useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

/*--------------------------------------------------------------------------------*/

export default function ToggleSwitch() {
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

  const mouseOver = data?.content.mouseOverText.themeSwitch[langArr];

  return (
    <li title={mouseOver} className={`flex items-center justify-end gap-1 `}>
      <div
        onClick={() => switchTheme()}
        className={`${moonCheck} cursor-pointer  text-lg  text-[#767676] transition duration-700`}
      >
        <BsFillMoonStarsFill />
      </div>
      <div
        onClick={() => switchTheme()}
        className={`${sunCheck} cursor-pointer text-lg text-blue transition duration-700`}
      >
        <BsFillSunFill />
      </div>
    </li>
  );
}