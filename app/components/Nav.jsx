import { useWindowSize } from "@uidotdev/usehooks";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext, useState, useRef, useEffect } from "react";
import MainContext from "../context/Context";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import Footer from "./Footer";
import Switch from "./toggleSwitch/Switch";

export default function Nav() {
  const { data, arr, setArr } = useContext(MainContext);
  const [enabled, setEnabled] = useState(false);

  const switchSize = useWindowSize();
  const navLinksSize = useWindowSize();

  const scaleSwitch = switchSize.width / 1400;
  const scaleNavLinks = navLinksSize.width / 1400;

  const list = data?.nav.map((item, index) => (
    <Link
      className="font-mono"
      key={`${item[2].id}`}
      href={"#"}
      style={{ color: "#fff" }}
    >
      <li
        className={`hover:text-${data.navLinkColor[arr]} , text-${data.textColor[arr]}`}
      >
        {item[arr]}
      </li>
    </Link>
  ));

  return (
    <div>
      <nav
        className="justify-between select-none  text-2xl items-center flex"
        style={{
          backgroundColor: data?.navColor[arr],
          borderBottom: `0.5vh solid ${data?.dividerColor[arr]}`,
          padding: "5vh",
          height: "7vw",
        }}
      >
        <ul>
          <Link
            href={"#home"}
            style={{
              display: "flex",
              width: "20vw",
              height: "auto",
            }}
          >
            <img id="logo" src={data?.logo[arr]} alt="" />
          </Link>
        </ul>
        <ul
          className="flex"
          style={{ gap: "3vw", transform: `scale(${scaleNavLinks})` }}
        >
          {list}
        </ul>
        <ul style={{ transform: `scale(${scaleSwitch})` }}>
          <Switch />
        </ul>
      </nav>
    </div>
  );
}
