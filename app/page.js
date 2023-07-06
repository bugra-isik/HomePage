"use client";

import Image from "next/image";
import Footer from "./components/Footer";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import MainContext, {
  useState,
  useEffect,
  useContext,
} from "./context/Context";

export default function Page() {
  const [data, setData] = useState();
  const [arr, setArr] = useState(0);
  const [click, setClick] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", arr);
  }, [arr]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("API hatası:", error);
      });
  }, []);

  return (
    <MainContext.Provider
      value={{ data, setData, arr, setArr, click, setClick }}
    >
      <div>
        <div
          className="bg-fixed z-10"
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: `${data?.backgroundColor[arr]}`,
            backgroundImage: `url(${data?.square[arr]})`,
            backgroundSize: "6%",
          }}
        >
          <div
            className="fixed"
            style={{
              width: "100%",
              height: "100vh",
              background: `-webkit-linear-gradient(90deg, ${data?.backgroundColor[arr]} 0%, #00000000 45%, #00000000 55%, ${data?.backgroundColor[arr]} 100%)`,
            }}
          >
            <Nav />
            <Main />
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}
