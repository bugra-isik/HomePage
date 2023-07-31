"use client";

import Projects from "./Projects/Projects";
import Home from "./Home/Home";
import { useContext } from "react";
import MainContext from "@/context/Context";
import TopButton from "./TopButton/TopButton";

export default function Main() {
  const { click, data, arr, langArr, text } = useContext(MainContext);

  return (
    <>
      <TopButton />
      <main
        className={`${text[arr]} container mx-auto px-10 mt-10 text-sm font-hyperlegible `}
      >
        {click === null && <Home />}
        {click === "Home" && <Home />}
        {click === "Projects" && <Projects />}
      </main>
    </>
  );
}
