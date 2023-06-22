"use client";

import LightModeIcon from "@mui/icons-material/LightMode";
import { Switch, Divider, Skeleton } from "@mui/material";
import { useContext, useState } from "react";
import MainContext from "../context/Context";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";

export default function Nav() {
  const { data, arr, setArr } = useContext(MainContext);

  const list = data?.nav.map((item, index) => (
    <Link className={`a${data?.theme[arr]}`} href={item[1]}>
      <li key={index}>{item[arr]}</li>
    </Link>
  ));

  function switchTheme() {
    setArr((parameter) => (parameter === 0 ? 1 : 0));
  }

  return (
    <div>
      <nav style={{ backgroundColor: data?.navColor[arr] ,borderBottom:`0.1px solid ${data?.dividerColor[arr]}`}}>
        <ul>
          <Link href={"#home"}>
            <img id="logo" src={data?.logo[arr]} alt="" />
          </Link>
        </ul>
        <ul style={{ gap: "3vw" }}>{list}</ul>
        <ul className="themeSwitchSection">
          <li style={{ display: "flex", alignItems: "center" }}>
            <DarkModeIcon
              style={{ cursor: "pointer", color: data?.switchColor[arr] }}
              fontSize="large"
            />
            <Switch
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
