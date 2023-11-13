"use client";

import { Master } from "@/app/store";
import { useStore } from "zustand";
import TopButton from "../ui/topButton";
import About from "./about/about";
import Blog from "./blog";
import Home from "./home";
import Projects from "./projects";

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
        {click === "Home" && <Home />}
        {click === "Projects" && <Projects />}
        {click === "About" && <About />}
        {click === "Blog" && <Blog />}
      </main>
    </>
  );
}
