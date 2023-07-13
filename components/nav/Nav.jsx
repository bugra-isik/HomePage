import { useWindowSize } from "@uidotdev/usehooks";
import { useContext, useState, useRef, useEffect } from "react";
import LanguageSwitch from "./languageSwitch/LanguageSwitch";

import ToggleSwitch from "./toggleSwitch/Switch";
import Logo from "./logo/Logo";
import Links from "./links/Links";
import MainContext from "@/context/Context";

export default function Nav() {
  const { arr } = useContext(MainContext);
  const [enabled, setEnabled] = useState(false);

  const switchSize = useWindowSize();
  const navLinksSize = useWindowSize();
  const logoSize = useWindowSize();

  const scaleSwitch = switchSize.width / 2811;
  const scaleNavLinks = navLinksSize.width / 1800;

  const bgColor = ["#030712", "#f9fafb"];

  return (
    <nav
      className="grid grid-cols-4  gap-5 h-40 select-none font-inter "
      style={{ color: bgColor[arr == 1 ? 0 : 1] }}
    >
      <ul
        style={{ backgroundColor: bgColor[arr] }}
        className={` col-span-3 rounded-md flex items-center justify-between`}
      >
        <Logo />
        <Links />
      </ul>

      <ul
        style={{ backgroundColor: bgColor[arr] }}
        className={` bg-${bgColor[arr]} rounded-md`}
      >
        <div
          className={`flex  select-none justify-between items-center gap-10 pl-50 h-full`}
          style={{ transform: `scale(${scaleSwitch})` }}
        >
          <LanguageSwitch />
          <ToggleSwitch />
        </div>
      </ul>
    </nav>
  );
}
