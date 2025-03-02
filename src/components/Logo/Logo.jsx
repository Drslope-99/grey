import React from "react";
import NavLogo from "../../assets/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <figure className="logo">
      <img src={NavLogo} alt="logo" className="logo__img" />
    </figure>
  );
};

export default Logo;
