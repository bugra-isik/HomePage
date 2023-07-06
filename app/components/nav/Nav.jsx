import { useWindowSize } from "@uidotdev/usehooks";
import { useContext, useState, useRef, useEffect } from "react";
import LanguageSwitch from "./languageSwitch/LanguageSwitch";
import Link from "next/link";
import Switch from "./toggleSwitch/Switch";
import MainContext from "../../context/Context";

export default function Nav() {
  const { data, arr, setArr, setClick } = useContext(MainContext);
  const [enabled, setEnabled] = useState(false);

  const handleClick = (value) => {
        setClick(value);
  };
  const reload = () => {
    window.location.reload();
  };

  const switchSize = useWindowSize();
  const navLinksSize = useWindowSize();

  const scaleSwitch = switchSize.width / 1400;
  const scaleNavLinks = navLinksSize.width / 1400;

  const zort = navLinksSize.width;

  const list = data?.nav.map((item, index) => (
    <Link
      key={`${item[2].id}`}
      href={`#${item[1]}`}
      style={{ color: "#fff", fontFamily: ["Montserrat", "sans-serif"] ,fontSize:"16px"}}
    >
      <li
        className={`hover:text-${data?.navLinkColor[arr]}  text-${data?.textColor[arr]}`}
        onClick={() => handleClick(item[1])}
      >
        {item[arr]}
      </li>
    </Link>
  ));

  return (
    <div>
      <nav
        className="justify-between select-none  text-2xl items-center flex"
        style={{
          backgroundColor: data?.navColor[arr],
          borderBottom: `0.5vh solid ${data?.dividerColor[arr]}`,
          padding: "3vw",
          height: "5vw",
        }}
      >
        <ul>
          <li
            onClick={reload}
            style={{
              display: "flex",
              width: "20vw",
              height: "auto",
            }}
          >
            <img id="logo" src={data?.logo[arr]} alt="" />
          </li>
        </ul>
        <ul
          className="flex"
          style={{ gap: "3vw", transform: `scale(${scaleNavLinks})` }}
        >
          {list}
        </ul>
        <ul
          className={`hover:text-${data?.navLinkColor[arr]} text-${data?.textColor[arr]} flex  select-none  text-2xl items-center gap-16 items-center`}
        >
          <li>
            <LanguageSwitch />
          </li>
          <li style={{ transform: `scale(${scaleSwitch})` }}>
            <Switch />
          </li>
        </ul>
      </nav>
    </div>
  );
}
