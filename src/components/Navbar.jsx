
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        margin: "0px",
        backgroundColor: "navy",
        display: "flex",
        gap: "30px",
        height: "70px",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "20px",
        width: "100%",
      }}
    >

      {/* Logo */}
      <img
        src="https://gratech.vercel.app/_next/static/media/logo-light.c8c9f0c9.svg"
        alt="logo"
        style={{
          width: "150px",
          height: "40px",
          alignContent: "left",
          marginRight: "100px",
      
        }}
      />

      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        Home
      </Link>

      <Link style={{ color: "white", textDecoration: "none" }} to="/about">
        About
      </Link>

      <Link style={{ color: "white", textDecoration: "none" }} to="/services">
        Services
      </Link>

      <Link style={{ color: "white", textDecoration: "none" }} to="/blogs">
        Blogs
      </Link>

      <Link style={{ color: "white", textDecoration: "none" }} to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;

