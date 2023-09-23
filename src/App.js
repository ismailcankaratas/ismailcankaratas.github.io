import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";

function App() {
  const observerRefs = useRef([]);

  useEffect(() => {
    console.log(observerRefs.current);
  }, [observerRefs.current]);

  return (
    <>
      <ToastContainer />
      <Nav observerRefs={observerRefs} />
      {/* CONTENT */}
      <Header id="home" navKey="0" observerRefs={observerRefs} />
      <About id="about" navKey="1" observerRefs={observerRefs} />
      <Experience id="experience" navKey="2" observerRefs={observerRefs} />
      <Portfolio id="portfolio" navKey="3" observerRefs={observerRefs} />
      <Contact id="contact" navKey="4" observerRefs={observerRefs} />
      <Footer observerRefs={observerRefs} />
    </>
  );
}

export default App;
