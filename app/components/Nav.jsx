"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import { Switch, label } from "@mui/material";
import { useContext, useState } from "react";
import MainContext from "../context/Context";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Nav() {
  const { data, setData } = useContext(MainContext);

  function switchTheme() {
    setData((copy) => ({
      ...copy,
      theme: data.theme === "-light" ? "-dark" : "-light",
      logo: data.logo === "/logodark.png" ? "/logolight.png" : "/logodark.png",
      switchColor: data.switchColor === "#94999e" ? "#44494b" : "#94999e",
    }));
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="homepage">
              <img id="logo" src={data.logo} alt="Logo" />
            </a>
          </li>
        </ul>
        <ul style={{alignSelf:"center"}}>
          <li>
            <a className={`a${data.theme}`} href="">
              Anasayfa Kaka
            </a>
          </li>
          <li>
            <a className={`a${data.theme}`} href="">
              Projeler
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
        <ul>
          <li style={{ display: "flex", alignItems: "center" }}>
            <DarkModeIcon
              style={{ cursor: "pointer", color: data.switchColor }}
              fontSize="large"
            />
            <Switch {...label} onClick={switchTheme} />
            <LightModeIcon
              style={{ cursor: "pointer", color: data.switchColor }}
              fontSize="large"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
