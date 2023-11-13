import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

export default function CopyButton({ value, theme }) {
  const [toggle, setToggle] = useState<boolean>(true);
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <button
      className={`absolute right-2 top-2 flex w-24 cursor-copy items-center justify-center gap-2 rounded border border-light2/50 px-1 py-1 text-xs text-light1 transition hover:bg-dark2 sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base`}
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
          <span className={`text-xl`}>
            <BsCheckLg />
          </span>
          <div>Copied</div>
        </>
      )}
    </button>
  );
}
