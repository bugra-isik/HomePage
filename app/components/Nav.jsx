"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import { Switch, Label, Divider } from "@mui/material";
import { useContext, useState } from "react";
import MainContext from "../context/Context";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";





export default function Nav() {
  const { data, setData } = useContext(MainContext);

  const [deneme, setDeneme] = useState({
    sayi: 0,
  });

  function switchTheme() {
    setData((copy) => ({
      ...copy,
      theme: data.theme === "-dark" ? "-light" : "-dark",
      logo: data.logo === "/logodark.png" ? "/logolight.png" : "/logodark.png",
      switchColor: data.switchColor === "#94999e" ? "#44494b" : "#94999e",
      mainColor: data.mainColor === "#1b1d1e" ? "#eaebec" : "#1b1d1e",
    }));
  }
  return (
    <div>
      <nav style={{ backgroundColor: data.mainColor }}>
        <ul>
          <Link href={"/app"}  >
            <img id="logo" src={data.logo} alt="Logo" />
          </Link>
        </ul>
        <ul style={{ gap: "3vw" }}>
          <li>
            <a className={`a${data.theme}`} href="">
              {data.nav.anasayfa}
            </a>
          </li>
          <li>
            <a className={`a${data.theme}`} href="">
              Projeler {}
            </a>
          </li>
          <li>
            <a className={`a${data.theme}`} href="">
              Blog
            </a>
          </li>
          <li>
            <a className={`a${data.theme}`} href="">
              Hakkımda
            </a>
          </li>
        </ul>
        <ul className="themeSwitchSection">
          <li style={{ display: "flex", alignItems: "center" }}>
            <DarkModeIcon
              style={{ cursor: "pointer", color: data.switchColor }}
              fontSize="large"
            />
            <Switch
              {...Label}
              onClick={switchTheme}
              style={{ color: data.switchColor }}
            />
            <LightModeIcon
              style={{ cursor: "pointer", color: data.switchColor }}
              fontSize="large"
            />
          </li>
        </ul>
      </nav>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#27292b",
          height: "0.5px",
        }}
      ></div>
    </div>
  );
}
