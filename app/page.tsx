"use client";
import Main from "@/components/main/Main";
import Drawer from "../components/mobile/drawer";
import NavM from "@/components/mobile/NavM";
import Nav from "@/components/nav/Nav";
import MainContext from "@/context/Context";
import { useContext } from "react";

export default function Page() {
  const { arr, setIsOpen } = useContext(MainContext);

  const theme = ["bg-dark", "bg-light"];

  let a: number;
  const handleTouchStart = (e: any) => {
    a = e.touches[0].clientX;
  };
  const handleTouchMove = (e: any) => {
    if (e.touches[0].clientX - a > 150) {
      setIsOpen(true);
    }
  };

  return (
    <main
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`${theme[arr]} relative inset-0 min-h-[100dvh] transition-colors duration-300`}
    >
      <NavM />
      <Drawer />
      <Nav />
      <Main />
    </main>
  );
}
