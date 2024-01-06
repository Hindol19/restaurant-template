import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar3";
import NavbarMob from "./Components/NavbarMob";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import { useMediaQuery } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="App">
      {isSmallScreen ? <NavbarMob /> : <Navbar />}

      <Home />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
