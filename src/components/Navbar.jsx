import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>

      {/* LOGO */}
      <img
        src="https://gratech.vercel.app/_next/static/media/logo-light.c8c9f0c9.svg"
        alt="logo"
        className={styles.logo}
      />

      {/* HAMBURGER */}
      <div
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* LINKS */}
      <div
        className={`${styles.navLinks} ${open ? styles.active : ""}`}
      >
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;