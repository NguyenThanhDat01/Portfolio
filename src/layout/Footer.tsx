import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
  <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "black",
        padding: "25px 80px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          color: "#ff4d4f",
        }}
      >
        Alex
      </div>

      {/* Menu */}
      <nav
        style={{
          display: "flex",
          gap: "35px",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#ff4d4f" : "white",
            textDecoration: "none",
            fontSize: "18px",
            borderBottom: isActive ? "2px solid #ff4d4f" : "none",
            paddingBottom: "4px",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/skill"
          style={({ isActive }) => ({
            color: isActive ? "#ff4d4f" : "white",
            textDecoration: "none",
            fontSize: "18px",
            borderBottom: isActive ? "2px solid #ff4d4f" : "none",
            paddingBottom: "4px",
          })}
        >
          Skills
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "#ff4d4f" : "white",
            textDecoration: "none",
            fontSize: "18px",
            borderBottom: isActive ? "2px solid #ff4d4f" : "none",
            paddingBottom: "4px",
          })}
        >
          Contact
        </NavLink>
      </nav>
    </footer>
  );
};
export default Footer