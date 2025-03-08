import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import NavMenu from "../../components/NavMenu/NavMenu";
import NavToggle from "../../components/NavToggle/NavToggle";
import Logo from "../../components/Logo/Logo";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const openMenuHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="header">
      <NavBar>
        <Logo />
        <NavMenu isOpen={toggle} clicked={openMenuHandler} />
        <NavToggle open={toggle} openMenu={openMenuHandler} />
      </NavBar>
      <HeroSection />
    </header>
  );
};

export default Header;
