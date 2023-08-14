import MainContext from "@/context/Context";
import Link from "next/link";
import { useCallback, useContext } from "react";

export default function LinksM() {
  const { data, arr, langArr, setClick, click, text, setIsOpen, isOpen } =
    useContext(MainContext);

  const handleClick = useCallback(
    (x: string) => {
      setClick(x);
    },
    [setClick],
  );

  const hover = ["hover:text-yellow", "hover:text-blue"];
  const clickColor = ["text-yellow", "text-blue"];
  const bgColor = ["bg-dark", "bg-light2"];

  const list = data?.nav.map((item: any, index: number) => (
    <div key={index} className={`flex items-center py-4`}>
      <Link
        href={`#${item[1].toLowerCase()}`}
        className={`${hover[arr]} ${
          click === item[1] ? clickColor[arr] : text[arr]
        } rounded transition duration-300`}
        onClick={() => {
          handleClick(item[1]);
          setIsOpen(!isOpen);
        }}
      >
        {item[langArr]}
      </Link>
    </div>
  ));
  return <>{list}</>;
}
