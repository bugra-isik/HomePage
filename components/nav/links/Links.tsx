"use client";

import MainContext from "@/context/Context";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useContext } from "react";

export default function Links() {
  const { data, arr, langArr, setClick, click, text } = useContext(MainContext);

  const handleClick = useCallback(
    (x: string) => {
      setClick(x);
    },
    [setClick],
  );

  const hover = ["hover:text-yellow", "hover:text-blue"];
  const clickColor = ["text-yellow", "text-blue"];

  const list = data?.nav.map((item: any, index: number) => (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={index}
      className={`items-center justify-between`}
    >
      <Link
        href={``}
        className={`${hover[arr]} ${
          click === item[1] ? clickColor[arr] : text[arr]
        } transition duration-300`}
        onClick={() => handleClick(item[1])}
      >
        {item[langArr]}
      </Link>
    </motion.li>
  ));
  return <>{list}</>;
}
