"use client";

import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Blog from "./Blog";
import TopButton from "../UI/TopButton";
import { Master } from "@/app/store";
import { useStore } from "zustand";

export default function Main() {
  const { click, theme } = useStore(Master);

  return (
    <>
      <TopButton />
      <main
        className={`${
          theme ? "text-light1" : "text-dark1"
        } container mx-auto px-10 font-hyperlegible text-sm sm:px-20 lg:mt-10 `}
      >
        {click === null && <Home />}
        {click === "Home" && <Home />}
        {click === "Projects" && <Projects />}
        {click === "About" && <About />}
        {click === "Blog" && <Blog />}
      </main>
    </>
  );
}
