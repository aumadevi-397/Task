function Footer() {
  return (
    <div
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

      <div style={{ width: "250px" }}>
        <img
          src="https://gratech.vercel.app/_next/static/media/logo.385c88db.svg"
          alt="logo"
          style={{
            width: "180px",
            marginBottom: "20px",
          }}
        />

        <p>Phasellus ultricies aliquam volutpat</p>
        <p>ullamcorper laoreet neque, a lacinia</p>
        <p>curabitur lacinia mollis</p>
      </div>

      <div style={{ width: "220px" }}>
        <h1>IT Solution</h1>
        <p>IT Management</p>
        <p>SEO Optimization</p>
        <p>Web Development</p> 
        <p>Cyber Security</p>
        <p>Data Security</p> 
      </div>

      <div style={{ width: "220px" }}>
        <h1>Quick Link</h1>
        <p>About Gratech</p> 
        <p>Our Services</p> 
        <p>Pricing Plan</p> 
        <p>Our Projects</p> 
        <p>Our Team</p>
      </div>

      <div style={{ width: "220px" }}>
        <h1>Contact Us</h1>

        <p>
          4517 Washington Ave.
          Manchester, Kentucky 39495
        </p>
      </div>

    </div>
  );
}

export default Footer;