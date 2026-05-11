
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        margin: "0px",
        backgroundColor: "navy",
        paddingTop: "30px",
        display: "flex",
        gap: "30px",
        height: "50px",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "20px",
        width: "100%",
      }}
    >
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/"
      >
        Home
      </Link>

      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/about"
      >
        About
      </Link>

      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/services"
      >
        Services
      </Link>

      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/blogs"
      >
        Blogs
      </Link>

      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/contact"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;