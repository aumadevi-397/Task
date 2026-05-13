
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        margin: 0,
        backgroundColor: "navy",
        display: "flex",
        alignItems: "center",
        height: "70px",
        width: "100%",
        padding: "0 20px",
        position: "relative",
      }}
    >

      {/* LOGO - LEFT SIDE */}
      <img
        src="https://gratech.vercel.app/_next/static/media/logo-light.c8c9f0c9.svg"
        alt="logo"
        style={{
          width: "150px",
          height: "40px",
        }}
      />

      {/* LINKS - CENTER */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "30px",
        }}
      >
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
      </div>

    </nav>
  );
}

export default Navbar;

