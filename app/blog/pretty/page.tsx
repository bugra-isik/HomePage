"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyButton from "@/components/ui/copyButton";
import { useEffect, useState } from "react";

export default function Page() {
  const [theme, setTheme] = useState<number | undefined>(undefined);

  useEffect(() => {
    setTheme(Number(localStorage.getItem("theme")));
  }, [setTheme]);

  const install = `npm i -D prettier`;
  const script = `"pretty": "prettier --write \\"./**/*.{js,jsx,mjs,cjs,ts,tsx,json}\\""`;
  const npm = `npm run pretty`;

  return (
    <>
      {theme !== undefined && (
        <main
          className={`${
            theme ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
          } min-h-screen w-full`}
        >
          <section
            className={`${
              theme ? "bg-light2" : "bg-dark2"
            } m-auto min-h-screen w-full px-10 pb-10 pt-10 sm:w-2/3`}
          >
            <h1
              className={`${
                theme ? "text-colorA" : "text-color1"
              } mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl`}
            >
              Get Pretty!
            </h1>
            <p
              className={`mb-10 text-lg sm:text-2xl md:text-3xl lg:text-lg xl:text-2xl 2xl:text-3xl`}
            >
              To format all your files
            </p>

            <h2
              className={`mb-5 text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
            >
              Install prettier:
            </h2>
            <div className={`relative`}>
              <SyntaxHighlighter
                language="text"
                style={stackoverflowDark}
                className={`relative mb-5 flex rounded bg-dark1 p-10`}
              >
                {install}
              </SyntaxHighlighter>
              <CopyButton value={install} theme={theme} />
            </div>
            <h2
              className={`mb-5 text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
            >
              Add following{" "}
              <span className={`${theme ? "text-colorA" : "text-color1"}`}>
                script
              </span>{" "}
              in{" "}
              <span
                className={`${
                  theme ? "text-colorA" : "text-color1"
                } text-color1`}
              >
                package.json
              </span>
              :
            </h2>
            <div className="relative">
              <SyntaxHighlighter
                language="json"
                style={stackoverflowDark}
                className={`relative mb-5 flex rounded bg-dark1 p-10`}
              >
                {script}
              </SyntaxHighlighter>
              <CopyButton value={script} theme={theme} />
            </div>
            <h2
              className={`mb-5 text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
            >
              Run script:
            </h2>
            <div className={`relative`}>
              <SyntaxHighlighter
                language="text"
                style={stackoverflowDark}
                className={`relative mb-5 flex rounded bg-dark1 p-10`}
              >
                {npm}
              </SyntaxHighlighter>
              <CopyButton value={npm} theme={theme} />
            </div>
          </section>
        </main>
      )}
    </>
  );
}
