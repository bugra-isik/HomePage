import MainContext from "@/context/Context";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const { arr } = useContext(MainContext);
  const hiddenity = [true, false];

  let opa = ["opacity-100", "opacity-0"];

  return (
    <>
      <div className={`${opa[arr]} transition duration-300 `}>
        <Image
          hidden={!hiddenity[arr]}
          src="/dark.jpg"
          alt="img"
          width={9999}
          height={9999}
        />
      </div>
      <div className={`${opa[arr == 0 ? 1 : 0]} transition duration-300 `}>
        <Image
          hidden={hiddenity[arr]}
          src="/light.jpg"
          alt="img"
          width={9999}
          height={9999}
        />
      </div>
    </>
  );
}
