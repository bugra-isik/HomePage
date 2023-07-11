import styled from "@emotion/styled";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import MainContext, { useContext } from "./context/Context";

export default function Home() {
  const { arr, data } = useContext(MainContext);

  const Layer1 = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${data?.backgroundColor[arr]};
    background-image: url(${data?.square[arr]});
    background-size: 10%;
    background-repeat: repeat;
    z-index: 1;
  `;
  const Layer2 = styled.div`
    // position: fixed;
    width: 100%;
    height: 100vh;
    background: -webkit-linear-gradient(
      90deg
      ${data?.backgroundColor[arr]} 0%,
      #00000000 45%,
      #00000000 55%,
      ${data?.backgroundColor[arr]} 100%
    );
  `;
  return (
    <div>
      
        
          <Nav />
          <Main />
          <Footer />
        
      
    </div>
  );
}
