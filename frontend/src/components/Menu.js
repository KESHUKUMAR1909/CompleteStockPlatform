import React, { useState } from "react";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from './Apps'



const Menu = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", component: <Summary /> },
    { name: "Orders", component: <Orders /> },
    { name: "Holdings", component: <Holdings /> },
    { name: "Positions", component: <Positions /> },
    { name: "Funds", component: <Funds /> },
    { name: "Apps", component: <Apps /> },
  ];

  return (
    <div>
      {/* Sticky Top Navbar */}
      <div
        className="container bg-white border-bottom  position-sticky top-0 p-2 m-auto"
        style={{ zIndex: 1000  , width:"120%"}}
      >
        <div className="d-flex align-items-center justify-content-between px-4 py-2" style={{ fontSize: "12px" }}>
          {/* Logo */}
          <div className="col-4">
            <img src="logo.png" alt="Logo" style={{ width: "35px" }} />
          </div>

          {/* Menu */}
          <ul className="nav justify-content-center mb-0 col-8" >
            {menuItems.map((item, idx) => (
              <li className="nav-item mx-3" key={idx}>
                <button
                  className="btn btn-link nav-link p-0"
                  style={
                    selectedTab === item.name
                      ? { color: "#ff5722", fontWeight: "600" }
                      : { color: "#000" }
                  }
                  onClick={() => setSelectedTab(item.name)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* User */}
          <div className="fw-semibold">USER</div>
        </div>
      </div>

      {/* Rendered View Below */}
      <div className="container py-3">
        {menuItems.find((item) => item.name === selectedTab)?.component}
      </div>
    </div>
  );
};

export default Menu;
