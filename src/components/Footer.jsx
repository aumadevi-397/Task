
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <div
//       style={{
//         backgroundColor: "navy",
//         color: "white",
//         display: "flex",
//         justifyContent: "space-around",
//         flexWrap: "wrap",
//         padding: "50px",
//         gap: "30px",
//         marginTop: "30px",
//       }}
//     >

//       <div style={{ width: "250px" }}>
//         <img
//           src="https://gratech.vercel.app/_next/static/media/logo.385c88db.svg"
//           alt="logo"
//           style={{
//             width: "180px",
//             marginBottom: "20px",
//           }}
//         />

//         <p>Phasellus ultricies aliquam volutpat</p>
//         <p>ullamcorper laoreet neque, a lacinia</p>
//         <p>curabitur lacinia mollis</p>
//       </div>

//       <div style={{ width: "220px" }}>
//         <h1>IT Solution</h1>
//         <p>IT Management</p>
//         <p>SEO Optimization</p>
//         <p>Web Development</p> 
//         <p>Cyber Security</p>
//         <p>Data Security</p> 
//       </div>

//       <div style={{ width: "220px" }}>
//         <h1>Quick Link</h1>
//         <Link to="/AboutPage">About Gratech</Link>
//         <Link to="/about">Our Services</Link>
//         <Link to="/about">Pricing Plans</Link>
//         <Link to="/about">Our Team</Link>

//       </div>

//       <div style={{ width: "220px" }}>
//         <h1>Contact Us</h1>

//         <p>
//           4517 Washington Ave.
//           Manchester, Kentucky 39495
//         </p>
//       </div>

//     </div>
//   );
// }

// export default Footer;




import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "navy",
        color: "white",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: "50px",
        gap: "30px",
        marginTop: "30px",
      }}
    >

      {/* Logo + Description */}
      <div style={{ width: "250px" }}>
        <img
          src="https://gratech.vercel.app/_next/static/media/logo.385c88db.svg"
          alt="logo"
          style={{ width: "180px", marginBottom: "20px" }}
        />

        <h4>Phasellus ultricies aliquam volutpat</h4>
        <h4>ullamcorper laoreet neque, a lacinia</h4>
        <h4>curabitur lacinia mollis</h4>
      </div>

      {/* IT Solution */}
      <div style={{ width: "220px" }}>
        <h1>IT Solution</h1>

       <Link to="/services" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
          About Gratech
        </Link>


         <Link to="/services" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
         IT Solution
        </Link>


         <Link to="/services" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
          IT Management
        </Link>

         <Link to="/services" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
          SEO Optimization
        </Link>


         <Link to="/services" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
          Web development
        </Link>

         <Link to="/services" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
            Cyber Security
        </Link>
        
      </div>

      {/* Quick Links (CLICKABLE LINKS) */}
      <div style={{ width: "220px" }}>
        <h1>Quick Links</h1>

        <Link to="/about" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
          About Gratech
        </Link>

        <Link to="/services" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
         Our Services
        </Link>

        <Link to="/blogs" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
          Pricing Plan
        </Link>

        <Link to="/contact" style={{ color: "white", display: "block", textDecoration: "none", margin: "5px 0" }}>
          Our Projects
        </Link>
      </div>

      {/* Contact */}
      <div style={{ width: "220px" }}>
        <h1>Contact Us</h1>
        <p>
          4517 Washington Ave.<br />
          Manchester, Kentucky 39495
        </p>
      </div>

    </footer>
  );
}

export default Footer;