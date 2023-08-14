import MainContext from "@/context/Context";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useCallback, useContext } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function TopButton() {
  const { arr } = useContext(MainContext);

  const [{ x, y }, scrollTo] = useWindowScroll();

  let scale: string = "",
    rotate: string = "";

  if (y < 300) {
    scale = "scale-0";
    rotate = "-rotate-180";
  } else if (y > 300) {
    scale = "scale-[2]";
    rotate = "rotate-0";
  }

  

  const bgColor = ["text-yellow2", "text-blue2"];

  const scrollToTop = useCallback(() => {
    const p = document.documentElement || document.body;

    p.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return (
    <BsFillArrowUpCircleFill
      onClick={() => scrollToTop()}
      className={`${bgColor[arr]} ${scale}  ${rotate} drop-shadow-2xl z-10 fixed right-[5dvw] top-[90vh] cursor-pointer transition duration-700`}
    />
  );
}

//${opacity} ${rotate}
