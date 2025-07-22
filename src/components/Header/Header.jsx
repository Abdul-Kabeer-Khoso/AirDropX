import Login from "./Login";
import Logo from "./Logo";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <Login />
    </div>
  );
};

export default Header;
