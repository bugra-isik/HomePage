"use client";

import Main from "@/components/main/main";
import Drawer from "@/components/mobile/drawer";
import NavM from "@/components/mobile/navM";
import Navbar from "@/components/navigation/navbar";
import Spinner from "@/components/ui/spinner";
import { useWindowSize } from "@uidotdev/usehooks";
import { useStore } from "zustand";
import { Master } from "../store";
import Projects from "@/components/main/projects";
import TopButton from "@/components/ui/topButton";

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
      {width && width < 1024 ? (
        <>
          <NavM />
          <Drawer />
        </>
      ) : (
        <Navbar />
      )}
      <>
        <TopButton />
        <main
          className={`${
            theme ? "text-light1" : "text-dark1"
          } container mx-auto px-10 font-hyperlegible text-sm sm:px-20 lg:mt-10 `}
        >
          <Projects />
        </main>
      </>
    </main>
  );
}
