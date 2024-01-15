import "../styles/Components.scss";
import menuIcon from "../assets/menu_icon.png";

const Navbar = ({ setIsSidebarActive, activeMenu }) => {
  return (
    <nav>
      <div className="icon">
        <img
          src={menuIcon}
          onClick={() => setIsSidebarActive(true)}
          style={{ cursor: "pointer" }}
          alt="menu"
        />
      </div>

      <span id="active_menu">{activeMenu}</span>
    </nav>
  );
};

export default Navbar;
