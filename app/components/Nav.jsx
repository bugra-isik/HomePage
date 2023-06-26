"use client";

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
  const [width, setWidth] = useState();

  useEffect(() => {
    
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    
  }, [width]);

  const list = data?.nav.map((item, index) => (
    <Link key={`${item[2].id}`} className={`a${data?.theme[arr]}`} href={"#"}>
      <li>{item[arr]}</li>
    </Link>
  ));


  const size = useWindowSize();
  

  return (
    <div>
      {size.width}
      <nav
        style={{
          backgroundColor: data?.navColor[arr],
          borderBottom: `0.5vh solid ${data?.dividerColor[arr]}`,
        }}
      >
        <ul>
          <Link href={"#home"}>
            <img id="logo" src={data?.logo[arr]} alt="" />
          </Link>
        </ul>
        <ul style={{ gap: "3vw" }}>{list}</ul>
        <ul
        // style={{ transform: `scale(${scalex})` }}
        >
          <Switch />
        </ul>
      </nav>
    </div>
  );
}
