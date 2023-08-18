import MainContext from "@/context/Context";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function Home() {
  const { arr } = useContext(MainContext);
  const hiddenity = [true, false];

  let opa = ["opacity-100", "opacity-0"];

  return (
    <>
      <div className={`${opa[arr]} transition duration-300 `}>
        <motion.img
          className={`rounded-lg
        `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          hidden={!hiddenity[arr]}
          src="https://onedrive.live.com/embed?resid=C9DCC7798DEEEC1D%2116865&authkey=%21AGDkD01QezbgB9w&width=2560&height=1440"
          alt="img"
        />
      </div>
      <div className={`${opa[arr == 0 ? 1 : 0]} transition duration-300 `}>
        <motion.img
          className={`rounded-lg`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          hidden={hiddenity[arr]}
          src="https://onedrive.live.com/embed?resid=C9DCC7798DEEEC1D%2116864&authkey=%21AGKVXAT2CzDVj4U&width=3840&height=2160"
          alt="img"
        />
      </div>
    </>
  );
}
