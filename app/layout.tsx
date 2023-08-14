"use client";
import MainContext from "@/context/Context";
import data from "@/db/data.json";
import { useEffect, useState } from "react";
import "./global.sass";
import { Metadata } from "next";

const metadata = {
  title: "Bugra || Web Dev.",
};

const text = ["text-light", "text-dark"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [arr, setArr] = useState<number>(0);
  const [langArr, setLangArr] = useState<number>(0);
  const [click, setClick] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("lang", langArr.toString());
  }, [langArr]);

  useEffect(() => {
    localStorage.setItem("theme", arr.toString());
  }, [arr]);

  const scrollBar = ["#1c1c1c #030712 ", " #9ca3af #f3f4f6"];
  const htmlBg = ["#161616", "#fcfcfc"];

  return (
    <html
      lang="en"
      style={{
        scrollbarColor: scrollBar[arr],
        scrollbarWidth: "none",
        scrollBehavior: "smooth",
        background: htmlBg[arr],
      }}
      className={`${htmlBg[arr]} transition-colors duration-300`}
    >
      <head>
        <title>{metadata.title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Bugra Isik, Web Development, Next.js, Portfolio"
        />
        <meta
          name="description"
          content="Merhaba! Ben Buğra Işık, bir web geliştiriciyim. Bu kişisel web sitesinde web geliştirme projelerimi ve deneyimlerimi paylaşıyorum. Frontend ve backend teknolojileriyle ilgileniyorum. Projelerimi inceleyin ve benimle iletişime geçmekten çekinmeyin."
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Buğra Işık" />
        <link
          rel="shortcut icon"
          href="favicon-196x196.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <MainContext.Provider
          value={{
            data,
            arr,
            setArr,
            click,
            setClick,
            langArr,
            setLangArr,
            text,
            isOpen,
            setIsOpen,
          }}
        >
          {children}
        </MainContext.Provider>
      </body>
    </html>
  );
}
