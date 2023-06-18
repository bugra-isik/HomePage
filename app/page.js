"use client";

import Image from "next/image";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import MainContext, { useState } from "./context/Context";

export default function Page() {
  const [data, setData] = useState({
    theme: "-dark",
    logo: "/logodark.png",
    switchColor:"#94999e"
  });
  return (
    <MainContext.Provider value={{ data, setData }}>
      <div>
        <div className={`bg-1${data.theme}`}>
          <div className={`bg-2${data.theme}`}>
            <div className="bg-3">
              <Nav />
              <Main />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}
