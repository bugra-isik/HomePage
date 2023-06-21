"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import { Switch, Label, Divider, Skeleton } from "@mui/material";
import { useContext, useState } from "react";
import MainContext from "../context/Context";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";

export default function Nav() {
  const { data, arr, setArr } = useContext(MainContext);

  function switchTheme() {
    setArr((parameter) => (parameter === 0 ? 1 : 0));
  }

  return (
    <div>
      <nav style={{ backgroundColor: data?.mainColor[arr] }}>
        <ul>
          <Link href={"/app"}>
            <img id="logo" src={data?.logo[arr]} alt="Logo" />
          </Link>
        </ul>
        <ul style={{ gap: "3vw" }}>
          <li>
            <a className={`a${data?.theme[arr]}`} href="">
              {data?.nav[1][0]}
            </a>
          </li>
          <li>
            <a className={`a${data?.theme[arr]}`} href="">
            {data?.nav[2][0]}
            </a>
          </li>
          <li>
            <a className={`a${data?.theme[arr]}`} href="">
            {data?.nav[3][0]}
            </a>
          </li>
          <li>
            <a className={`a${data?.theme[arr]}`} href="">
            {data?.nav[4][0]}
            </a>
          </li>
        </ul>
        <ul className="themeSwitchSection">
          <li style={{ display: "flex", alignItems: "center" }}>
            <DarkModeIcon
              style={{ cursor: "pointer", color: data?.switchColor[arr] }}
              fontSize="large"
            />
            <Switch
              {...Label}
              onClick={switchTheme}
              style={{ color: data?.switchColor[arr] }}
            />
            <LightModeIcon
              style={{ cursor: "pointer", color: data?.switchColor[arr] }}
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
