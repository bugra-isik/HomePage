import MainContext from "@/context/Context";
import Link from "next/link";
import React, { useContext } from "react";

export default function Links() {
  const { data, arr, langArr, setClick } = useContext(MainContext);

  const handleClick = (value) => {
    setClick(value);
  };

  const linkColor = ["amber-500", "blue-800"];

  const list = data?.nav.map((item, index) => (
    <Link
      key={`${item[2].id}`}
      href={`#${item[1]}`}
      className={` navpage-${arr}  text-${data?.textColor[arr]} `}
      onClick={() => handleClick(item[1])}
    >
      {item[langArr]}
    </Link>
  ));
  return (
    <li className=" flex items-center justify-between gap-10 mr-16 text-2xl ">
      {list}
    </li>
  );
}
