import { useWindowSize } from "@uidotdev/usehooks";
import { useContext, useState, useRef, useEffect } from "react";
import LanguageSwitch from "./languageSwitch/LanguageSwitch";
import Link from "next/link";
import Switch from "./toggleSwitch/Switch";
import MainContext from "../../context/Context";


export default function Nav() {
  const { data, arr, setArr, setClick, langArr } = useContext(MainContext);
  const [enabled, setEnabled] = useState(false);

  const handleClick = (value) => {
    setClick(value);
  };
  const reload = () => {
    window.location.reload();
  };

  const switchSize = useWindowSize();
  const navLinksSize = useWindowSize();
  const logoSize = useWindowSize();

  const scaleSwitch = switchSize.width / 2811;
  const scaleNavLinks = navLinksSize.width / 1800;
  const scaleLogo = logoSize.width / 1581;

  // const Li = styled.li`
  //   color: ${data?.textColor2[arr]};

  //   font-size: 1.5rem;
  //   font-family: "Inter", sans-serif;
  // `;

  const list = data?.nav.map((item, index) => (
    <Link key={`${item[2].id}`} href={`#${item[1]}`} style={{}}>
      <div
        className={`hover:text-${data?.navLinkColor[arr]}  text-${data?.textColor[arr]}  zort `}
        onClick={() => handleClick(item[1])}
      >
        {item[langArr]}
      </div>
    </Link>
  ));

  return (
    <>
      <nav
        className="select-none  flex items-center justify-between  "
        style={{
          backgroundColor: data?.navColor[arr],
          borderBottom: `0.3vw solid ${data?.dividerColor[arr]}`,
          padding: "0vw 10vw",
          height: "7.5vw",
        }}
      >
        {/* -------------------------------------------------------------------------------------- */}
        <ul
          onClick={reload}
          style={{
            display: "flex",
            width: "30vw",
            cursor: "pointer",
            // transform: `scale(${0.5})`,
          }}
        >
          <img title="Librouse!" id="logo" src={data?.logo[arr]} alt="" />
        </ul>
        {/* -------------------------------------------------------------------------------------- */}
        <ul
          className="flex items-center justify-center "
          style={{
            width: "75vw",
            gap: "3vw",
            transform: `scale(${scaleNavLinks})`,
          }}
        >
          {list}
        </ul>
        {/* -------------------------------------------------------------------------------------- */}
        <ul
          style={{}}
          className={`flex  select-none justify-between items-center gap-5`}
        >
          <div style={{ gap: "3vw", transform: `scale(${scaleNavLinks})` }}>
            <LanguageSwitch />{" "}
          </div>

          <div style={{ transform: `scale(${scaleSwitch})` }}>
            <Switch />
          </div>
        </ul>
        {/* -------------------------------------------------------------------------------------- */}
      </nav>
    </>
  );
}
