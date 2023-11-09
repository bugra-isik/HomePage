"use client";

import CopyButton from "@/components/ui/CopyButton";
import Prism from "prismjs";
import { useEffect, useState } from "react";

export default function Page() {
  const [theme, setTheme] = useState<number | undefined>(undefined);

  useEffect(() => {
    Prism.highlightAll();
    setTheme(Number(localStorage.getItem("theme")));
  }, []);

  console.log(theme);
  const install = `npm i -D prettier`;
  const script = `"pretty": "prettier --write \\"./**/*.{js,jsx,mjs,cjs,ts,tsx,json}\\""`;
  const npm = `npm run pretty`;

  return (
    <>
      {theme !== undefined && (
        <main
          className={`${
            theme ? "bg-light1 text-dark1" : "bg-dark1 text-light1"
          } w-full min-h-screen`}
        >
          <section
            className={`${
              theme ? "bg-light2" : "bg-dark2"
            } m-auto min-h-screen w-full sm:w-2/3 px-10 pt-10 pb-10`}
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
            <pre
              className={`${
                theme ? "bg-light1" : "bg-dark1"
              } relative mb-5 flex rounded p-10`}
            >
              <CopyButton value={install} theme={theme} />
              <code
                className={`${
                  theme ? "text-dark1" : "text-light1"
                } language-json font-black`}
              >
                {install}
              </code>
            </pre>
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
            <pre
              className={`${
                theme ? "bg-light1" : "bg-dark1"
              } relative mb-5 flex rounded p-10`}
            >
              <CopyButton value={script} theme={theme} />
              <code
                className={`${
                  theme ? "text-dark1" : "text-light1"
                } language-json font-black truncate`}
              >
                {script}
              </code>
            </pre>
            <h2
              className={`mb-5 text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
            >
              Run script
            </h2>
            <pre
              className={`${
                theme ? "bg-light1" : "bg-dark1"
              } relative flex rounded p-10`}
            >
              <CopyButton value={npm} theme={theme} />
              <code
                className={`${
                  theme ? "text-dark1" : "text-light1"
                } language-json font-black`}
              >
                {npm}
              </code>
            </pre>
          </section>
        </main>
      )}
    </>
  );
}