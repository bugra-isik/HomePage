import MainContext from "@/context/Context";
import React, { useContext } from "react";

export default function Home() {
  const { data, arr, langArr } = useContext(MainContext);

  return (
    <>
      <section>{data?.content.siteState[langArr]}</section>
    </>
  );
}
