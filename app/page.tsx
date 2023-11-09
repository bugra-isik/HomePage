"use client";

import Main from "@/components/main/Main";
import Drawer from "@/components/mobile/Drawer";
import NavM from "@/components/mobile/NavM";
import Navbar from "@/components/navigation/Navbar";
import Spinner from "@/components/ui/Spinner";
import { useStore } from "zustand";
import { Master } from "./store";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Page() {
  const { setIsOpen, theme } = useStore(Master);
  const { width } = useWindowSize();

  let a: number;
  const handleTouchStart = (e: any) => {
    a = e.touches[0].clientX;
  };
  const handleTouchMove = (e: any) => {
    if (e.touches[0].clientX - a > 150) {
      setIsOpen();
    }
  };

  return (
    <main
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={`${
        theme ? "bg-light1" : "bg-dark1"
      } relative inset-0 min-h-[100dvh] transition-colors duration-300`}
    >
      <Spinner />
      {width && width < 1024 ? (
        <>
          <NavM />
          <Drawer />
        </>
      ) : (
        <Navbar />
      )}
      <Main />
    </main>
  );
}
