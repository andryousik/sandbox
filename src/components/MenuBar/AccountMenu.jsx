import React from "react";
import Item from "./Item";
import LoginIcon from "../../icons/log_in.png";
import ProfileIcon from "../../icons/profile.png";
import { useNavigate } from "react-router-dom";

const  AccountMenu = ({ activePath }) => {
  const navigate = useNavigate();
  return ( 
    <div className="account-menu">
      <h1 className="account-title">Account pages</h1>
      <Item
        text="Log in"
        icon={LoginIcon}
        onClick={() => navigate("/login")}
        className={activePath === "/login" ? "active" : ""}
      />
        <Item
        text="Profile"
        icon={ProfileIcon}  
        onClick={() => navigate("/profile")}
        className={activePath === "/profile" ? "active" : ""}
      />
    </div>
   );
}
 
export default AccountMenu;