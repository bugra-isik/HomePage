import MainContext from "@/context/Context";
import { useEffect, useRef, useContext } from "react";

export default function Typing() {
  const { arr } = useContext(MainContext);

  const typingData = {
    text: "",
    textArray: [`console.log("Merhaba.")`, `console.log("Hello.")`],
    textIndex: 0,
    charIndex: 0,
    pauseEnd: 1500,
    cursorSpeed: 420,
    pauseStart: 20,
    typeSpeed: 110,
    direction: "forward",
  };

  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function startTyping() {
      let current = typingData.textArray[typingData.textIndex];
      if (typingData.charIndex > current.length) {
        typingData.direction = "backward";
        clearInterval(typingInterval);
        setTimeout(function () {
          typingInterval = setInterval(startTyping, typingData.typeSpeed);
        }, typingData.pauseEnd);
      }

      typingData.text = current.substring(0, typingData.charIndex);
      if (typingData.direction === "forward") {
        typingData.charIndex += 1;
      } else {
        if (typingData.charIndex === 0) {
          typingData.direction = "forward";
          clearInterval(typingInterval);
          setTimeout(function () {
            typingData.textIndex += 1;
            if (typingData.textIndex >= typingData.textArray.length) {
              typingData.textIndex = 0;
            }
            typingInterval = setInterval(startTyping, typingData.typeSpeed);
          }, typingData.pauseStart);
        }
        typingData.charIndex -= 1;
      }

      const typingTextElement = document.getElementById("typing-text");
      if (typingTextElement) {
        typingTextElement.innerText = typingData.text;
      }
    }

    let typingInterval = setInterval(startTyping, typingData.typeSpeed);

    const cursorInterval = setInterval(function () {
      if (cursorRef.current) {
        cursorRef.current.classList.toggle("hidden");
      }
    }, typingData.cursorSpeed);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [typingData]);

  const text: string[] = ["text-light", "text-dark"];

  return (
    <div className="container flex items-center justify-start">
      <div className="mx-auto max-w-7xl text-center">
        <div className="relative left-0 top-0 h-[25%]">
          <h1
            className={`${text[arr]}  text-xl font-black transition duration-300 sm:text-3xl lg:text-5xl 2xl:text-7xl`}
            id="typing-text"
          ></h1>
          <span
            className="absolute right-0 top-0 -mr-8 hidden h-full w-5 bg-white"
            ref={cursorRef}
          ></span>
        </div>
      </div>
    </div>
  );
}
