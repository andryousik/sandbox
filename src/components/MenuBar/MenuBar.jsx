import React from "react";
import { useLocation } from "react-router-dom";
import MainMenu from "./MainMenu";
import AccountMenu from "./AccountMenu";
import Logo from "./Logogo";

const MenuBar = () => {
  const location = useLocation();

  return (
    <div className="MenuBar">
      <Logo />
      <MainMenu activePath={location.pathname} />
      <AccountMenu />
    </div>
  );
};

export default MenuBar;
