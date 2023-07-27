"use client";

import Main from "@/components/main/Main";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import MainContext from "@/context/Context";
import { useContext, useState } from "react";
import Image from "next/image";

export default function Page() {
  const { arr, data } = useContext(MainContext);
  const [hidden, setHidden] = useState();

  const theme = ["bg-dark", "bg-light"];

  return (
    <div
      className={`${theme[arr]} z-[-50] min-h-[100dvh] transition-colors duration-300 box-border`}
    >
      <Nav />
      <Main />
      {/* <Footer /> */}
      
    </div>
  );
}
