import React, { useState } from "react";
import Header from "./Layouts/Header/Header";
import MainContent from "./Layouts/MainContent/MainContent";
import Footer from "./Layouts/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Logo from "./components/Logo/Logo";
import NavMenu from "./components/NavMenu/NavMenu";
import NavToggle from "./components/NavToggle/NavToggle";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/AboutSection/About";
import Services from "./components/ServiceSection/Services";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const openMenuHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <Header>
        <NavBar>
          <Logo />
          <NavMenu isOpen={toggle} clicked={openMenuHandler} />
          <NavToggle open={toggle} openMenu={openMenuHandler} />
        </NavBar>
        <HeroSection />
      </Header>
      <MainContent>
        <About />
        <Services />
      </MainContent>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
