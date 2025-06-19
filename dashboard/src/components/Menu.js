import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [user, setUser] = useState(null); // ✅ Moved out of useEffect
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userStr = params.get("user");

    if (userStr) {
      try {
        const user = JSON.parse(decodeURIComponent(userStr));
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User set in state and localStorage:", user);
      } catch (err) {
        console.error("Failed to decode user:", err);
      }
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={() => handleMenuClick(5)} style={{ textDecoration: "none" }}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />

        <div className="dropdown ms-auto" style={{ position: "relative" }}>
          <div
            className="d-flex align-items-center cursor-pointer"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            <div className="avatar bg-secondary rounded-circle" style={{ width: 30, height: 30 }}></div>
            <p className="ms-2 mb-0">{user?.body?.name || user?.email || "USER"}</p>
          </div>

          {isProfileDropdownOpen && (
            <div
              className="dropdown-menu show"
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                minWidth: "120px",
                zIndex: 1000,
              }}
            >
              <button
                className="dropdown-item"
                onClick={async () => {
                  try {
                    // Send logout request
                    await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
                  } catch (error) {
                    console.error("Logout failed:", error);
                  } finally {
                    localStorage.removeItem("user");
                  }
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Menu;
