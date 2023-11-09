"use client";
import Main from "@/components/Main/Main";
import NavM from "@/components/Mobile/NavM";
import { useWindowSize } from "@uidotdev/usehooks";
import Drawer from "@/components/Mobile/Drawer";
import { useStore } from "zustand";
import { Master } from "./store";
import Spinner from "@/components/UI/Spinner";
import Navbar from "@/components/Navigation/Navbar";

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
