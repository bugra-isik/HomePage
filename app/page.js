"use client";

import Main from "@/components/main/Main";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import MainContext from "@/context/Context";
import { useContext } from "react";


export default function Page() {
  const { arr, data } = useContext(MainContext);

  //             Dark theme - Ligt Theme
  const theme = ["gray-900", "gray-300"];

  return (
    <div className={`p-5 pb-96 bg-${theme[arr]} min-h-screen`}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
