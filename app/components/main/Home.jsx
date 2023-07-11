import React from "react";
import MainContext, { useContext } from "../../context/Context";

export default function Home() {
  const { data, arr, langArr } = useContext(MainContext);

  return (
    <>
      <section>{data?.content.siteState[langArr]}</section>
    </>
  );
}
