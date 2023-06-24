"use client";

import Image from "next/image";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import MainContext, {
  useState,
  useEffect,
  useContext,
} from "./context/Context";

export default function Page() {
  const [data, setData] = useState();
  const [arr, setArr] = useState(0);

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
    <MainContext.Provider value={{ data, setData, arr, setArr }}>
      <div>
        <div className={`bg-1${data?.theme[arr]}`}>
          <div className={`bg-2${data?.theme[arr]}`}>
            <Nav />
            <Main />
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}
