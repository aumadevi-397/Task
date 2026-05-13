import styles from "./ContactPage.module.css";

function Contact() {
  return (
    <div className={styles.contactPage}>

      {/* Heading */}
      <div className={styles.container5}>
        <h1 className={styles.heading}>
          Contact Us
        </h1>
      </div>

      {/* Main Section */}
      <div className={styles.secondpart}>

        {/* Left Side */}
        <div className={styles.tt}>

          <h1>Contact Information</h1>

          <p>
            Nullam varius, erat quis iaculis dictum,
            eros urna varius eros,
          </p>

          <p>
            ut blandit felis odio in turpis. Quisque.
          </p>

          <div className={styles.hh2}>

            <div className={styles.dd}>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbrjT5OfB6VWS_yWafspIlkl11zdpANqtQQ&s"
                alt="phone"
                className={styles.logo}
              />

              <div className={styles.dd1}>
                <p>Call Us 24/7</p>
                <h3>+208-555-0112</h3>
              </div>

            </div>

            <div className={styles.dd}>

              <img
                src="https://media.istockphoto.com/id/1125279178/vector/mail-line-icon.jpg?s=612x612&w=0&k=20&c=NASq4hMg0b6UP9V0ru4kxL2-J114O3TaakI467Pzjzw="
                alt="mail"
                className={styles.logo}
              />

              <div className={styles.dd1}>
                <p>Make a Quote</p>
                <h3>info@gmail.com</h3>
              </div>

            </div>

            <div className={styles.dd}>

              <img
                src="https://media.istockphoto.com/id/1135275961/vector/location-icon.jpg?s=612x612&w=0&k=20&c=ngYCrz7KVSr1ngvnNvNSc9fH6u7aSlu3muUkO-fWMM8="
                alt="location"
                className={styles.logo}
              />

              <div className={styles.dd1}>
                <p>Location</p>
                <h3>4517 Washington Ave</h3>
              </div>

            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className={styles.yy1}>

          <h4>GET IN TOUCH</h4>

          <h1>Ready to Get Started?</h1>

          <p>
            Nullam varius, erat quis iaculis dictum,
            eros urna varius eros,
            ut blandit felis odio in turpis.
          </p>

          <div className={styles.ff}>

            <div>
              <label>Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className={styles.input}
              />
            </div>

            <div>
              <label>Your Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
            </div>

          </div>

          <label>Write Message</label>

          <textarea
            placeholder="Enter message"
            className={styles.textarea}
          ></textarea>

          <button className={styles.button}>
            Send Message →
          </button>

        </div>

      </div>
      </div>
  );
}

export default Contact;