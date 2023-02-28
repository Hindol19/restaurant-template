import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar2";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
