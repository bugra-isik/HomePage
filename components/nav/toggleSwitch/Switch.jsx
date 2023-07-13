import { useRef, useEffect, useContext, useState } from "react";
import { Switch } from "@headlessui/react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MainContext from "@/context/Context";

/*--------------------------------------------------------------------------------*/

export default function ToggleSwitch() {
  const { data, arr, setArr, langArr } = useContext(MainContext);
  const buttonRef = useRef();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") == 1) {
      buttonRef.current.click();
    } else {
    }
  }, []);

  function switchTheme() {
    setArr((p) => (p === 0 ? 1 : 0));
  }
  

  const mouseOver = data?.content.mouseOverText.themeSwitch[langArr];

  //                       gray-400      gray-700
  const iconColorDark = ["#9ca3af", "#374151"];
  const iconColorLight = ["#f59e0b", "#1e40af"];

  const innerButtonColor = ["gray-400", "gray-700"];
  return (
    <div className="flex items-center justify-between gap-1">
      <DarkModeIcon style={{ color: iconColorDark[arr], fontSize: "45px" }} />

      <Switch
        title={mouseOver}
        ref={buttonRef}
        onClick={switchTheme}
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-gray-300" : "bg-gray-900"}
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <div className="flex justify-between sticky"></div>
        <span className="sr-only"></span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-${
          innerButtonColor[arr]
        } shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>

      <LightModeIcon style={{ color: iconColorLight[arr], fontSize: "45px" }} />
    </div>
  );
}
