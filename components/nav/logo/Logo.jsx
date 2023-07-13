import MainContext from "@/context/Context";
import Image from "next/image";
import React, { useContext } from "react";

export default function Logo() {
  const { data, arr } = useContext(MainContext);

  const reload = () => {
    window.location.reload();
  };
  return (
    <li className="cursor-pointer w-1/4 ml-16 " onClick={reload}>
      <Image title="Librouse!" id="logo" width={5000} height={1000} src={data?.logo[arr]} alt="" />
    </li>
  );
}
