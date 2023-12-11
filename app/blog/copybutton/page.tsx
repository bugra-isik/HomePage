"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyButton from "@/components/ui/copyButton";
import { useEffect, useState } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { AiFillCopy } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

export default function Page() {
  const [theme, setTheme] = useState<number | undefined>(undefined);
  const [toggle, setToggle] = useState<boolean>(true);
  const [, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    setTheme(Number(localStorage.getItem("theme")));
  }, [setTheme]);

  const npm = `npm i @uidotdev/usehooks react-icons`;

  const imports = `
  // copyButton.jsx

  import { useCopyToClipboard } from "@uidotdev/usehooks";
  import { AiFillCopy } from "react-icons/ai";
  import { BsCheckLg } from "react-icons/bs";
  `;

  const copyButtonCode = `
  // copyButton.jsx

  export default function CopyButton({ value }) {
    const [toggle, setToggle] = useState(true);
    const [, copyToClipboard] = useCopyToClipboard();
  
    return (
      <button
        className={\`flex w-24 cursor-copy items-center justify-center gap-2 rounded border px-1 py-1 text-xs transition hover:border-white/50 hover:bg-black/50 sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base\`}
        onClick={() => {
          value && copyToClipboard(value);
          setToggle(false);
          setTimeout(() => {
            setToggle(true);
          }, 2000);
        }}
      >
        {toggle ? (
          <>
            <AiFillCopy />
            <div>Copy</div>
          </>
        ) : (
          <>
            <span className={\`text-xl\`}>
              <BsCheckLg />
            </span>
            <div>Copied</div>
          </>
        )}
      </button>
    );
  }
`;

  const component = `<CopyButton value={value}/>`;

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
              Copy Button
            </h1>
            <h2
              className={`mb-5 text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
            >
              Install packages:
            </h2>
            <div className={`relative`}>
              <SyntaxHighlighter
                language="xml"
                style={stackoverflowDark}
                className={`mb-5 flex rounded bg-dark1 p-10`}
              >
                {npm}
              </SyntaxHighlighter>
              <CopyButton value={npm} theme={theme} />
            </div>
            <h2
              className={`mb-5 text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
            >
              Add imports:
            </h2>
            <div className={`relative`}>
              <SyntaxHighlighter
                language="javascript"
                style={stackoverflowDark}
                className={`SyntaxHighlighter mb-5 flex max-h-96 rounded bg-dark1 p-10`}
              >
                {imports}
              </SyntaxHighlighter>
              <CopyButton value={imports} theme={theme} />
            </div>
            <h2
              className={`mb-5 text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
            >
              Add code below to your project:
            </h2>
            <div className={`relative`}>
              <SyntaxHighlighter
                language="jsx"
                style={stackoverflowDark}
                className={`SyntaxHighlighter mb-5 flex max-h-96 rounded bg-dark1 p-10`}
              >
                {copyButtonCode}
              </SyntaxHighlighter>
              <CopyButton value={copyButtonCode} theme={theme} />
            </div>
            <h2
              className={`mb-5 text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
            >
              Invoke the component wherever you want:
            </h2>
            <div className={`relative`}>
              <SyntaxHighlighter
                language="jsx"
                style={stackoverflowDark}
                className={`SyntaxHighlighter mb-5 flex max-h-96 rounded bg-dark1 p-10`}
              >
                {component}
              </SyntaxHighlighter>
              <CopyButton value={component} theme={theme} />
            </div>
            <SyntaxHighlighter
              language="text"
              style={stackoverflowDark}
              className={`SyntaxHighlighter mb-5 flex max-h-96 rounded bg-dark1 p-10`}
            >
              {
                "Good to know: The value prop in the component represents the value you want to copy."
              }
            </SyntaxHighlighter>
            <h2
              className={`mb-5 text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
            >
              Congratulations, now you have a copy button.
            </h2>
            <div className={`relative`}>
              <button
                className={`flex w-24 cursor-copy items-center justify-center gap-2 rounded border px-1 py-1 text-xs transition hover:border-white/50 hover:bg-black/50 sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base`}
                onClick={() => {
                  copyToClipboard("www.devbugra.com");
                  setToggle(false);
                  setTimeout(() => {
                    setToggle(true);
                  }, 2000);
                }}
              >
                {toggle ? (
                  <>
                    <AiFillCopy />
                    <div>Copy</div>
                  </>
                ) : (
                  <>
                    <span className={`text-xl`}>
                      <BsCheckLg />
                    </span>
                    <div>Copied</div>
                  </>
                )}
              </button>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
