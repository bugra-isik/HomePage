"use client";
import Main from "@/components/main/Main";
import Nav from "@/components/nav/Nav";
import MainContext from "@/context/Context";
import { useContext, useState, useCallback, useRef } from "react";
import Drawer from "../components/mobile/drawer";
import NavM from "@/components/mobile/NavM";


export default function Page() {
  const { arr, data } = useContext(MainContext);
  const [hidden, setHidden] = useState();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);  

  const theme = ["bg-dark", "bg-light"];

  return (
    <div
    
      className={`${theme[arr]} relative inset-0 min-h-[100dvh] transition-colors duration-300`}
    >
      <NavM/>
      <Drawer />
      <Nav />
      <Main />
    </div>
  );
}
