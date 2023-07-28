"use client";

import MainContext from "@/context/Context";
import Link from "next/link";
import React, { useContext, useCallback, useState } from "react";

export default function Links() {
  const { data, arr, langArr, setClick, click, text } = useContext(MainContext);

  const [zort, setZort] = useState("");

  const handleClick = useCallback(
    (x: string) => {
      setClick(x);
    },
    [setClick],
  );

  const hover = ["hover:text-yellow", "hover:text-blue"];
  const clickColor = ["text-yellow", "text-blue"];

  const list = data?.nav.map((item: any, index: number) => (
    <li
      key={index}
      className={`flex items-center justify-between gap-[5dvw] `}
    >
      <Link
        href={`#${item[1].toLowerCase()}`}
        className={`${hover[arr]} ${
          click === item[1] ? clickColor[arr] : text[arr]
        } transition duration-300 ${zort} `}
        onClick={() => handleClick(item[1])}
      >
        {item[langArr]}
      </Link>
    </li>
  ));
  return <>{list}</>;
}