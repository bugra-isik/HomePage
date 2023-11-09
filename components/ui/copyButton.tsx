import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

export default function CopyButton({ value, theme }) {
  const [toggle, setToggle] = useState<boolean>(true);
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <button
      className={`${
        theme
          ? "border-light2 text-dark1 hover:bg-light2"
          : "border-dark2 text-light1 hover:bg-dark2"
      } absolute right-2 top-2 flex w-24 cursor-copy items-center justify-center gap-2 rounded border-2 px-1 py-1 text-xs transition sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base`}
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
