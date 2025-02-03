import React from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import dashboardIcon from "../../icons/dashboard.png";
import ContolPanelIcon from "../../icons/control_panel.png";
import PnlIcon from "../../icons/pnl.png";
import HistoryIcon from "../../icons/history.png";
import SecurityIcon from "../../icons/security_gray.png";

const MainMenu = ({ activePath }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Item
        text="Dashboard"
        icon={dashboardIcon}
        onClick={() => navigate("/dashboard")}
        className={activePath === "/dashboard" ? "active" : ""}
      />
      <Item
        text="Control Panel"
        icon={ContolPanelIcon}
        onClick={() => navigate("/control-panel")}
        className={activePath === "/control-panel" ? "active" : ""}
      />
      <Item
        text="PNL"
        icon={PnlIcon}
        onClick={() => navigate("/pnl")}
        className={activePath === "/pnl" ? "active" : ""}
      />
      <Item
        text="History"
        icon={HistoryIcon}
        onClick={() => navigate("/history")}
        className={activePath === "/history" ? "active" : ""}
      />
      <Item
        text="Security"
        icon={SecurityIcon}
        onClick={() => navigate("/security")}
        className={activePath === "/security" ? "active" : ""}
      />
    </div>
  );
};

export default MainMenu;
