import React from "react";
import logo from "../image/logo.png";
import vingadores from "../image/vingadores.jpg";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" />
      </div>
      <div>
        <img src={vingadores} className="img-fluid" />
      </div>
    </div>
  );
};

export default Header;
