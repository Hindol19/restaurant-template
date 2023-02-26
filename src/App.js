import React from "react";
import Navbar from "./Components/Navbar2";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
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
