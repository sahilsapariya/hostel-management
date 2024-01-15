import React from "react";
import closeIcon from "../assets/close_icon.png";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isSidebarActive, setIsSidebarActive, setActiveMenu }) => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      {isSidebarActive && (
        <div className="sidebar">
          <div className="sidebar__container">
            <div className="icon">
              <img
                src={closeIcon}
                onClick={() => setIsSidebarActive(false)}
                style={{ cursor: "pointer" }}
                alt="close"
              />
            </div>

            <div className="menu_list">
              <ul>
                <li>
                  <NavLink
                    to={"/"}
                    activeClassName="active_menu"
                    onClick={() => {
                      setActiveMenu("Home");
                      setIsSidebarActive(false);
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/profiles"}
                    activeClassName="active_menu"
                    onClick={() => {
                      setActiveMenu("Profiles");
                      setIsSidebarActive(false);
                    }}
                  >
                    Profiles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/bills"}
                    activeClassName="active_menu"
                    onClick={() => {
                      setActiveMenu("Bills");
                      setIsSidebarActive(false);
                    }}
                  >
                    Bills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/rooms"}
                    activeClassName="active_menu"
                    onClick={() => {
                      setActiveMenu("Rooms");
                      setIsSidebarActive(false);
                    }}
                  >
                    Rooms
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/inventory"}
                    activeClassName="active_menu"
                    onClick={() => {
                      setActiveMenu("Inventory");
                      setIsSidebarActive(false);
                    }}
                  >
                    Inventory
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="logout_button">
              <button type="button" onClick={logout}>
                Logout
              </button>
            </div>
          </div>

          <div className="blur"></div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
